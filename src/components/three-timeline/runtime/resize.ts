import type { SceneRuntime } from "./types";

interface SetupResizeLifecycleOptions {
  host: HTMLDivElement;
  scene: Pick<SceneRuntime, "renderer" | "camera">;
}

// #region Resize Lifecycle
export const setupResizeLifecycle = ({
  host,
  scene,
}: SetupResizeLifecycleOptions) => {
  const { renderer, camera } = scene;

  const resize = () => {
    const width = host.clientWidth;
    const height = host.clientHeight;

    if (width === 0 || height === 0) {
      return;
    }

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  resize();

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(host);

  const visualViewport = window.visualViewport;

  if (visualViewport) {
    visualViewport.addEventListener("resize", resize);
    visualViewport.addEventListener("scroll", resize);
  }

  return () => {
    resizeObserver.disconnect();

    if (visualViewport) {
      visualViewport.removeEventListener("resize", resize);
      visualViewport.removeEventListener("scroll", resize);
    }
  };
};
// #endregion



