<template>
    <div class="product">
        <router-link tag="div" :to="'/detail/'+data.id" class="product-item">
            <img :src="'/images/list/'+data.img" alt />
            <div class="content">
                <h2>{{data.title}}</h2>
                <p>
                    <span class="price">{{data.price}}元</span>
                    <span class="origin-price">门市价{{data.originPrice}}元</span>
                    <span class="sales">销量{{data.sales}}</span>
                </p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ["data"]
};
</script>

<style lang="scss" scoped>
@import "../base.scss";
.product {
    background: #fff;
    
    .product-item {
        display: flex;
        margin: 0 10px;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
        img {
            width: 100px;
            height: 60px;
        }
        .content {
            flex: 1;
            padding-left: 10px;
            h2 {
              font-size: 14px;
              min-height: 44px;
            }
            p {
              font-size: 12px;
            }
            .price {
              color: $navColor;
              margin-right: 5px;
            }
            .sales {
              float: right;
            }
        }
    }
}
</style>