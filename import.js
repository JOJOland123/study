// main.js
import { myValue } from "./export.js";
import * as myModule from "./export.js";

console.log(myValue); // 1
console.log(myModule.myValue); // 1
setTimeout(() => {
  console.log(myValue); // 2；my-module 更新了它的值
  console.log(myModule.myValue); // 2
  myValue = 3; // TypeError: Assignment to constant variable.
  // 导入模块只能读取该值但不能重新对它赋值。
}, 300);
