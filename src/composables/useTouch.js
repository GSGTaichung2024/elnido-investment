// src/composables/useTouch.js
import { ref } from 'vue';

export function useTouch(onSwipe) {
  const startX = ref(0);
  const startY = ref(0);
  const endX = ref(0);
  const endY = ref(0);

  const MIN_SWIPE_DISTANCE = 50; // Minimum distance for a swipe

  const touchStart = (event) => {
    startX.value = event.touches[0].clientX;
    startY.value = event.touches[0].clientY;
  };

  const touchMove = (event) => {
    endX.value = event.touches[0].clientX;
    endY.value = event.touches[0].clientY;
  };

  const touchEnd = () => {
    const diffX = startX.value - endX.value;
    const diffY = startY.value - endY.value;

    // Determine if it's primarily a horizontal swipe
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > MIN_SWIPE_DISTANCE) {
      // Horizontal swipe
      if (diffX > 0) {
        onSwipe('left');
      } else {
        onSwipe('right');
      }
    }
  };

  return {
    touchStart,
    touchMove,
    touchEnd
  };
}