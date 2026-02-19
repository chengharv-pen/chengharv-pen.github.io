// Arrow Function that is immediately invoked
// This one just blurs the button tied to the last modal
(() => {
  let lastModalTrigger = null;

  document.addEventListener("show.bs.modal", (e) => {
    lastModalTrigger = e.relatedTarget;
  });

  document.addEventListener("hidden.bs.modal", () => {
    if (!lastModalTrigger) return;

    setTimeout(() => {
      lastModalTrigger.blur();
      lastModalTrigger = null;
    }, 0);
  });
})();

// This event listener blurs buttons that DO NOT open modals
document.addEventListener("click", (e) => {
  const clickable = e.target.closest(".btn, .badge");
  if (!clickable) return;

  setTimeout(() => {
    clickable.blur();
  }, 0);
});