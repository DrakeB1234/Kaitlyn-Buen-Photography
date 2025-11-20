import type { Action } from "svelte/action";

const THRESHOLD = 80;

export const gestures: Action<
  HTMLElement,
  undefined,
  {
    onswiperight: (e: CustomEvent) => void;
    onswipeleft: (e: CustomEvent) => void;
  }
> = (node) => {
  let xStart = 0;
  let isTouching = false;

  function onTouchStart(e: TouchEvent | MouseEvent) {
    isTouching = true;
    const point = "touches" in e ? e.touches[0] : e;
    xStart = point.clientX;
  }

  function onTouchEnd(e: TouchEvent | MouseEvent) {
    if (!isTouching) return;
    isTouching = false;

    const point = "changedTouches" in e ? e.changedTouches[0] : e;
    const dx = point.clientX - xStart;

    if (dx >= THRESHOLD) {
      node.dispatchEvent(new CustomEvent("swiperight"));
    }
    if (dx <= -THRESHOLD) {
      node.dispatchEvent(new CustomEvent("swipeleft"));
    }

  }

  node.addEventListener("touchstart", onTouchStart);
  node.addEventListener("touchend", onTouchEnd);
  node.addEventListener("mousedown", onTouchStart);
  node.addEventListener("mouseup", onTouchEnd);

  return {
    destroy() {
      node.removeEventListener("touchstart", onTouchStart);
      node.removeEventListener("touchend", onTouchEnd);
      node.removeEventListener("mousedown", onTouchStart);
      node.removeEventListener("mouseup", onTouchEnd);
    }
  };
};
