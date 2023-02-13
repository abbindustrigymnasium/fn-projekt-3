<template>
    <h1>FISH</h1>
</template>

<script setup>
// In any component
const user = JSON.parse(localStorage.getItem('user'))

console.log(user.email);

</script>
