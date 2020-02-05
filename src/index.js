import Translucent from "./Translucent"

const Plugin = {
    install(Vue){
        Vue.use(Translucent);
    }
};

export {
    Plugin,
    Translucent,
}