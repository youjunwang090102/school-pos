import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
// 這裡新增了 collection, addDoc, serverTimestamp, query, orderBy
import { getFirestore, doc, setDoc, onSnapshot, collection, addDoc, serverTimestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7YY86Pn0E1EkyXyPZYZYHvLj-bOZL60o",
  authDomain: "school-fair-pos-72758.firebaseapp.com",
  projectId: "school-fair-pos-72758",
  storageBucket: "school-fair-pos-72758.firebasestorage.app",
  messagingSenderId: "517697201549",
  appId: "1:517697201549:web:fd19f4480ecf4326d109c4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// 記得把新工具也 export 出去
export { doc, setDoc, onSnapshot, collection, addDoc, serverTimestamp, query, orderBy };
