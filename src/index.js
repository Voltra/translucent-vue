import Translucent from "./Translucent"
import "translucent/src/translucent.style.css"

const Plugin = {
    install(Vue){
        Vue.use(Translucent);
    }
};

export {
    Plugin,
    Translucent,
}