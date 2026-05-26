// 檔案：firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getFirestore, doc, setDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

// 你的專屬 Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyC7YY86Pn0E1EkyXyPZYZYHvLj-bOZL60o",
  authDomain: "school-fair-pos-72758.firebaseapp.com",
  projectId: "school-fair-pos-72758",
  storageBucket: "school-fair-pos-72758.firebasestorage.app",
  messagingSenderId: "517697201549",
  appId: "1:517697201549:web:fd19f4480ecf4326d109c4"
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 導出資料庫實體與需要的操作函式
export const db = getFirestore(app);
export { doc, setDoc, onSnapshot };
