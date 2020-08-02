import {flag, sum, name, num1} from "./aaa.js"
// default默認導出可以自己命名，但是唯一
import addr from "./aaa.js"
// 全部導出
// import * as aaa from "./aaa.js"
// 透過 aaa.flag 去拿變量

if(flag) {
    console.log(addr);
    num1(1)
    console.log(name);
    console.log(sum(20, 30));
}