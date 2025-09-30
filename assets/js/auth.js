// This file contains common authentication helpers used across the site.
// It remains mostly empty because each page implements its own specific logic.

// Utility function to check login status and redirect
export function requireLogin(redirectTo = '../login.html') {
  if (!sessionStorage.getItem('loggedInUser')) {
    window.location.href = redirectTo;
  }
}

// Utility to log out the user
export function logout(redirectTo = '../index.html') {
  sessionStorage.removeItem('loggedInUser');
  window.location.href = redirectTo;
}