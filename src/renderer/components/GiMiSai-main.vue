<template>
    <section>
        <mu-tabs :value.sync="active1" inverse center>
            <mu-tab><span class="iconfont icon-home"></span>首页</mu-tab>
            <mu-tab>
                <span class="iconfont icon-apps"></span>应用
            </mu-tab>
            <mu-tab><span class="iconfont icon-bbs"></span>论坛</mu-tab>
        </mu-tabs>
        <div class="gimisai-index" v-if="active1 === 0">
            <p>test</p>
        </div>
        <div class="gimisai-apps" v-if="active1 === 1">
            <Apps></Apps>
        </div>
    </section>
</template>

<script>
import Apps from "./layout/GiMiSai-apps"
export default {
    props: ['show'],
    components: {
        Apps
    },
    data () {
        return {
            open: true,
            active1: 0
        };
    }
}
</script>