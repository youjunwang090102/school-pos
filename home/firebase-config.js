// 檔案：firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

// TODO: 請務必換成你自己的 Firebase Config 內容
const firebaseConfig = {
  apiKey: "AIzaSy_你的金鑰...",
  authDomain: "你的專案.firebaseapp.com",
  projectId: "你的專案ID",
  storageBucket: "你的專案.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcde"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { doc, setDoc, onSnapshot };
