<template>
    <div id="app">
        <div class="header">
            <div class="go-back">
                <span class="arrow">
                    <span class="arrow green"></span>
                </span>
            </div>
            <h1>vue团购</h1>
            <div class="login">登录</div>
        </div>
        <div class="search">
            <input type="text" placeholder="请输入搜索关键字" v-model="msg" @keyup.enter="showSearchResult" />
        </div>
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: ""
        };
    },
    methods: {
        //展示搜索
        showSearchResult() {
            //发布消息
            this.$store.commit("updateSearch", this.msg);
            //清空搜索栏数据
            this.msg = "";
        }
    }
};
</script>

<style lang="scss">
//引入库文件
@import "./base.scss";
* {
    padding: 0;
    margin: 0;
    list-style: none;
}
html,
body {
    background-color: #efefef;
}
.header {
    background: $navColor;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    display: flex;
    .go-back,
    .login {
        width: 60px;
    }
    .login {
        font-size: 14px;
    }
    .go-back {
        position: relative;
        .arrow {
            @include arrow(10px, #fff, right);
            position: absolute;
            top: 22px;
            left: 10px;
            .green {
                border-right-color: $navColor;
                top: -10px;
                left: -7px;
            }
        }
    }
    h1 {
        flex: 1;
        font-size: 22px;
    }
}
.search {
    background-color: #fff;
    padding: 10px 20px;
    display: flex;
    input {
        font-size: 14px;
        background-color: #efefef;
        border: none;
        outline: none;
        padding: 10px 20px;
        border-radius: 18px;
        flex: 1;
    }
}
</style>
