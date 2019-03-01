<template>
    <section>
        <mu-tabs center>
            <mu-tab><span class="iconfont icon-home"></span>首页</mu-tab>
            <mu-tab>
                <span class="iconfont icon-apps"></span>应用
                <router-link to="/apps"></router-link>
            </mu-tab>
            <mu-tab><span class="iconfont icon-bbs"></span>论坛</mu-tab>
        </mu-tabs>
        <!---
        <div class="sidebar">
            <mu-drawer :open="show">
                <mu-container>
                    <mu-card>
                        <mu-card-header title="LiarOnce" sub-title="Vue testing...">
                            <mu-avatar slot="avatar"><img src="static/images/me.jpg"></mu-avatar>
                        </mu-card-header>
                    </mu-card>
                </mu-container>
                <mu-list>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                            <span class="iconfont icon-home"></span>
                        </mu-list-item-action>
                        <mu-list-item-title>首页</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                            <span class="iconfont icon-file_type_gamemaker"></span>
                        </mu-list-item-action>
                        <mu-list-item-title>GameMaker Studio 2</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                            <span class="iconfont icon-icons-game_maker"></span>
                        </mu-list-item-action>
                        <mu-list-item-title>GameMaker: Studio</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                            <span class="iconfont icon-gamemaker81"></span>
                        </mu-list-item-action>
                        <mu-list-item-title>GameMaker 7/8/8.1</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                            <mu-icon value="drafts"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>LateralGM</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                            <mu-icon value="drafts"></mu-icon>
                        </mu-list-item-action>
                        <mu-list-item-title>RadialGM</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                            <span class="iconfont icon-bbs"></span>
                        </mu-list-item-action>
                        <mu-list-item-title>论坛</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                            <span class="iconfont icon-mzicon-setting"></span>
                        </mu-list-item-action>
                        <mu-list-item-title>设置</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button :ripple="false">
                        <mu-list-item-action>
                            <span class="iconfont icon-aboutus"></span>
                        </mu-list-item-action>
                        <mu-list-item-title>关于</mu-list-item-title>
                    </mu-list-item>
                </mu-list>
            </mu-drawer>
        </div>
        -->
    </section>
</template>

<script>
export default {
    props: ['show'],
    data () {
        return {
            open: true
        };
    }
}
</script>