import { createRouter, createWebHistory} from 'vue-router'
import Orderbill from '../views/Orderbill.vue'

const routes = [
    {path:"/order",component:Orderbill}
  ]
const router = createRouter(
    {
        history:createWebHistory(),
        routes,
    }
)
export default router

