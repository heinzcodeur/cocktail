<template>
    <div class="public">
        <PublicNav />
        <router-view></router-view>
    </div>
</template>

<script>
    import PublicNav from "../../components/PublicNav";
    export default {
        name: "PublicLayout",
        components:{
            PublicNav
        }
    }
</script>

<style scoped>
.public{
    border: 1px solid red;
}
</style>