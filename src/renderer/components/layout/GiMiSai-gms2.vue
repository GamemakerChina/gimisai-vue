<template>
    <section>
        <mu-expansion-panel>
            <div slot="header">安装汉化文件</div>
            <mu-form :model="form" class="gimisai-gms2-lang-form">
                <mu-row fill>
                    <mu-col span="2">
                        <mu-form-item prop="select">
                            <mu-select label="版本" v-model="edition.value">
                                <mu-option v-for="option,index in options_edition" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>
                        </mu-form-item>
                    </mu-col>
                    <mu-col span="9" class="offset-custom">
                        <mu-form-item prop="input">
                            <mu-text-field v-model="gms2.path" full-width></mu-text-field>
                        </mu-form-item>
                    </mu-col>
                </mu-row>
                <mu-form-item>
                    <mu-button color="green" @click="auto_find" full-width>自动查找</mu-button>
                </mu-form-item>
                <mu-form-item>
                    <mu-button color="blue" @click="install_lang" full-width>安装汉化</mu-button>
                </mu-form-item>
            </mu-form>
        </mu-expansion-panel>
        <mu-expansion-panel>
            <div slot="header">下载 Runtime</div>
            <mu-form :model="form" class="gimisai-gms2-runtime-form">
                <mu-row fill>
                    <mu-col span="2">
                        <mu-form-item prop="select">
                            <mu-select label="Runtime 版本" v-model="gms2.version">
                                <mu-option v-for="option,index in options_version" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>
                        </mu-form-item>
                    </mu-col>
                    <mu-col span="9" class="offset-custom">
                        <mu-form-item prop="select">
                            <mu-select label="订购版本" multiple v-model="gms2.order">
                                <mu-option v-for="option,index in options_order" :key="option" :label="option" :value="option"></mu-option>
                            </mu-select>
                        </mu-form-item>
                    </mu-col>
                </mu-row>
                <mu-form-item>
                    <mu-button color="green" @click="download_runtime" full-width>下载 Runtime</mu-button>
                </mu-form-item>
            </mu-form>
        </mu-expansion-panel>
        <mu-expansion-panel>
            <div slot="header">小工具</div>
        </mu-expansion-panel>
    </section>
</template>

<script>
export default {
    data () {
        return {
            options_edition: ['官方版', 'Steam 版'],
            options_version: ['2.3.1.409'],
            options_order: [
                "GameMaker Studio 2 Desktop (Windows/macOS/Linux)",
                "GameMaker Studio 2 Web (HTML5)",
                "GameMaker Studio 2 Mobile (Android/iOS/tvOS)",
                "GameMaker Studio 2 UWP (Windows UWP)",
                "GameMaker Studio 2 Creator for Windows",
                "GameMaker Studio 2 Creator for Mac",
                "GameMaker Studio 2 PS4 (1年订阅许可)",
                "GameMaker Studio 2 Nintendo Switch (1年订阅许可)",
                "GameMaker Studio 2 Xbox One (1年订阅许可)",
                "GameMaker Studio 2 Ultimate (所有输出平台，1年订阅许可)"
            ],
            edition: {
                value: ""
            },
            gms2: {
                path: "",
                version: ""
            }
        };
    }
}
</script>
<style>
    .offset-custom {
        margin-left:10px;
    }
</style>