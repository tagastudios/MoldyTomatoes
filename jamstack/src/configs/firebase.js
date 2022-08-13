// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDhN4lp28MdPKorK7AJglum9tXjAqsf1ms",
	authDomain: "onea05-05-22.firebaseapp.com",
	projectId: "onea05-05-22",
	storageBucket: "onea05-05-22.appspot.com",
	messagingSenderId: "744535683428",
	appId: "1:744535683428:web:2e36427952c6cb88bd0a71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// named
export { db };

// default
export default app;
