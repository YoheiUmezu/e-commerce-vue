<template>
    <div>
        <header>
            <div class="header_logo">
                <img src="../assets/images/planet.png" alt="pizza planet icon">
                <h1 href="/">Pizza Planet</h1>
            </div>
            <nav>
                <ul>
                    <router-link :to="{ name: 'homeLink' }" tag="li">
                        <a href="">Home</a>
                    </router-link>
                    <!-- <a href="">home</a> -->
                    <span>~</span>
                        <router-link :to="{ name: 'menuLink' }" tag="li">
                            <a href="">menu</a>
                        </router-link>
                    <span>~</span>
                        <router-link :to="{ name: 'contactLink' }" tag="li">
                            <a href="">Contact us </a>
                        </router-link>
                    <span>~</span>
                        <router-link :to="{ name: 'aboutLink' }" tag="li">
                            <a href="">About us </a>
                        </router-link>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>

    export default {
        name: "appHeader",
    }
</script>

<style lang="scss" scoped>
h1 {
    font-size: 1.3rem;
}

.header_logo {
    background-image: linear-gradient(
        45deg,
        #d85225 25%,
        #f79e38 25% 50%,
        #d85226 50% 75%,
        #f79e38 75%,
        #f79e38 100%
    );
    background-size: 80px 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
}

.header_logo img {
    max-width: 25vw;
}

ul {
    padding: 10px 0;
}

li {
    display: inline-block
}

@media screen and (min-width: 900) {
    .header_logo img {
    max-width: 20vw;
    }   
}
</style>