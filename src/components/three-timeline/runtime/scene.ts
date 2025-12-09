import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { SceneRuntime } from "./types";

// #region Scene Runtime
export const createSceneRuntime = (host: HTMLDivElement): SceneRuntime => {
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x090f24, 0.051);

  const camera = new THREE.PerspectiveCamera(52, 1, 0.1, 320);
  camera.position.set(0, 5.2, 16);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.style.touchAction = "none";
  host.appendChild(renderer.domElement);

  const labelLayer = document.createElement("div");
  labelLayer.className = "timeline-label-layer";
  host.appendChild(labelLayer);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.enableDamping = true;
  controls.dampingFactor = 0.06;
  controls.minDistance = 7;
  controls.maxDistance = 30;
  controls.maxPolarAngle = Math.PI * 0.64;
  controls.target.set(0, 0, 0);

  const trackedGeometries: THREE.BufferGeometry[] = [];
  const trackedMaterials: THREE.Material[] = [];
  const trackedTextures: THREE.Texture[] = [];

  const trackGeometry: SceneRuntime["trackGeometry"] = (geometry) => {
    trackedGeometries.push(geometry);
    return geometry;
  };

  const trackMaterial: SceneRuntime["trackMaterial"] = (material) => {
    trackedMaterials.push(material);
    return material;
  };

  const trackTexture: SceneRuntime["trackTexture"] = (texture) => {
    trackedTextures.push(texture);
    return texture;
  };

  const root = new THREE.Group();
  scene.add(root);

  const ambientLight = new THREE.AmbientLight(0xa2b8ff, 0.56);
  const keyLight = new THREE.PointLight(0x84c7ff, 18, 120, 1.7);
  keyLight.position.set(9, 8, 10);
  const warmLight = new THREE.PointLight(0xff986b, 11, 98, 2);
  warmLight.position.set(-11, -1, -8);
  const fillLight = new THREE.PointLight(0xd0b7ff, 7.6, 88, 1.9);
  fillLight.position.set(0, 8, -12);
  scene.add(ambientLight, keyLight, warmLight, fillLight);

  const starsGeometry = trackGeometry(new THREE.BufferGeometry());
  const starsCount = 1950;
  const starsPositions = new Float32Array(starsCount * 3);

  for (let index = 0; index < starsCount; index += 1) {
    const cursor = index * 3;
    starsPositions[cursor] = (Math.random() - 0.5) * 150;
    starsPositions[cursor + 1] = (Math.random() - 0.5) * 100;
    starsPositions[cursor + 2] = (Math.random() - 0.5) * 170;
  }

  starsGeometry.setAttribute("position", new THREE.BufferAttribute(starsPositions, 3));

  const starsMaterial = trackMaterial(
    new THREE.PointsMaterial({
      color: 0xe0eaff,
      size: 0.06,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.72,
    }),
  );

  const stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);

  return {
    scene,
    camera,
    renderer,
    labelLayer,
    controls,
    root,
    stars,
    starsMaterial,
    trackedGeometries,
    trackedMaterials,
    trackedTextures,
    trackGeometry,
    trackMaterial,
    trackTexture,
  };
};

export const disposeSceneRuntime = (
  runtime: SceneRuntime,
  host: HTMLDivElement,
) => {
  runtime.controls.dispose();

  runtime.trackedGeometries.forEach((geometry) => geometry.dispose());
  runtime.trackedMaterials.forEach((material) => material.dispose());
  runtime.trackedTextures.forEach((texture) => texture.dispose());

  runtime.renderer.dispose();
  runtime.labelLayer.remove();

  if (runtime.renderer.domElement.parentElement === host) {
    host.removeChild(runtime.renderer.domElement);
  }
};
// #endregion


