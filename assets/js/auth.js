// assets/js/auth.js
// Firebase via CDN (ESM) — funciona direto no browser, sem bundler
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getAuth, onIdTokenChanged, onAuthStateChanged,
  signInWithEmailAndPassword, signOut
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// SUA CONFIG (a que você me enviou)
const firebaseConfig = {
  apiKey: "AIzaSyB5u6geOrhconAtJ9xytORrW_M4No30YRs",
  authDomain: "binex-db107.firebaseapp.com",
  projectId: "binex-db107",
  storageBucket: "binex-db107.firebasestorage.app",
  messagingSenderId: "1009582511057",
  appId: "1:1009582511057:web:3d54d598b92000537646f0",
  measurementId: "G-RN2XR474D2"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);

// --- Cookie com o ID token (Edge Function usa para travar /finance) ---
function setCookie(name, value, maxAgeSec=1800) {
  document.cookie = `${name}=${value}; Max-Age=${maxAgeSec}; Path=/; Secure; SameSite=Lax`;
}
function delCookie(name) {
  document.cookie = `${name}=; Max-Age=0; Path=/; Secure; SameSite=Lax`;
}
async function refreshTokenCookie(user) {
  if (!user) { delCookie('fb'); return; }
  const token = await user.getIdToken(true); // força pegar claims (roles)
  setCookie('fb', token, 30*60); // 30 min
}

// --- Conecta sua tela de login existente ao Firebase (sem mudar a UI) ---
window.attachLogin = function ({ form, email, password, onSuccessRedirect="/" }) {
  const $form = document.querySelector(form);
  if (!$form) return;

  $form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const em = document.querySelector(email)?.value?.trim();
    const pw = document.querySelector(password)?.value || "";
    try {
      const cred = await signInWithEmailAndPassword(auth, em, pw);
      await refreshTokenCookie(cred.user);
      window.location.href = onSuccessRedirect;
    } catch (err) {
      console.error(err);
      alert("Falha no login. Verifique e-mail e senha.");
    }
  });
};

// Qualquer botão/link com data-logout fará logout
document.addEventListener('click', async (e) => {
  const t = e.target.closest('[data-logout]');
  if (!t) return;
  e.preventDefault();
  delCookie('fb');
  await signOut(auth);
  window.location.href = '/';
});

// --- Mostrar/ocultar menus/seções por role (só UX; segurança real é no Netlify) ---
function show(sel, on) { document.querySelectorAll(sel).forEach(el => el.style.display = on ? '' : 'none'); }

onIdTokenChanged(auth, async (user) => {
  await refreshTokenCookie(user);
  if (!user) {
    show('.nav-financeiro, .section-financeiro', false);
    show('.nav-checklists, .section-checklists', false);
    return;
  }
  const token = await user.getIdTokenResult(true);
  const roles = token.claims?.roles || [];
  const isAdmin = roles.includes('admin');
  const isStaff = roles.includes('staff');

  show('.nav-financeiro, .section-financeiro', isAdmin);
  show('.nav-checklists, .section-checklists', isAdmin || isStaff);
});

onAuthStateChanged(auth, (user) => {
  const logged = !!user;
  document.querySelectorAll('[data-login]').forEach(el => el.hidden = logged);
  document.querySelectorAll('[data-logout]').forEach(el => el.hidden = !logged);
});
