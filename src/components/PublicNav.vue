<template>
    <div>
        <img src="../assets/logo.png" alt=""><br>
        <nav>
            <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/roger">Roger</router-link>
        </nav>

    </div>
</template>

<script>
    export default {
        name: "PublicNav"
    }
</script>

<style scoped>

</style>