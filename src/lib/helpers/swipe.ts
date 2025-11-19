const TOUCH_THRESHOLD = 100;

export type SwipeHandlers = {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
};

export function createSwipe(node: HTMLElement, handlers: SwipeHandlers) {
  let startX = 0;
  let endX = 0;

  function handleTouchStart(e: TouchEvent) {
    startX = e.touches[0].clientX;
  }

  function handleTouchMove(e: TouchEvent) {
    endX = e.touches[0].clientX;
  }

  function handleTouchEnd() {
    const diff = startX - endX;

    if (diff > TOUCH_THRESHOLD && endX > TOUCH_THRESHOLD) handlers.onSwipeLeft();
    if (diff < -TOUCH_THRESHOLD && endX > TOUCH_THRESHOLD) handlers.onSwipeRight();
  }

  node.addEventListener("touchstart", handleTouchStart);
  node.addEventListener("touchmove", handleTouchMove);
  node.addEventListener("touchend", handleTouchEnd);

  // clean-up for Svelte
  return {
    destroy() {
      node.removeEventListener("touchstart", handleTouchStart);
      node.removeEventListener("touchmove", handleTouchMove);
      node.removeEventListener("touchend", handleTouchEnd);
    }
  };
}
