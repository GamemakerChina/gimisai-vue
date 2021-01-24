<template>
    <section>
        <mu-tabs :value.sync="active2" inverse center style="background-color: #ffffff !important;">
            <mu-tab button :ripple="false">
                <span class="iconfont iconmzicon-setting"></span>全局设置
            </mu-tab>
            <mu-tab button :ripple="false">
                <span class="iconfont iconfile_type_gamemaker"></span>GameMaker Studio 2
            </mu-tab>
            <mu-tab button :ripple="false">
                <span class="iconfont iconicons-game_maker"></span>GameMaker: Studio
            </mu-tab>
            <mu-tab button :ripple="false">
                <span class="iconfont icongamemaker81"></span>GameMaker 7/8/8.1
            </mu-tab>
            <mu-tab button :ripple="false">
                <span class="iconfont iconlogo-lgm">&nbsp;<span class="iconfont iconenigma"></span></span>LateralGM/RadialGM
            </mu-tab>
        </mu-tabs>
        <div class="gimisai-settings-box" id="gimisai-settings-general" v-if="active2 === 0">
            <General></General>
        </div>
        <div class="gimisai-settings-box" id="gimisai-settings-gms2" v-if="active2 === 1">
            <GMS2></GMS2>
        </div>
        <div class="gimisai-settings-box" id="gimisai-settings-gms1" v-if="active2 === 2">
            <GMS></GMS>
        </div>
        <div class="gimisai-settings-box" id="gimisai-settings-gm81" v-if="active2 === 3">
            <GM81></GM81>
        </div>
        <div class="gimisai-settings-box" id="gimisai-settings-lgmrgm" v-if="active2 === 4">
            <LGMRGM></LGMRGM>
        </div>
    </section>
</template>

<script>
import General from "./settings/setting-general"
import GMS2 from "./settings/setting-gms2"
import GMS from "./settings/setting-gms"
import GM81 from "./settings/setting-gm"
import LGMRGM from "./settings/setting-lgmrgm"
export default {
    components:{
        General,
        GMS2,
        GMS,
        GM81,
        LGMRGM
    },
    data() {
        return {
            active2: 0
        }
    }
}
</script>