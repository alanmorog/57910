// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA3ypdbP4qhfQufWvzG3kXyERYFekll6fc",
    authDomain: "reacttpfinal-e1917.firebaseapp.com",
    projectId: "reacttpfinal-e1917",
    storageBucket: "reacttpfinal-e1917.appspot.com",
    messagingSenderId: "301179547563",
    appId: "1:301179547563:web:53ffde6a3713917295ecee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);