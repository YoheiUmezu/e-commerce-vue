<template>
    <div clss="admin_wrapper">
        <div class="current_user_wrapper">
            <span>Logged in as:</span>
            {{ currentUser }}
            <button type="button" class="btn_red" @click.prevent="signOut">Sign out</button>
        </div>
            <NewPizza />
            <div class="menu_wrapper">
                <h3>Menu:</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Remove from menu</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in getMenuItems" :key="item.id">
                        <tr>
                            <td>{{ item.name }}</td>
                            <td>
                                <button type="button" class="btn_red">&times;</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        

        <div class="order_wrapper">
            <h3>Current orders ({{ numberOfOrders }}):</h3>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="order_number">
                        <th colspan="4">
                            <strong>Order Number: 4</strong>
                            <button type="button" class="btn_red">&times;</button>
                        </th>
                    </tr>
                    <tr>
                        <td>Margherita</td>
                        <td>9"</td>
                        <td>2</td>
                        <td>$13</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Login />
    </div>
</template>

<script>
import store from '../store'
import { mapGetters } from 'vuex'
import NewPizza from './NewPizza'
import Login from './Login'
// import { firebaseAuth } from '../firebase'


    export default {
        name: 'admin',
        components: {
            NewPizza,
            Login
        },
        // data() {
        //     return {
        //         name: 'Chris'
        //     }
        // },
        // //最初にhi chrisと表示される
        // beforeRouteEnter(to, from, next){
        //     next(vm => {    
        //         alert(`Hi ${vm.name}`);
        //     })
        // },
        computed: {
            ...mapGetters([
                'getMenuItems',
                'numberOfOrders',
                'currentUser'
            ]),
            // getMenuItems() {
            //     return this.$store.getters.getMenuItems
            // },
            // numberOfOrders() {
            //     return this.$store.getters.numberOfOrders
            // },
            // currentUser() {
            //     return this.$store.getters.currentUser
            // }
        },
        methods: {
            // async signOut() {
            //     try {
            //         await firebaseAuth.signOut()
            //     }
            //     catch(error) {
            //         console.log(`error sign out, ${error}`)
            //     }
            // }
            async signOut() {
                // try {
                //     await firebaseAuth.signOut()
                // }
                // catch(error) {
                //     console.log(`error sign out, ${error}`)
                // }
                store.dispatch('signOut')
            }
        }
    }
</script>

<style lang="scss" scoped>
.admin_wrapper {
    margin: 10px;
}

.current_user_wrapper,
.order_wrapper,
.menu_wrapper {
    margin: 10px 0;
    padding: 10px;
    border: solid 1px #f79e38;
}

table {
    text-align: left;
    width: 70vw;
}

.order_number th {
    background: #ddd;
}

.order_number button {
    margin: 0 10px;
}
</style>