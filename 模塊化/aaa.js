let flag = true;

function sum(p1, p2) {
    return p1 + p2;
}

// 第一種方式
export { flag, sum };

// 第二種方式
export let name = "陳XX";

// 第三種方式
export function num1(i) {
    console.log(i);
}

// 第四種方式 / 唯一 / 導出時可以不命名，因為是唯一所以可以讓導入的人命名
let address = "台中市"
export default address;
