<template>
    <section>
        <mu-expansion-panel :expand="panel === 'panel1'" @change="toggle('panel1')">
            <div slot="header">Runtime RSS 订阅源</div>
            <mu-form :model="form" class="gimisai-gms2-runtime-form">
                <mu-form-item prop="radio">
                    <div id="radio-box">
                        <mu-flex justify-content="start" class="offset-custom-bottom">
                            <mu-radio v-model="gms2settings.mirror" value="yoyogames" label="YoYo Games 官方"></mu-radio>
                        </mu-flex>
                        <mu-flex justify-content="start" class="custom-radio offset-custom-bottom">
                            <mu-radio v-model="gms2settings.mirror" value="thirdpartymirror" label="第三方镜像站"></mu-radio>
                            <mu-select v-model="gms2settings.mirrorlist" label="镜像站列表">
                                <mu-option v-for="option, index in options_mirrorlist" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>
                        </mu-flex>
                        <mu-flex fill justify-content="start" class="custom-radio offset-custom-bottom">
                            <mu-radio v-model="gms2settings.mirror" value="custom" label="自定义"></mu-radio>
                            <mu-text-field v-model="gms2settings.mirrorURL" prop="mirrorURL" full-width></mu-text-field>
                        </mu-flex>
                    </div>
                </mu-form-item>
                <div id="runtime-info"></div>
                <mu-form-item prop="button">
                    <mu-button color="green" @click="save_mirrorURL" full-width>保存</mu-button>
                </mu-form-item>
            </mu-form>
        </mu-expansion-panel>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                gms2settings: {
                    mirror: "",
                    mirrorURL: ""
                },
                options_mirrorlist: ["LiarOnce 国内镜像站"],
                panel: ''
            };
        },
        methods: {
            toggle(panel) {
                this.panel = panel === this.panel ? '' : panel;
            }
        }
    };
</script>
<style>
.offset-custom-bottom {
    margin-bottom: 10px
}
.custom-radio .mu-radio {
    top: 8px;
}
#radio-box {
    width: 100%;
}
#runtime-info {
    height: 140px;
}
</style>