<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <template v-if="!isLoggedIn">
      <router-link to="/sign-in">Sign In</router-link> |
    </template>
    <router-link to="/admin">Admin</router-link> |
    <template v-if="isLoggedIn">
      <button @click="handleSignOut">Sign Out</button>
    </template>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";

const isLoggedIn = ref(false);
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  isLoggedIn.value = !!user;
  if (user) {
    router.push("/");
  }
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
