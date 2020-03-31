import Vue from 'vue'
import VueRouter from 'vue-router'
import ItemList from '../views/itemList/ItemList.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: () =>
            import ( /* webpackChunkName: "Home" */ '../views/Home.vue'),
        children: [{
                path: '/',
                name: 'Index',
                component: () =>
                    import ( /* webpackChunkName: "Index" */ '../views/Index.vue')
            },
            {
                path: '/itemList',
                name: 'ItemList',
                redirect: '/itemList/all',
                component: () =>
                    import ( /* webpackChunkName: "ItemList" */ '../views/itemList/ItemList.vue'),
                children: [{
                        path: '/itemList/:pathText',
                        component: () =>
                            import ( /* webpackChunkName: "ItemList" */ '../views/itemList/ItemList.vue'),
                    },
                    {
                        path: 'homeDecoration',
                        name: 'ItemList-homeDecoration',
                        component: () =>
                            import ( /* webpackChunkName: "ItemList" */ '../views/itemList/ItemList.vue')
                    },
                    {
                        path: 'clock',
                        name: 'ItemList-clock',
                        component: () =>
                            import ( /* webpackChunkName: "ItemList" */ '../views/itemList/ItemList.vue'),
                    },
                    {
                        path: 'vase',
                        name: 'ItemList-vase',
                        component: () =>
                            import ( /* webpackChunkName: "ItemList" */ '../views/itemList/ItemList.vue'),
                    },
                    {
                        path: 'blanket',
                        name: 'ItemList-blanket',
                        component: () =>
                            import ( /* webpackChunkName: "ItemList" */ '../views/itemList/ItemList.vue'),
                    },
                    {
                        path: 'pillow',
                        name: 'ItemList-pillow',
                        component: () =>
                            import ( /* webpackChunkName: "ItemList" */ '../views/itemList/ItemList.vue'),
                    },
                    {
                        path: 'lighting',
                        name: 'ItemList-lighting',
                        component: () =>
                            import ( /* webpackChunkName: "ItemList" */ '../views/itemList/ItemList.vue'),
                    },
                    {
                        path: 'light',
                        name: 'ItemList-light',
                        component: () =>
                            import ( /* webpackChunkName: "ItemList" */ '../views/itemList/ItemList.vue'),
                    },
                    {
                        path: 'lampshade',
                        name: 'ItemList-lampshade',
                        component: () =>
                            import ( /* webpackChunkName: "ItemList" */ '../views/itemList/ItemList.vue'),
                    },
                    {
                        path: 'sale',
                        name: 'ItemList-sale',
                        component: ItemList
                    }
                ]
            },
            {
                path: '/cart',
                name: 'Cart',
                component: () =>
                    import ( /* webpackChunkName: "Cart" */ '../views/cart/Cart.vue')
            },
            {
                path: '/checkout',
                name: 'Cart-checkout',
                component: () =>
                    import ( /* webpackChunkName: "Checkout" */ '../views/cart/Checkout.vue')


            },
            {
                path: '/orderCompleted',
                name: 'Cart-orderCompleted',
                component: () =>
                    import ( /* webpackChunkName: "OrderCompleted" */ '../views/cart/OrderCompleted.vue')
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "Login" */ '../views/Login.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router