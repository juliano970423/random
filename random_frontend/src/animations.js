// src/directives/ripple.js
export const ripple = {
  mounted(el, binding) {
    el.classList.add('ripple-effect');
    
    function createRipple(event) {
      const button = event.currentTarget;
      // For the bottom navigation buttons, the ripple should be contained within the pill-shaped highlight
      if (button.parentElement.parentElement?.tagName === 'FOOTER') {
        const highlight = button.querySelector('.rounded-full');
        if (highlight) {
          const rect = highlight.getBoundingClientRect();
          const circle = document.createElement("span");
          const diameter = Math.max(highlight.clientWidth, highlight.clientHeight);
          const radius = diameter / 2;
          const existingRipple = highlight.querySelector(".ripple");
          if (existingRipple) {
            existingRipple.remove();
          }
          circle.style.width = circle.style.height = `${diameter}px`;
          circle.style.left = `${event.clientX - rect.left - radius}px`;
          circle.style.top = `${event.clientY - rect.top - radius}px`;
          circle.classList.add("ripple");
          highlight.appendChild(circle);
          return;
        }
      }
      const rect = button.getBoundingClientRect();
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      const existingRipple = button.querySelector(".ripple");
      if (existingRipple) {
        existingRipple.remove();
      }
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - rect.left - radius}px`;
      circle.style.top = `${event.clientY - rect.top - radius}px`;
      circle.classList.add("ripple");
      button.appendChild(circle);
    }

    el.addEventListener("mousedown", createRipple);
    el._rippleCleanup = () => el.removeEventListener("mousedown", createRipple);
  },
  
  unmounted(el) {
    if (el._rippleCleanup) {
      el._rippleCleanup();
    }
  }
}
