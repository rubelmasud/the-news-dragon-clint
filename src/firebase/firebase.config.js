// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIyrplBjfiWi2K_l4Hpaf8AYEKL44MnhQ",
    authDomain: "the-news-dragon-7e1ca.firebaseapp.com",
    projectId: "the-news-dragon-7e1ca",
    storageBucket: "the-news-dragon-7e1ca.appspot.com",
    messagingSenderId: "585900020320",
    appId: "1:585900020320:web:147a3b57481917522a2905"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app