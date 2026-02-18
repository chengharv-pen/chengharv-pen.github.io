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

document.addEventListener("click", (e) => {
  const clickable = e.target.closest(".btn, .badge");
  if (!clickable) return;

  setTimeout(() => {
    clickable.blur();
  }, 0);
});