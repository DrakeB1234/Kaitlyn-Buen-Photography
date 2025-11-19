const TOUCH_THRESHOLD = 100;

export type SwipeHandlers = {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
};

export function createSwipe(node: HTMLElement, handlers: SwipeHandlers) {
  let startX = 0;

  function handleTouchStart(e: TouchEvent) {
    startX = e.touches[0].clientX;
  }

  function handleTouchEnd(e: TouchEvent) {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (diff > TOUCH_THRESHOLD && endX > TOUCH_THRESHOLD) handlers.onSwipeLeft();
    else if (diff < -TOUCH_THRESHOLD && endX > TOUCH_THRESHOLD) handlers.onSwipeRight();
  }

  node.addEventListener("touchstart", handleTouchStart, { passive: true });
  node.addEventListener("touchend", handleTouchEnd, { passive: true });

  return {
    destroy() {
      node.removeEventListener("touchstart", handleTouchStart);
      node.removeEventListener("touchend", handleTouchEnd);
    }
  };
}
