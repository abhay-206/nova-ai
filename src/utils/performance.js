let rafId = null;

export function requestScrollFrame(callback) {
  if (rafId !== null) return;

  rafId = window.requestAnimationFrame(() => {
    callback();
    rafId = null;
  });
}

export function cancelScrollFrame() {
  if (rafId !== null) {
    window.cancelAnimationFrame(rafId);
    rafId = null;
  }
}

export function isMobileDevice() {
  if (typeof window === "undefined") return false;

  return window.matchMedia(
    "(max-width: 768px)"
  ).matches;
}

export function supportsWebGL() {
  if (typeof document === "undefined") return false;

  try {
    const canvas = document.createElement("canvas");

    return Boolean(
      canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

export function getAnimationQuality() {
  if (typeof window === "undefined") {
    return "medium";
  }

  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reducedMotion) {
    return "low";
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    return "low";
  }

  if (window.matchMedia("(max-width: 1100px)").matches) {
    return "medium";
  }

  return "high";
}