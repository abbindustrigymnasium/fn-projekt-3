<template>
    <h1 v-if="userState == true">True</h1>
    <h1 v-else>False</h1>
    <button @click="updateUserState">Change</button>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    localStorage.setItem('userState', false)
    const userState = ref(localStorage.getItem('userState'))

    function updateUserState () {
      localStorage.setItem('userState', !userState)
    }

    // // Watch for changes to userState
    // watch(
    //   () => userState.value,
    //   (newValue) => {
    //     updateUserState(newValue)
    //   }
    // )

    return {
      userState
    }
  }
}


</script>
