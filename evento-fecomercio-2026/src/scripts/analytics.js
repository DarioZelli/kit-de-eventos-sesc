window.analytics = {
  track(evento, dados = {}) {
    return { evento, dados, timestamp: Date.now() };
  }
};
