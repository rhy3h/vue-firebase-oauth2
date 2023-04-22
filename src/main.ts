import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUWD-VEjkIBCBW3qxiGy4_p15Uk-aDotc",
  authDomain: "vue-oauth2-63d98.firebaseapp.com",
  projectId: "vue-oauth2-63d98",
  storageBucket: "vue-oauth2-63d98.appspot.com",
  messagingSenderId: "368629566486",
  appId: "1:368629566486:web:4eaa414e76ad3cdf9b3937",
  measurementId: "G-78098HZTRD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).use(store).use(router).mount("#app");
