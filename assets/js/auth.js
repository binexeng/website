// assets/js/auth.js
// Compatibilidade com o site antigo, sem usar módulos nem exports.
// Agora o "login" é definido pelo cookie "fb" (ID token do Firebase) que
// é gravado no login.html. Aqui só checamos/limpamos esse cookie.

(function () {
  function getCookie(name) {
    const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  }
  function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=0; Path=/; Secure; SameSite=Lax';
  }

  // Igual assinatura antiga, mas agora verifica o cookie "fb".
  // Se não tiver token, redireciona para a página de login.
  window.requireLogin = function (redirectTo = '../login.html') {
    const hasToken = !!getCookie('fb');
    if (!hasToken) {
      // mantém compatibilidade: também remove flag antiga caso exista
      try { sessionStorage.removeItem('loggedInUser'); } catch {}
      window.location.href = redirectTo;
    }
  };

  // Faz "logout": apaga o cookie e volta para a home (ou para onde você passar).
  window.logout = function (redirectTo = '../index.html') {
    deleteCookie('fb');
    try { sessionStorage.removeItem('loggedInUser'); } catch {}
    window.location.href = redirectTo;
  };
})();
