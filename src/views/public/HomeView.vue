<template>
    <div class="home">
        <HelloWorld msg="Bienvenue" />
    </div>
</template>

<script>

    import HelloWorld from "../../components/HelloWorld";

    export default {
        name: "HomeView",
        components:{
            HelloWorld
        }
    }
</script>

<style scoped>

</style>