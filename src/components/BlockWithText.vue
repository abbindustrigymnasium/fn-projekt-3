<template>
    <div class="main">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'BlockWithText',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
    background-color: white;
    color: black;
    text-align: center;
}
</style>