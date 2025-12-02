import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import type {
  PoemGroup,
  PoeticBranch,
  PoeticEvent,
  PoeticMood,
} from '../types'

interface ThreeTimelineProps {
  events: PoeticEvent[]
  activeEventId: string | null
  onSelect: (event: PoeticEvent) => void
  onHover: (event: PoeticEvent | null) => void
}

interface SatelliteOrbit {
  mesh: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>
  baseAngle: number
  radius: number
  height: number
  speed: number
  phase: number
  wobble: number
  drift: number
  tilt: number
}

interface NodeCluster {
  event: PoeticEvent
  node: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>
  shell: THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>
  core: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>
  aura: THREE.Sprite
  satelliteRoot: THREE.Group
  satellites: SatelliteOrbit[]
}

interface BranchVisual {
  branch: PoeticBranch
  mesh: THREE.Mesh<THREE.TubeGeometry, THREE.MeshStandardMaterial>
  glow: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>
}

interface ForkVisual {
  branch: PoeticBranch
  sourceId: string
  targetId: string
  line: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>
}

interface ConnectionVisual {
  branch: PoeticBranch
  sourceId: string
  targetId: string
  line: THREE.Line<THREE.BufferGeometry, THREE.LineBasicMaterial>
}

interface NodeLabelEntry {
  event: PoeticEvent
  element: HTMLDivElement
  node: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial>
}

interface LabelLayoutEntry {
  element: HTMLDivElement
  x: number
  y: number
  depth: number
  isActive: boolean
  isHovered: boolean
  lift: number
  baseOpacity: string
  priority: number
}

interface LabelRect {
  left: number
  right: number
  top: number
  bottom: number
}

interface FlowParticle {
  mesh: THREE.Mesh<THREE.SphereGeometry, THREE.MeshBasicMaterial>
  curve: THREE.Curve<THREE.Vector3>
  offset: number
  speed: number
  scale: number
  baseOpacity: number
}

const moodPalette: Record<PoeticMood, number> = {
  amore: 0xf7b874,
  natura: 0x6ed0a6,
  rivolta: 0xff7b7b,
  esilio: 0x88b9ff,
  spirituale: 0xc9a5ff,
}

const branchStyles: Record<
  PoeticBranch,
  { offsetX: number; offsetY: number; color: number; phase: number }
> = {
  radice: { offsetX: 0, offsetY: 0, color: 0x87a8ff, phase: 0.2 },
  visione: { offsetX: -4.25, offsetY: 1.4, color: 0x78dcb2, phase: 1.1 },
  civile: { offsetX: 4.35, offsetY: -1.1, color: 0xff9f90, phase: 1.9 },
  performativa: { offsetX: 2.95, offsetY: 2.25, color: 0xd5b0ff, phase: 2.5 },
}

const poemGroupStyles: Record<PoemGroup, { color: number; speed: number }> = {
  manifesto: { color: 0xffcc84, speed: 0.22 },
  ciclo: { color: 0x88c8ff, speed: 0.18 },
  frammenti: { color: 0xd9b8ff, speed: 0.26 },
}

const branchLabels: Record<PoeticBranch, string> = {
  radice: 'Radice canonica',
  visione: 'Ramo visione',
  civile: 'Ramo civile',
  performativa: 'Ramo performativo',
}

const pointer = new THREE.Vector2()
const raycaster = new THREE.Raycaster()
const scaleScratch = new THREE.Vector3()
const satelliteScaleScratch = new THREE.Vector3()
const labelProjectScratch = new THREE.Vector3()
const labelWorldScratch = new THREE.Vector3()
const cameraDirectionScratch = new THREE.Vector3()
const cameraToLabelScratch = new THREE.Vector3()
const flowPointScratch = new THREE.Vector3()
const labelLayouts: LabelLayoutEntry[] = []
const occupiedLabelRects: LabelRect[] = []
const labelPlacementOffsets = [
  { x: 0, y: 0 },
  { x: 0, y: -16 },
  { x: 0, y: 16 },
  { x: 24, y: -12 },
  { x: -24, y: -12 },
  { x: 24, y: 12 },
  { x: -24, y: 12 },
  { x: 0, y: -30 },
  { x: 0, y: 30 },
]

const rectanglesOverlap = (first: LabelRect, second: LabelRect, gap: number) =>
  !(
    first.right + gap < second.left ||
    first.left > second.right + gap ||
    first.bottom + gap < second.top ||
    first.top > second.bottom + gap
  )

const groupOrder: PoemGroup[] = ['manifesto', 'ciclo', 'frammenti']

const createPoemGeometry = (
  group: PoemGroup,
  trackGeometry: <T extends THREE.BufferGeometry>(geometry: T) => T,
) => {
  if (group === 'manifesto') {
    return trackGeometry(new THREE.BoxGeometry(0.18, 0.18, 0.18))
  }

  if (group === 'frammenti') {
    return trackGeometry(new THREE.TetrahedronGeometry(0.15))
  }

  return trackGeometry(new THREE.SphereGeometry(0.12, 12, 12))
}

const createRadialTexture = () => {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const context = canvas.getContext('2d')

  if (!context) {
    return null
  }

  const gradient = context.createRadialGradient(128, 128, 18, 128, 128, 120)
  gradient.addColorStop(0, 'rgba(255,255,255,1)')
  gradient.addColorStop(0.35, 'rgba(180,202,255,0.56)')
  gradient.addColorStop(1, 'rgba(80,106,182,0)')
  context.fillStyle = gradient
  context.fillRect(0, 0, 256, 256)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true
  return texture
}

export function ThreeTimeline({
  events,
  activeEventId,
  onSelect,
  onHover,
}: ThreeTimelineProps) {
  const hostRef = useRef<HTMLDivElement | null>(null)
  const activeEventIdRef = useRef<string | null>(activeEventId)
  const onSelectRef = useRef(onSelect)
  const onHoverRef = useRef(onHover)
  const focusOffsetByIdRef = useRef<Map<string, number>>(new Map())
  const targetOffsetRef = useRef(0)

  useEffect(() => {
    activeEventIdRef.current = activeEventId

    if (!activeEventId) {
      return
    }

    const nextOffset = focusOffsetByIdRef.current.get(activeEventId)

    if (typeof nextOffset === 'number') {
      targetOffsetRef.current = nextOffset
    }
  }, [activeEventId])

  useEffect(() => {
    onSelectRef.current = onSelect
  }, [onSelect])

  useEffect(() => {
    onHoverRef.current = onHover
  }, [onHover])

  useEffect(() => {
    const host = hostRef.current

    if (!host) {
      return
    }

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x090f24, 0.051)

    const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 320)
    camera.position.set(0, 5.2, 16)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    host.appendChild(renderer.domElement)

    const labelLayer = document.createElement('div')
    labelLayer.className = 'timeline-label-layer'
    host.appendChild(labelLayer)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enablePan = false
    controls.enableZoom = false
    controls.enableDamping = true
    controls.dampingFactor = 0.06
    controls.minDistance = 7
    controls.maxDistance = 30
    controls.maxPolarAngle = Math.PI * 0.64
    controls.target.set(0, 0, 0)

    const trackedGeometries: THREE.BufferGeometry[] = []
    const trackedMaterials: THREE.Material[] = []
    const trackedTextures: THREE.Texture[] = []

    const trackGeometry = <T extends THREE.BufferGeometry>(geometry: T): T => {
      trackedGeometries.push(geometry)
      return geometry
    }

    const trackMaterial = <T extends THREE.Material>(material: T): T => {
      trackedMaterials.push(material)
      return material
    }

    const trackTexture = <T extends THREE.Texture>(texture: T): T => {
      trackedTextures.push(texture)
      return texture
    }

    const root = new THREE.Group()
    scene.add(root)

    const ambientLight = new THREE.AmbientLight(0xa2b8ff, 0.56)
    const keyLight = new THREE.PointLight(0x84c7ff, 18, 120, 1.7)
    keyLight.position.set(9, 8, 10)
    const warmLight = new THREE.PointLight(0xff986b, 11, 98, 2)
    warmLight.position.set(-11, -1, -8)
    const fillLight = new THREE.PointLight(0xd0b7ff, 7.6, 88, 1.9)
    fillLight.position.set(0, 8, -12)
    scene.add(ambientLight, keyLight, warmLight, fillLight)

    const starsGeometry = trackGeometry(new THREE.BufferGeometry())
    const starsCount = 1950
    const starsPositions = new Float32Array(starsCount * 3)

    for (let index = 0; index < starsCount; index += 1) {
      const cursor = index * 3
      starsPositions[cursor] = (Math.random() - 0.5) * 150
      starsPositions[cursor + 1] = (Math.random() - 0.5) * 100
      starsPositions[cursor + 2] = (Math.random() - 0.5) * 170
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(starsPositions, 3),
    )

    const starsMaterial = trackMaterial(
      new THREE.PointsMaterial({
        color: 0xe0eaff,
        size: 0.06,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.72,
      }),
    )

    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    const spacing = 6.05
    const centerOffset = ((Math.max(events.length - 1, 0)) * spacing) / 2

    const points = events.map((event, index) => {
      const branchStyle = branchStyles[event.branch]
      const wave = index * 0.56 + branchStyle.phase

      return new THREE.Vector3(
        branchStyle.offsetX + Math.sin(wave) * 1.25,
        branchStyle.offsetY + Math.cos(wave * 0.84) * 0.9,
        index * spacing - centerOffset,
      )
    })

    const focusOffsets = points.map((point) => -point.z)
    const minOffset =
      focusOffsets.length > 0 ? Math.min(...focusOffsets) - 4.2 : -12
    const maxOffset =
      focusOffsets.length > 0 ? Math.max(...focusOffsets) + 4.2 : 12

    const focusOffsetById = new Map<string, number>()

    events.forEach((event, index) => {
      focusOffsetById.set(
        event.id,
        THREE.MathUtils.clamp(-points[index].z, minOffset, maxOffset),
      )
    })

    focusOffsetByIdRef.current = focusOffsetById

    if (activeEventIdRef.current) {
      const nextOffset = focusOffsetById.get(activeEventIdRef.current)

      if (typeof nextOffset === 'number') {
        targetOffsetRef.current = nextOffset
      }
    }

    const branchIndices = new Map<PoeticBranch, number[]>()

    events.forEach((event, index) => {
      const list = branchIndices.get(event.branch) ?? []
      list.push(index)
      branchIndices.set(event.branch, list)
    })

    const branchVisuals: BranchVisual[] = []
    const flowParticles: FlowParticle[] = []
    const flowGeometry = trackGeometry(new THREE.SphereGeometry(0.075, 9, 9))

    const spawnFlowParticles = (
      curve: THREE.Curve<THREE.Vector3>,
      color: number,
      count: number,
      speedRange: [number, number],
      scaleRange: [number, number],
      opacityRange: [number, number],
    ) => {
      for (let index = 0; index < count; index += 1) {
        const speed =
          speedRange[0] + Math.random() * (speedRange[1] - speedRange[0])
        const scale =
          scaleRange[0] + Math.random() * (scaleRange[1] - scaleRange[0])
        const opacity =
          opacityRange[0] + Math.random() * (opacityRange[1] - opacityRange[0])
        const material = trackMaterial(
          new THREE.MeshBasicMaterial({
            color,
            transparent: true,
            opacity,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          }),
        )
        const mesh = new THREE.Mesh(flowGeometry, material)
        mesh.scale.setScalar(scale)
        root.add(mesh)
        flowParticles.push({
          mesh,
          curve,
          offset: Math.random(),
          speed,
          scale,
          baseOpacity: opacity,
        })
      }
    }

    branchIndices.forEach((indices, branch) => {
      if (indices.length < 2) {
        return
      }

      const style = branchStyles[branch]
      const branchPoints = indices.map((eventIndex, localIndex) => {
        const source = points[eventIndex]
        const drift = Math.sin(localIndex * 1.28 + style.phase) * 0.42
        const lift = Math.cos(localIndex * 0.98 + style.phase * 1.3) * 0.26
        return new THREE.Vector3(source.x + drift * 0.28, source.y + lift, source.z)
      })
      const curve = new THREE.CatmullRomCurve3(
        branchPoints,
        false,
        'centripetal',
        0.34,
      )
      const branchGeometry = trackGeometry(
        new THREE.TubeGeometry(curve, Math.max(92, branchPoints.length * 54), 0.052, 10),
      )
      const branchMaterial = trackMaterial(
        new THREE.MeshStandardMaterial({
          color: style.color,
          emissive: style.color,
          emissiveIntensity: 0.52,
          roughness: 0.24,
          metalness: 0.2,
          transparent: true,
          opacity: 0.5,
          depthWrite: false,
        }),
      )

      const branchMesh = new THREE.Mesh(branchGeometry, branchMaterial)
      branchMesh.renderOrder = 2
      root.add(branchMesh)

      const branchGlowGeometry = trackGeometry(
        new THREE.BufferGeometry().setFromPoints(curve.getPoints(190)),
      )
      const branchGlowMaterial = trackMaterial(
        new THREE.LineBasicMaterial({
          color: style.color,
          transparent: true,
          opacity: 0.34,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      )
      const branchGlow = new THREE.Line(branchGlowGeometry, branchGlowMaterial)
      branchGlow.renderOrder = 3
      root.add(branchGlow)

      spawnFlowParticles(
        curve,
        style.color,
        Math.max(10, indices.length * 5),
        [0.018, 0.045],
        [0.09, 0.16],
        [0.3, 0.5],
      )
      branchVisuals.push({ branch, mesh: branchMesh, glow: branchGlow })
    })

    const eventById = new Map(events.map((event) => [event.id, event]))
    const pointById = new Map(events.map((event, index) => [event.id, points[index]]))
    const forkVisuals: ForkVisual[] = []

    events.forEach((event, index) => {
      if (!event.branchFrom) {
        return
      }

      const fromPoint = pointById.get(event.branchFrom)
      const toPoint = points[index]

      if (!fromPoint || !toPoint) {
        return
      }

      const controlPoint = fromPoint.clone().add(toPoint).multiplyScalar(0.5)
      controlPoint.x += (toPoint.x - fromPoint.x) * 0.18
      controlPoint.y += 2.1 + Math.abs(fromPoint.x - toPoint.x) * 0.44
      controlPoint.z += Math.sin(index * 0.68 + branchStyles[event.branch].phase) * 0.72

      const branchCurve = new THREE.QuadraticBezierCurve3(
        fromPoint,
        controlPoint,
        toPoint,
      )

      const linkGeometry = trackGeometry(
        new THREE.BufferGeometry().setFromPoints(branchCurve.getPoints(26)),
      )
      const linkMaterial = trackMaterial(
        new THREE.LineBasicMaterial({
          color: branchStyles[event.branch].color,
          transparent: true,
          opacity: 0.4,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      )

      const link = new THREE.Line(linkGeometry, linkMaterial)
      link.renderOrder = 2
      root.add(link)
      spawnFlowParticles(
        branchCurve,
        branchStyles[event.branch].color,
        8,
        [0.024, 0.052],
        [0.07, 0.12],
        [0.26, 0.42],
      )
      forkVisuals.push({
        branch: event.branch,
        sourceId: event.branchFrom,
        targetId: event.id,
        line: link,
      })
    })

    const seenLinks = new Set<string>()
    const connectionVisuals: ConnectionVisual[] = []

    events.forEach((event, sourceIndex) => {
      const sourcePoint = points[sourceIndex]

      event.connections.forEach((targetId) => {
        const targetPoint = pointById.get(targetId)

        if (!targetPoint) {
          return
        }

        const linkKey = [event.id, targetId].sort().join('__')

        if (seenLinks.has(linkKey)) {
          return
        }

        seenLinks.add(linkKey)
        const targetEvent = eventById.get(targetId)
        const sourceColor = branchStyles[event.branch].color
        const targetColor = targetEvent
          ? branchStyles[targetEvent.branch].color
          : sourceColor

        const controlPoint = sourcePoint.clone().add(targetPoint).multiplyScalar(0.5)
        controlPoint.x += (targetPoint.x - sourcePoint.x) * 0.08
        controlPoint.y += 1.5 + Math.abs(targetPoint.x - sourcePoint.x) * 0.16
        controlPoint.z += Math.cos(sourceIndex * 0.8 + targetPoint.z * 0.1) * 0.5

        const blendedColor = new THREE.Color(sourceColor).lerp(
          new THREE.Color(targetColor),
          0.5,
        )

        const connectionCurve = new THREE.QuadraticBezierCurve3(
          sourcePoint,
          controlPoint,
          targetPoint,
        )

        const connectionGeometry = trackGeometry(
          new THREE.BufferGeometry().setFromPoints(connectionCurve.getPoints(22)),
        )
        const connectionMaterial = trackMaterial(
          new THREE.LineBasicMaterial({
            color: blendedColor,
            transparent: true,
            opacity: 0.17,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          }),
        )

        const connectionLine = new THREE.Line(connectionGeometry, connectionMaterial)
        connectionLine.renderOrder = 1
        root.add(connectionLine)
        spawnFlowParticles(connectionCurve, blendedColor.getHex(), 4, [0.012, 0.03], [0.045, 0.09], [0.16, 0.28])
        connectionVisuals.push({
          branch: event.branch,
          sourceId: event.id,
          targetId,
          line: connectionLine,
        })
      })
    })

    const interactiveMeshes: THREE.Object3D[] = []
    const clusters: NodeCluster[] = []
    const labels: NodeLabelEntry[] = []
    const auraTexture = createRadialTexture()
    const trackedAuraTexture = auraTexture ? trackTexture(auraTexture) : null

    points.forEach((point, index) => {
      const event = events[index]
      const baseColor = moodPalette[event.mood]
      const nodeRadius = 0.31 + Math.min(event.poems.length, 4) * 0.08

      const nodeGeometry = trackGeometry(new THREE.IcosahedronGeometry(nodeRadius, 1))
      const nodeMaterial = trackMaterial(
        new THREE.MeshStandardMaterial({
          color: baseColor,
          emissive: baseColor,
          emissiveIntensity: 0.34,
          roughness: 0.38,
          metalness: 0.36,
          flatShading: true,
          transparent: true,
          opacity: 0.95,
        }),
      )
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial)
      node.position.copy(point)
      node.userData.event = event
      root.add(node)
      interactiveMeshes.push(node)

      const shellGeometry = trackGeometry(
        new THREE.IcosahedronGeometry(nodeRadius * 1.7, 0),
      )
      const shellMaterial = trackMaterial(
        new THREE.MeshBasicMaterial({
          color: baseColor,
          transparent: true,
          opacity: 0.23,
          wireframe: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
        }),
      )
      const shell = new THREE.Mesh(shellGeometry, shellMaterial)
      shell.position.copy(point)
      root.add(shell)

      const coreGeometry = trackGeometry(
        new THREE.SphereGeometry(nodeRadius * 0.36, 14, 14),
      )
      const coreMaterial = trackMaterial(
        new THREE.MeshBasicMaterial({
          color: baseColor,
          transparent: true,
          opacity: 0.92,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      )
      const core = new THREE.Mesh(coreGeometry, coreMaterial)
      core.position.copy(point)
      root.add(core)

      const auraMaterial = trackMaterial(
        new THREE.SpriteMaterial({
          map: trackedAuraTexture ?? undefined,
          color: baseColor,
          transparent: true,
          opacity: 0.26,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      )
      const aura = new THREE.Sprite(auraMaterial)
      aura.position.copy(point)
      const auraSize = nodeRadius * 8.6
      aura.scale.set(auraSize, auraSize, 1)
      aura.userData.baseSize = auraSize
      root.add(aura)

      const label = document.createElement('div')
      label.className = 'timeline-node-label'
      label.classList.add(`timeline-node-label--${event.branch}`)
      label.innerHTML = `
        <div class="timeline-node-label__head">
          <span class="timeline-node-label__year">${event.year}</span>
          <span class="timeline-node-label__tag">${event.poems.length} poesie</span>
        </div>
        <strong class="timeline-node-label__title">${event.title}</strong>
        <small class="timeline-node-label__meta">${branchLabels[event.branch]} - ${event.location}</small>
      `
      labelLayer.appendChild(label)
      labels.push({ event, element: label, node })

      const satelliteRoot = new THREE.Group()
      satelliteRoot.position.copy(point)
      root.add(satelliteRoot)

      const groupedPoems = groupOrder
        .map((group) => ({
          group,
          poems: event.poems.filter((poem) => poem.group === group),
        }))
        .filter((entry) => entry.poems.length > 0)

      const satellites: SatelliteOrbit[] = []

      groupedPoems.forEach((entry, groupIndex) => {
        const style = poemGroupStyles[entry.group]
        const layerRadius = nodeRadius + 0.88 + groupIndex * 0.34
        const layerHeight =
          (groupIndex - (groupedPoems.length - 1) / 2) * 0.3

        entry.poems.forEach((_, poemIndex) => {
          const seed = groupIndex * 17 + poemIndex * 13
          const angle =
            (poemIndex / entry.poems.length) * Math.PI * 2 +
            groupIndex * 0.82 +
            Math.sin(seed * 0.37) * 0.24
          const height = layerHeight + Math.cos(seed * 0.49) * 0.18
          const radius = layerRadius + Math.sin(seed * 0.61) * 0.14
          const geometry = createPoemGeometry(entry.group, trackGeometry)
          const material = trackMaterial(
            new THREE.MeshStandardMaterial({
              color: style.color,
              emissive: style.color,
              emissiveIntensity: 0.42,
              roughness: 0.42,
              metalness: 0.2,
              transparent: true,
              opacity: 0.88,
            }),
          )

          const satellite = new THREE.Mesh(geometry, material)
          const sizeJitter = 0.9 + Math.sin(seed * 0.92) * 0.22
          satellite.scale.setScalar(sizeJitter)
          satellite.position.set(
            Math.cos(angle) * radius,
            height,
            Math.sin(angle) * radius,
          )
          satellite.userData.event = event
          satelliteRoot.add(satellite)
          interactiveMeshes.push(satellite)

          satellites.push({
            mesh: satellite,
            baseAngle: angle,
            radius,
            height,
            speed: style.speed + poemIndex * 0.018 + (Math.sin(seed * 0.41) + 1) * 0.012,
            phase: Math.abs(Math.sin(seed * 0.23)) * Math.PI * 2,
            wobble: 0.08 + Math.abs(Math.cos(seed * 0.57)) * 0.12,
            drift: 0.8 + Math.abs(Math.sin(seed * 0.35)) * 1.4,
            tilt: (Math.sin(seed * 0.69) - 0.5) * 0.78,
          })
        })
      })

      clusters.push({
        event,
        node,
        shell,
        core,
        aura,
        satelliteRoot,
        satellites,
      })
    })

    let currentOffset = targetOffsetRef.current
    root.position.z = currentOffset

    const resolveEventAtPointer = (clientX: number, clientY: number) => {
      const bounds = renderer.domElement.getBoundingClientRect()

      pointer.x = ((clientX - bounds.left) / bounds.width) * 2 - 1
      pointer.y = -((clientY - bounds.top) / bounds.height) * 2 + 1

      raycaster.setFromCamera(pointer, camera)

      const hit = raycaster.intersectObjects(interactiveMeshes, false)[0]

      if (!hit) {
        return null
      }

      return (hit.object.userData.event as PoeticEvent | undefined) ?? null
    }

    let hoveredId: string | null = null

    const handlePointerMove = (event: PointerEvent) => {
      const hoveredEvent = resolveEventAtPointer(event.clientX, event.clientY)
      const nextHoveredId = hoveredEvent?.id ?? null

      if (nextHoveredId === hoveredId) {
        return
      }

      hoveredId = nextHoveredId
      renderer.domElement.style.cursor = hoveredId ? 'pointer' : 'grab'
      onHoverRef.current(hoveredEvent)
    }

    const handlePointerLeave = () => {
      hoveredId = null
      renderer.domElement.style.cursor = 'grab'
      onHoverRef.current(null)
    }

    const handleClick = (event: MouseEvent) => {
      const selectedEvent = resolveEventAtPointer(event.clientX, event.clientY)

      if (!selectedEvent) {
        return
      }

      onSelectRef.current(selectedEvent)
    }

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault()

      const speed = Math.abs(event.deltaY) > 65 ? 0.016 : 0.011
      const nextTarget = targetOffsetRef.current - event.deltaY * speed

      targetOffsetRef.current = THREE.MathUtils.clamp(nextTarget, minOffset, maxOffset)
    }

    renderer.domElement.style.cursor = 'grab'
    renderer.domElement.addEventListener('pointermove', handlePointerMove)
    renderer.domElement.addEventListener('pointerleave', handlePointerLeave)
    renderer.domElement.addEventListener('click', handleClick)
    renderer.domElement.addEventListener('wheel', handleWheel, { passive: false })

    const resize = () => {
      const width = host.clientWidth
      const height = host.clientHeight

      if (width === 0 || height === 0) {
        return
      }

      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    resize()

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(host)

    const clock = new THREE.Clock()
    let frameId = 0

    const render = () => {
      frameId = window.requestAnimationFrame(render)

      const elapsed = clock.getElapsedTime()

      currentOffset = THREE.MathUtils.lerp(currentOffset, targetOffsetRef.current, 0.078)
      root.position.z = currentOffset

      stars.rotation.y = elapsed * 0.012
      stars.rotation.x = Math.sin(elapsed * 0.08) * 0.038
      starsMaterial.opacity = 0.56 + Math.sin(elapsed * 0.22) * 0.08

      const activeId = activeEventIdRef.current
      const activeEvent = activeId ? eventById.get(activeId) ?? null : null
      const activeBranch = activeEvent?.branch ?? null
      const relatedIds = new Set<string>(
        activeEvent ? [activeEvent.id, ...activeEvent.connections] : [],
      )

      branchVisuals.forEach(({ branch, mesh, glow }, index) => {
        const isFocused = activeBranch === branch
        const pulse = 0.78 + Math.sin(elapsed * 1.7 + index * 0.7) * 0.22
        mesh.material.opacity = (isFocused ? 0.64 : 0.28) * pulse
        mesh.material.emissiveIntensity = (isFocused ? 0.9 : 0.44) * pulse
        glow.material.opacity = (isFocused ? 0.54 : 0.2) * pulse
      })

      forkVisuals.forEach(({ sourceId, targetId, branch, line }, index) => {
        const isFocused =
          activeId !== null &&
          (sourceId === activeId ||
            targetId === activeId ||
            (relatedIds.has(sourceId) && relatedIds.has(targetId)))

        const pulse = 0.7 + Math.sin(elapsed * 1.5 + index * 0.9) * 0.3
        line.material.opacity =
          (isFocused ? 0.72 : activeBranch === branch ? 0.38 : 0.18) * pulse
      })

      connectionVisuals.forEach(({ sourceId, targetId, branch, line }, index) => {
        const isFocused =
          activeId !== null &&
          (sourceId === activeId ||
            targetId === activeId ||
            (relatedIds.has(sourceId) && relatedIds.has(targetId)))

        const pulse = 0.72 + Math.sin(elapsed * 1.2 + index * 1.4) * 0.28
        line.material.opacity =
          (isFocused ? 0.46 : activeBranch === branch ? 0.2 : 0.12) * pulse
      })

      flowParticles.forEach((particle, particleIndex) => {
        const progress = (particle.offset + elapsed * particle.speed) % 1
        particle.curve.getPointAt(progress, flowPointScratch)
        particle.mesh.position.copy(flowPointScratch)

        const pulse = 0.74 + Math.sin(elapsed * 3 + particleIndex * 0.63) * 0.26
        particle.mesh.material.opacity = particle.baseOpacity * pulse
        particle.mesh.scale.setScalar(particle.scale * (0.86 + pulse * 0.34))
        particle.mesh.rotation.x = elapsed * 1.1
        particle.mesh.rotation.y = elapsed * 1.6
      })

      camera.getWorldDirection(cameraDirectionScratch)
      const viewportWidth = renderer.domElement.clientWidth
      const viewportHeight = renderer.domElement.clientHeight

      labelLayouts.length = 0
      occupiedLabelRects.length = 0

      labels.forEach(({ event, element, node }) => {
        node.getWorldPosition(labelWorldScratch)
        labelWorldScratch.y += 0.9 + Math.min(event.poems.length, 4) * 0.05

        cameraToLabelScratch
          .copy(labelWorldScratch)
          .sub(camera.position)

        const isBehindCamera = cameraDirectionScratch.dot(cameraToLabelScratch) <= 0

        labelProjectScratch.copy(labelWorldScratch).project(camera)

        const outOfView =
          labelProjectScratch.z < -1 ||
          labelProjectScratch.z > 1 ||
          labelProjectScratch.x < -1.22 ||
          labelProjectScratch.x > 1.22 ||
          labelProjectScratch.y < -1.18 ||
          labelProjectScratch.y > 1.18

        if (isBehindCamera || outOfView) {
          element.style.opacity = '0'
          element.style.zIndex = '0'
          element.classList.remove('is-active', 'is-hovered', 'is-related', 'is-muted')
          return
        }

        const x = (labelProjectScratch.x * 0.5 + 0.5) * viewportWidth
        const y = (-labelProjectScratch.y * 0.5 + 0.5) * viewportHeight
        const isActive = activeId === event.id
        const isHovered = hoveredId === event.id
        const isRelated = activeId !== null && relatedIds.has(event.id) && !isActive
        const isMuted = hoveredId !== null && !isActive && !isHovered && !isRelated
        const lift = isHovered ? -8 : isActive ? -4 : isRelated ? -2 : 0
        const baseOpacity = isMuted ? '0.52' : isRelated ? '0.82' : '1'
        const priority = isActive ? 40 : isHovered ? 30 : isRelated ? 20 : 10

        element.classList.toggle('is-active', isActive)
        element.classList.toggle('is-hovered', isHovered)
        element.classList.toggle('is-related', isRelated)
        element.classList.toggle('is-muted', isMuted)

        labelLayouts.push({
          element,
          x,
          y,
          depth: labelProjectScratch.z,
          isActive,
          isHovered,
          lift,
          baseOpacity,
          priority,
        })
      })

      labelLayouts
        .sort((first, second) => {
          if (first.priority !== second.priority) {
            return second.priority - first.priority
          }

          return first.depth - second.depth
        })
        .forEach((layout) => {
          const { element } = layout
          const elementWidth = element.offsetWidth || 220
          const elementHeight = element.offsetHeight || 74
          let hasPlacement = false
          let placedX = layout.x
          let placedY = layout.y + layout.lift

          for (const offset of labelPlacementOffsets) {
            const candidateX = layout.x + offset.x
            const candidateY = layout.y + layout.lift + offset.y
            const candidateRect: LabelRect = {
              left: candidateX - elementWidth * 0.5,
              right: candidateX + elementWidth * 0.5,
              top: candidateY - elementHeight * 0.5,
              bottom: candidateY + elementHeight * 0.5,
            }

            const overflowsViewport =
              candidateRect.left < 4 ||
              candidateRect.right > viewportWidth - 4 ||
              candidateRect.top < 4 ||
              candidateRect.bottom > viewportHeight - 4

            if (overflowsViewport) {
              continue
            }

            const hasCollision = occupiedLabelRects.some((rect) =>
              rectanglesOverlap(candidateRect, rect, 6),
            )

            if (hasCollision) {
              continue
            }

            hasPlacement = true
            placedX = candidateX
            placedY = candidateY
            occupiedLabelRects.push(candidateRect)
            break
          }

          if (!hasPlacement && (layout.isActive || layout.isHovered)) {
            const forcedRect: LabelRect = {
              left: placedX - elementWidth * 0.5,
              right: placedX + elementWidth * 0.5,
              top: placedY - elementHeight * 0.5,
              bottom: placedY + elementHeight * 0.5,
            }
            occupiedLabelRects.push(forcedRect)
            hasPlacement = true
          }

          if (!hasPlacement) {
            element.style.opacity = '0'
            element.style.zIndex = '0'
            return
          }

          element.style.transform = `translate(-50%, -50%) translate(${placedX}px, ${placedY}px)`
          element.style.opacity = layout.baseOpacity
          element.style.zIndex = String(layout.priority)
        })

      clusters.forEach((cluster, clusterIndex) => {
        const { event, node, shell, core, aura, satelliteRoot, satellites } = cluster
        const isHovered = hoveredId === event.id
        const isActive = activeId === event.id

        const scaleTarget = isActive ? 1.52 : isHovered ? 1.24 : 1
        scaleScratch.setScalar(scaleTarget)
        satelliteScaleScratch.setScalar(scaleTarget * 1.08)

        node.scale.lerp(scaleScratch, 0.13)
        shell.scale.lerp(scaleScratch, 0.1)
        core.scale.lerp(scaleScratch, 0.14)
        satelliteRoot.scale.lerp(satelliteScaleScratch, 0.12)

        const pulse = Math.sin(elapsed * 2.15 + clusterIndex * 0.58)
        node.material.opacity = isActive ? 0.98 : isHovered ? 0.94 : 0.86
        node.material.emissiveIntensity =
          (isActive ? 1 : isHovered ? 0.7 : 0.42) + pulse * 0.07

        shell.material.opacity =
          (isActive ? 0.42 : isHovered ? 0.3 : 0.2) + pulse * 0.03
        shell.rotation.x = elapsed * 0.21 + clusterIndex * 0.18
        shell.rotation.y = elapsed * 0.3 - clusterIndex * 0.16
        shell.rotation.z = elapsed * 0.12

        core.material.opacity =
          (isActive ? 0.96 : isHovered ? 0.84 : 0.7) + Math.sin(elapsed * 2.8 + clusterIndex * 0.6) * 0.05

        const auraBaseSize = (aura.userData.baseSize as number) ?? aura.scale.x
        const auraPulse = (isActive ? 1.24 : isHovered ? 1.12 : 1) + pulse * 0.08
        const auraSize = auraBaseSize * auraPulse
        aura.scale.set(auraSize, auraSize, 1)
        aura.material.opacity =
          (isActive ? 0.46 : isHovered ? 0.34 : 0.22) + Math.sin(elapsed * 1.8 + clusterIndex * 0.8) * 0.02

        satellites.forEach((satellite, satIndex) => {
          const angle = satellite.baseAngle + elapsed * satellite.speed
          const radial =
            satellite.radius +
            Math.sin(elapsed * satellite.drift + satellite.phase) * satellite.wobble
          const hoverLift = isActive ? 0.08 : isHovered ? 0.05 : 0
          const driftOffset = Math.sin(elapsed * 0.42 + satIndex * 0.8) * 0.06

          satellite.mesh.position.set(
            Math.cos(angle) * radial + driftOffset,
            satellite.height +
              Math.sin(angle * 1.7 + satellite.phase) * (0.12 + satellite.wobble) +
              hoverLift,
            Math.sin(angle + satellite.tilt) * radial - driftOffset,
          )

          satellite.mesh.rotation.x = elapsed * (0.86 + satellite.wobble)
          satellite.mesh.rotation.y = elapsed * (1 + satellite.drift * 0.08)
          satellite.mesh.material.emissiveIntensity = isActive ? 0.92 : isHovered ? 0.68 : 0.44
          satellite.mesh.material.opacity = isActive ? 0.96 : isHovered ? 0.9 : 0.82
        })
      })

      controls.update()
      renderer.render(scene, camera)
    }

    render()

    return () => {
      window.cancelAnimationFrame(frameId)
      resizeObserver.disconnect()

      renderer.domElement.removeEventListener('pointermove', handlePointerMove)
      renderer.domElement.removeEventListener('pointerleave', handlePointerLeave)
      renderer.domElement.removeEventListener('click', handleClick)
      renderer.domElement.removeEventListener('wheel', handleWheel)

      controls.dispose()
      onHoverRef.current(null)

      trackedGeometries.forEach((geometry) => geometry.dispose())
      trackedMaterials.forEach((material) => material.dispose())
      trackedTextures.forEach((texture) => texture.dispose())

      labels.forEach(({ element }) => {
        element.remove()
      })
      labelLayer.remove()

      renderer.dispose()

      if (renderer.domElement.parentElement === host) {
        host.removeChild(renderer.domElement)
      }
    }
  }, [events])

  return (
    <div
      className="three-timeline"
      ref={hostRef}
      role="img"
      aria-label="Timeline poetica tridimensionale a diramazioni"
    />
  )
}
