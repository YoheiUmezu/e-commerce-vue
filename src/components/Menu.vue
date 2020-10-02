<template>
    <div class="nmenu_wrapper">
       
            <!---menu--->

            <!-- {{ $route.params.items }} -->

            <div class="menu">
                <h3>~ Authentic handmade pizza ~</h3>
                <table v-for="item in getMenuItems" :key="item.name">
                    <tbody>
                        <tr>
                            <td>
                                <strong>~ {{ item.name }} ~</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <small>{{ item.description }}</small>
                            </td>
                        </tr>
                        <tr v-for="(option, index) in item.options" :key="option[index]">
                            <td>{{ option.size }}</td>
                            <td>${{ option.price }}</td>
                            <td>
                                <button type="button" class="btn_green" @click.prevent="addToBasket(item, option)">+</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        
        <!---shopping basket---->
        <div class="basket">
            <h3>~ Basket ~</h3>
            <div class="" v-if="basket.length > 0">
            <table>
                <tbody v-for="(item, index) in basket" :key="index">
                    <tr>
                        <td>
                            <button class="btn_green" @click="decreaseQuantity(item)">&#8722;</button>
                            <span>{{ item.quantity }}</span>
                            <button class="btn_green" @click="increaseQuantity(item)">&#43;</button>
                        </td>
                        <td>{{ item.name }} {{ item.size }}"</td>
                        <td>${{ item.price * item.quantity }}</td>
                    </tr>
                </tbody>
            </table>
            <p>Order Total:</p>
            <button class="btn_green" @click="addNewOrder">Place Order </button>
            </div>
            <div class="" v-else>
                <p>{{ basketText }}</p>
                <!-- {{ this.$store.state.orders }} -->
            </div>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

    export default {
        data () {
            return {
                basket: [],
                basketText: 'Your basket is empty.',
            }
        },
        computed: {
            ...mapGetters([
                'getMenuItems'
            ])
            // getMenuItems() {
            //     //stateにデータを取りに行く
            //     //return this.$store.state.menuItems
            //     return this.$store.getters.getMenuItems
            // }
        },
        methods: {

            async addToBasket(item, option) {
                const pizzaExists = await this.basket.find(
                    pizza => pizza.name == item.name && pizza.size == option.size
                )
                //もしピザの名前とサイズがあればオーダー数を増やせる
                if(pizzaExists) {
                    pizzaExists.quantity++
                    return
                }
                this.basket.push({
                    name: item.name,
                    price: option.price,
                    size: option.size,
                    quantity: 1
                })
            },

            removeFromBasket(item) {
                this.basket.splice(this.basket.indexOf(item), 1)
            },

            increaseQuantity(item) {
                item.quantity++
            },

            decreaseQuantity(item) {
                item.quantity--
                if(item.quantity === 0) {
                    this.removeFromBasket(item)
                }
            },

            addNewOrder() {
                //mutations
                this.$store.commit('addOrder', this.basket)//this.basket = payload
                this.basket = []
                this.basketText = 'Thank you, your orderhas been placed.'
            }
        }
    }
</script>

<style lang="scss" scoped>
h3 {
    text-align: center;
}

.menu_wrapper {
    display: flex;
    flex-direction: column;
}

.menu, 
.basket {
    background: #f1e6da;
    border-radius: 3px;
    height: 100vh;
    margin: 10px;
    padding: 10px;
}

@media screen and(min-width: 900px) {
    .menu_wrapper {
        flex-direction: row;
        justify-content: space-between;
    }

    .menu {
        width: 65vw;
    }

    .basket {
        width: 35vw;
    }
}
</style>