(function iniciarApp() {
  const titulo = document.querySelector('h1');
  if (titulo && window.EVENTO_CONFIG) {
    titulo.textContent = window.EVENTO_CONFIG.nome;
  }
})();
