import Translucent from "./Translucent"
import "./styles"

const Plugin = {
    install(Vue){
        Vue.use(Translucent);
    }
};

export {
    Plugin,
    Translucent,
}