import Spot from "@vue/components/Spot.vue"
import SpotRow from "@vue/components/SpotRow.vue"
import sizings from "@vue/mixins/sizings"

const plugin = {
    install(Vue, options){
        [
            Spot,
            SpotRow
        ].forEach(c => Vue.component(c.name, c));
        
        if("mixin" in options && !!options.mixin){
            Vue.mixin(sizings(
                parseInt(options.width || 12, 10),
                parseInt(options.height || 12, 10)
            ));
        }
    }
};

export default plugin