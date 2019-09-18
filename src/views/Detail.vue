<template>
    <div class="detail-container">
        <!-- 图片信息 -->
        <div class="img-part">
            <img :src="'/images/item/'+ data.src" />
            <h1>{{data.title}}</h1>
            <p>{{data.description}}</p>
        </div>
        <!-- 价格模块 -->
        <div class="price-part">
            <span class="price">
                {{data.price}}
                <em>元</em>
            </span>
            <span class="old-price">门市价{{data.originPrice}}元</span>
            <button>立即购买</button>
        </div>
        <!-- 销量模块 -->
        <div class="sales-part">
            <span class="liji">支持立即退货</span>
            <span class="suishi">支持随时退货</span>
            <p>销量{{data.sales}}</p>
        </div>
        <!-- 店家信息 -->
        <div class="shop-part">
            <h1>店家信息</h1>
            <div class="shop-info">
                <p>{{data.storeName}}</p>
                <p>{{data.storeAddress}}</p>
            </div>
            <span>查看{{data.storeNum}}家分店</span>
        </div>
        <!-- 购买须知 -->
        <div class="buy-part">
            <h1 class="title">购买须知</h1>
            <div class="content">
                <div class="effective-date">
                    <h1>有效日期</h1>
                    <p>{{data.validateTime}}</p>
                </div>
                <div class="use-date">
                    <h1>使用日期</h1>
                    <p>{{data.useTime}}</p>
                </div>
                <div class="use-rules">
                    <h1>使用规则</h1>
                    <ul>
                        <li v-for="(item,index) in data.rules" :key="index">
                            <p>{{item}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            data: {}
        };
    },
    methods: {
        updataData() {
            let { params } = this.$route;
            axios({
                method: "get",
                url: "/data/product.json",
                params: { params }
            }).then(res => {
                this.data = res.data;
            });
        }
    },
    created() {
        this.updataData();
    },
    // beforeRouteEnter (route, oldRoute, next) {
    //   // ...
    //   console.log(arguments);
    //   next();
    // },
    watch: {
        $route() {
            console.log(111, arguments);
        }
    }
};
</script>

<style lang="scss" scoped>
.detail-container {
    .img-part {
        position: relative;
        img {
            width: 100%;
            display: block;
        }
        h1,
        p {
            position: absolute;
            left: 20px;
            bottom: 15px;
            color: #fff;
        }
        h1 {
            bottom: 40px;
            font-size: 28px;
        }
    }
    .price-part {
        position: relative;
        background-color: #fff;
        padding: 0 0 10px 5px;
        border-bottom: 1px solid #ccc;
        .price {
            font-size: 30px;
            color: #07a7ad;
            margin-right: 5px;
            em {
                font-size: 16px;
                font-style: normal;
            }
        }
        .old-price {
            color: #555;
        }
        button {
            position: absolute;
            right: 20px;
            bottom: 15px;
            background-color: #ff6e00;
            border: none;
            outline: none;
            padding: 3px 8px;
            font-size: 12px;
            color: #fff;
        }
    }
    .sales-part {
        padding: 10px 0 15px 8px;
        background-color: #fff;
        color: orange;
        margin-bottom: 10px;
        span {
            margin-right: 50px;
        }
        p {
            margin-top: 10px;
            color: #555;
        }
    }
    .shop-part {
        background-color: #fff;
        padding: 20px 0 15px 0;
        margin-bottom: 10px;
        h1 {
            font-size: 22px;
            font-weight: normal;
            padding-bottom: 8px;
            border-bottom: 1px solid #ccc;
            margin: 0 8px 15px 8px;
        }
        .shop-info {
            margin: 0 8px;
            height: 30px;
            line-height: 30px;
            padding-bottom: 65px;
            border-bottom: 1px solid #000;
            margin-bottom: 10px;
        }
        span {
            margin: 0 8px;
            color: #a0c6d8;
        }
    }
    .buy-part {
        padding: 20px 8px 0;
        background-color: #fff;
        .title {
            font-size: 22px;
            font-weight: normal;
            color: #555;
            padding-bottom: 8px;
            border-bottom: 1px solid #ccc;
        }
        .content {
            h1 {
                color: orange;
                font-size: 18px;
                font-weight: normal;
                height: 60px;
                line-height: 60px;
            }
            .use-rules {
              p {
                height: 30px;
                line-height: 30px;
              }
              li:last-child {
                margin-top: 442px;
              }
            }
        }
    }
}
</style>

