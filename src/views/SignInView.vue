<template>
  <div class="sign-in">
    <h1>This is an sign in page</h1>
    <button type="button" v-on:click="signInWithGoogle">
      Sign in with Google
    </button>
  </div>
</template>

<script setup lang="ts">
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
      alert("Something Error");
    });
};
</script>
