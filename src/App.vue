<template>
  <router-view/>
</template >
<script setup>
import { ref, watch, onMounted } from "vue"
import { useRouter } from 'vue-router'
const state = ref(null);
const router = useRouter()

const checkAuth = () => {
  // localStorage.removeItem("user");
  if (localStorage.getItem('user')) {
    localStorage.setItem('state', JSON.stringify(true));
    console.log("User loged in")
  } else {
    localStorage.setItem('state', JSON.stringify(false));
    console.log("User not logged in")
  }
  state.value = JSON.parse(localStorage.getItem('state'))
}

onMounted(() => {
  checkAuth()
  window.addEventListener('userLoggedIn', checkAuth) // listen to the event
})
watch(state, (newState, oldState) => {
  if(newState == true){
    router.push('/')
  }else if (newState == false){
    router.push('/login')
  }
})
</script>
