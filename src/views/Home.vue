<template>
    <div class="home-container">
        <ul class="home-types clearfix">
            <router-link tag="li" v-for="(item,index) in types" :key="index" :to="'/list/'+item.id">
                <img :src="'/images/icon/' + item.img" alt />
                <p>{{item.text}}</p>
            </router-link>
        </ul>
        <!-- 定义广告模块 -->
        <ul class="ad">
            <router-link tag="li" v-for="(item,index) in ad" :key="index" :to="'/ad/'+item.id">
                <h3>{{item.title}}</h3>
                <p>{{item.description}}</p>
                <img :src="'/images/ad/'+item.url" alt />
            </router-link>
        </ul>
        <!-- 商品列表 -->
        <div class="home-list">
            <h2 class="guess-title">猜你喜欢</h2>
            <Product v-for="(item,index) in list" :key="index" :data="item"></Product>
        </div>
    </div>
</template>

<script>
//引入axios
import axios from "axios";
//引入product
import Product from "../components/Product";

export default {
    name: "home",
    data() {
        return {
            //分类数据
            types: [
                { text: "美食", id: "1", img: "01.png" },
                { text: "电影", id: "2", img: "02.png" },
                { text: "酒店", id: "3", img: "03.png" },
                { text: "休闲", id: "4", img: "04.png" },
                { text: "外卖", id: "5", img: "05.png" },
                { text: "KTV", id: "6", img: "06.png" },
                { text: "周边游", id: "7", img: "07.png" },
                { text: "丽人", id: "8", img: "08.png" },
                { text: "小吃", id: "9", img: "09.png" },
                { text: "火车票", id: "10", img: "10.png" }
            ],
            ad: [],
            list: []
        };
    },
    components: {
        Product
    },
    created() {
        //发送请求
        axios({
            method: "get",
            url: "/data/home.json"
        }).then(res => {
            this.ad = res.data.ad;
            this.list = res.data.list;
        });
    }
};
</script>

<style lang="scss" scoped>
.home-container {
    .clearfix:after {
        content: ""; /*设置内容为空*/
        height: 0; /*高度为0*/
        line-height: 0; /*行高为0*/
        display: block; /*将文本转为块级元素*/
        visibility: hidden; /*将元素隐藏*/
        clear: both; /*清除浮动*/
    }
    .clearfix {
        zoom: 1; /*为了兼容IE*/
    }
    .home-types {
        background-color: #fff;
        padding: 10px 0;
        margin-bottom: 10px;
        li {
            width: 20%;
            float: left;
            text-align: center;
            img {
                width: 60%;
            }
            p {
                font-size: 12px;
                color: #666;
                padding: 8px 0 15px;
            }
        }
    }
    .ad {
        display: flex;
        li {
            flex: 1;
            background-color: #fff;
            border-right: 1px solid #ccc;
            text-align: center;
            padding: 15px 0;
            h3 {
                color: #f00;
            }
            img {
                display: block;
                width: 80px;
                height: auto;
                padding: 15px 0;
                margin: 0 auto;
            }
            p {
                color: #666;
                padding: 10px 0 0;
            }
        }
        li:last-child {
            border: 0;
        }
    }
    .home-list {
        margin-top: 10px;
        background-color: #fff;
        .guess-title {
            padding: 10px 0;
            margin: 0 10px;
            font-size: 18px;
            border-bottom: 1px solid #ccc;
            font-weight: normal;
        }
    }
}
</style>