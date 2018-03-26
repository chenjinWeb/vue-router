

import helloworld from "./components/HelloWorld.vue"
import header from "./components/header.vue"
import footer from "./components/footer.vue"


export default function (Vue){

  Vue.component(helloworld.name,helloworld)

  Vue.component(header.name,header)

  Vue.component(footer.name,footer)

}





