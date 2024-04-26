import Addarticle from './components/Addarticle.vue';
import Viewarticles from './components/Viewarticles.vue';
import Viewcategories from './components/Viewcategories.vue';
import Accueil from './components/accueil.vue';
import Editarticle from './components/articles/Editarticle.vue';
import Viewarticletable from './components/articles/Viewarticletable.vue'
import HomeCart from './components/cart/HomeCart.vue'
import Cart from './components/cart/Cart.vue'

export const routes = [
    {
        name: 'accueil',
        path: '/',
        component: Accueil
    },

    {
        name : "Viewcategorie",
        path : "/listcategorie",
        component : Viewcategories

    },

    {
        name : "Viewarticle" ,
        path : "/listarticle" ,
        component : Viewarticles 
    },

    {
        name : "Addarticle" ,
        path : "/addarticle" ,
        component : Addarticle
    },

    {
        name : "editarticle",
        path : "/editarticle/:id",
        component : Editarticle 
    },
    {
        name:"Viewarticletable",
        path:"/listarticletable",
        component: Viewarticletable
    },
    {
        name:'HomeCart',
        path:'/shopping',
        component: HomeCart
    },
    {
        path:'/cart',
        name:'Cart',
        component:Cart
    },
        
        



];