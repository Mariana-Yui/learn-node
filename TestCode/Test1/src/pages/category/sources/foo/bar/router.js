// 普通加载路由
// import category from './category.vue'
// 懒加载路由
const category = () => import('./category.vue')
export default {
  path: '/category',
  name: 'category',
  component: category,
  children: [
  ]
}
