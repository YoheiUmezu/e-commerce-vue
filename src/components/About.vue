<template>
    <div>
        <h3>~ Click on the link below for more info ~</h3>
        <nav>
            <ul>
                <router-link :to="{ name: 'historyLink' }" tag="li">
                    <a href="nav-link">Our history</a>
                </router-link>
                <span>~</span>
                <router-link :to="{ name: 'orderingGuideLink' }" tag="li">
                    <a href="nav-link">Ordering guide</a>
                </router-link>
                <span>~</span>
                <router-link :to="{ name: 'deliveryLink' }" tag="li">
                    <a href="nav-link">Delivery</a>
                </router-link>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'about'
    }
</script>

<style lang="scss" scoped>
h3 {
    text-align: center;
}
</style>