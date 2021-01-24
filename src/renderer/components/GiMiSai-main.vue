<template>
    <section>
        <mu-tabs :value.sync="active1" inverse center>
            <mu-tab><span class="iconfont iconhome"></span>首页</mu-tab>
            <mu-tab><span class="iconfont iconapps"></span>应用</mu-tab>
            <mu-tab><span class="iconfont iconmzicon-setting"></span>设置</mu-tab>
        </mu-tabs>
        <div class="gimisai-index" v-if="active1 === 0">
            <p>这里是主页（有点不想做）</p>
        </div>
        <div class="gimisai-apps" v-if="active1 === 1">
            <Apps></Apps>
        </div>
        <div class="gimisai-settings" v-if="active1 === 2">
            <Settings></Settings>
        </div>
    </section>
</template>

<script>
import Apps from "./layout/GiMiSai-apps"
import Settings from "./layout/GiMiSai-settings"
export default {
    props: ['show'],
    components: {
        Apps,
        Settings
    },
    data () {
        return {
            open: true,
            active1: 0
        };
    }
}
</script>