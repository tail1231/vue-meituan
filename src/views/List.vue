<template>
    <div class="list-container">
        <!-- 排序模块 -->
        <ul class="order">
            <li v-for="(item,index) in orders" :key="index" @click="listOrder(item.id)">
                <span>{{item.text}}</span>
                <span class="arrow"></span>
            </li>
        </ul>
        <Product v-for="(item,index) in detailList" :key="index" :data="item"></Product>
        <!-- 加载更多 -->
        <div class="load-more" @click="loadHandle" v-show="flag">
            <span>查看其它{{others.length}}条团购信息</span>
            <span class="arrow">
                <span class="arrow-white"></span>
            </span>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Product from "../components/Product";
export default {
    data() {
        return {
            //排序数据
            orders: [
                { text: "价格排序", id: "price" },
                { text: "销量排序", id: "sales" },
                { text: "好评排序", id: "evaluate" },
                { text: "优惠排序", id: "discount" }
            ],
            list: [],
            //存储未显示
            others: [],
            flag: true
        };
    },
    created() {
        axios({
            method: "get",
            url: "/data/list.json?id=" + this.$route.params.id
        }).then(res => {
            this.list = res.data.slice(0, 3);
            this.others = res.data.slice(3);
        });
    },
    components: {
        Product
    },
    methods: {
        //加载剩余的团购信息
        loadHandle() {
            this.list = this.list.concat(this.others);
            this.flag = !this.flag;
        },
        //数据排序
        listOrder(id) {
            if (id === "discount") {
                this.list.sort((a, b) => {
                    //优惠=原价-现价
                    return b.originPrice - b.price - (a.originPrice - a.price);
                });
                return;
            }
            this.list.sort((a, b) => {
                //返回值是排序的条件
                //a-b升序
                // return a[id]-b[id];
                //b-a 降序
                return b[id] - a[id];
            });
        }
    },
    computed: {
        detailList() {
            return this.list.filter(item => {
                return (item.title.toUpperCase().indexOf(this.$store.state.search.toUpperCase())) >= 0;
            });

            // return this.list.filter(item => item.title.toUpperCase().indexOf(this.$store.state.search.toUpperCase()) >= 0);
        }
    }
};
</script>

<style lang="scss">
.list-container {
    .order {
        background-color: #fff;
        display: flex;
        border-bottom: 1px solid #ccc;
        li {
            flex: 1;
            text-align: center;
            border-right: 1px solid #ccc;
            font-size: 14px;
            position: relative;
            padding: 5px;
            .arrow {
                width: 0;
                height: 0;
                border-top: 5px solid #000;
                border-right: 5px solid transparent;
                border-left: 5px solid transparent;
                position: relative;
                top: 12px;
                right: -4px;
            }
        }
        li:last-child {
            border: none;
        }
    }
    .load-more {
        border-bottom: 1px solid #ccc;
        background-color: #fff;
        font-size: 18px;
        color: #999;
        text-align: center;
        line-height: 40px;
        position: relative;
        .arrow {
            width: 0;
            height: 0;
            border-top: 15px solid #999;
            border-right: 15px solid transparent;
            border-left: 15px solid transparent;
            position: absolute;
            top: 14px;
            right: 67px;
            .arrow-white {
                width: 0;
                height: 0;
                border-top: 13px solid #fff;
                border-right: 13px solid transparent;
                border-left: 13px solid transparent;
                position: absolute;
                top: -17px;
                right: -13px;
            }
        }
    }
}
</style>