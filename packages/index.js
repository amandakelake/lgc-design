import LgcButton from "./button";
import LgcButton2 from "./button2";

const components = [
  LgcButton,
  LgcButton2
]

const LgcDesign = {
  LgcButton,
  LgcButton2
}

// 定义 install 方法，接收 Vue 作为参数
LgcDesign.install = (Vue) => {
  // 如果安装过，那就不用再安装了
  if (LgcDesign.installed) return;
  LgcDesign.installed = true;
  // 遍历注册所有组件
  components.forEach(component => Vue.component(component.name, component))
}

// 检测到 Vue 才执行
// if (typeof window !== 'undefined' && window.Vue) {
//   install(Vue)
// }

// 全量引入 import LgcDesign from 'lgc-design'  ->  Vue.use(LgcDesign)
export default LgcDesign;
// 按需加载 import { Button } from 'lgc-design'
export {
  LgcButton,
  LgcButton2
}