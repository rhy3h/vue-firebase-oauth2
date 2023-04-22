<template>
  <div class="admin">
    <h1>This is an admin page</h1>
    <ul>
      <li>Name: {{ currentUser?.displayName }}</li>
      <li>Email: {{ currentUser?.email }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { getAuth } from "firebase/auth";

const { currentUser } = getAuth();
</script>
