// v9+ 模块化 Firestore-only 配置（新应用）
import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyAIIS_PAOt0PqCZwLr1PQaH1JhH4qJYnzc",
  authDomain: "work-order-system-d1b39.firebaseapp.com",
  projectId: "work-order-system-d1b39",
  appId: "1:76896283317:web:75d1eb40c6ec410bafecfc"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };


