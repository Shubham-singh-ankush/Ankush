// src/services/auth.js
export function isLoggedIn() {
    const token = localStorage.getItem("userToken");
    console.log("User Token:", token); // Debug log
    return !!token;
  }
  
  export function login(userToken) {
    localStorage.setItem("userToken", userToken);
    console.log("Token set in localStorage:", localStorage.getItem("userToken"));
  }
  
  export function logout() {
    localStorage.removeItem("userToken");
  }
  