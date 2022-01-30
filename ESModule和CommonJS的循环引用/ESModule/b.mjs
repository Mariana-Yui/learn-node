/*b.js*/
import { message } from './a.mjs'
export let count = 5;
// console.log(message); 会报错 此时a.mjs处于fetching态, 需要初始化完才能获取message
setTimeout(() => {
    console.log(message);
}, 0);