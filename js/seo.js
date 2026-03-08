const projectModal = document.getElementById('projectModal');
if (projectModal) {
  projectModal.addEventListener('show.bs.modal', function () {
    history.replaceState(null, null, '#projects');
  });
}

const contactModal = document.getElementById('contactModal');
if (contactModal) {
  contactModal.addEventListener('show.bs.modal', function () {
    history.replaceState(null, null, '#contact');
  });
}

document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('hidden.bs.modal', () => {
    history.replaceState(null, null, window.location.pathname);
  });
});