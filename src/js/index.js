import "core-js"
import "regenerator-runtime/runtime"

import plugin from "@vue/plugins"
import sizings from "@vue/mixins/sizings"
import Spot from "@components/Spot"
import SpotRow from "@components/SpotRow"

if(typeof window != "undefined" && window.Vue)
    Vue.use(plugin, {mixin: true});

const VueSpot = {
    plugin,
    sizings,
    Spot,
    SpotRow,
};

if(typeof window != "undefined")
    window.VueSpot = VueSpot;

export default VueSpot