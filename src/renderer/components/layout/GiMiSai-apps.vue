<template>
    <section>
            <mu-tabs :value.sync="active2" inverse center style="background-color: #ffffff !important;">
                <mu-tab button :ripple="false">
                        <span class="iconfont icon-file_type_gamemaker"></span>GameMaker Studio 2
                </mu-tab>
                <mu-tab button :ripple="false">
                        <span class="iconfont icon-icons-game_maker"></span>GameMaker: Studio
                </mu-tab>
                <mu-tab button :ripple="false">
                        <span class="iconfont icon-gamemaker81"></span>GameMaker 7/8/8.1
                </mu-tab>
                <mu-tab button :ripple="false">
                        <span class="iconfont icon-gamemaker81"></span>LateralGM/RadialGM
                </mu-tab>
            </mu-tabs>
        <div class="gimisai-apps-box" id="gimisai-apps-gms2" v-if="active2 === 0">
            <GMS2></GMS2>
        </div>
        <div class="gimisai-apps-box" id="gimisai-apps-gms1" v-if="active2 === 1">
            <GMS></GMS>
        </div>
        <div class="gimisai-apps-box" id="gimisai-apps-gm81" v-if="active2 === 2">
            <GM81></GM81>
        </div>
        <div class="gimisai-apps-box" id="gimisai-apps-gm81" v-if="active2 === 3">
            <LGMRGM></LGMRGM>
        </div>
    </section>
</template>

<script>
import GMS2 from "./GiMiSai-gms2"
import GMS from "./GiMiSai-gms"
import GM81 from "./GiMiSai-gm"
import LGMRGM from "./GiMiSai-lgmrgm"
export default {
    components:{
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