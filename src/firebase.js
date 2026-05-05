import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTizriu8ttDeANkGnMHRAhDH2As-5idEo",
  authDomain: "flux-2-0.firebaseapp.com",
  projectId: "flux-2-0",
  storageBucket: "flux-2-0.firebasestorage.app",
  messagingSenderId: "642486249856",
  appId: "1:642486249856:web:8144aec97b598b0a283965",
  measurementId: "G-V4PT6DL4K5"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();