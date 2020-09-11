<template>
  <div>

    <First />
    <Box />
    <Category />
    <Arrivals />
    <Sale />
    <Products />
    <FlashSale />
    <TopSellers />
    <Review />
    <Blog />
    <Subscribe />

  </div>
</template>

<script>
  import First from '@/components/Home/First.vue'
  import Box from '@/components/Home/Box.vue'
  import Category from '@/components/Home/Category.vue'
  import Arrivals from '@/components/Home/Arrivals.vue'
  import Sale from '@/components/Home/Sale.vue'
  import Products from '@/components/Home/Products.vue'
  import FlashSale from '@/components/Home/FlashSale.vue'
  import TopSellers from '@/components/Home/TopSellers.vue'
  import Review from '@/components/Home/Review.vue'
  import Blog from '@/components/Home/Blog.vue'
  import Subscribe from '@/components/Home/Subscribe.vue'

export default {
  name: 'Home',
  components: {
    First,
    Box,
    Category,
    Arrivals,
    Sale,
    Products,
    FlashSale,
    TopSellers,
    Review,
    Blog,
    Subscribe
  }
}
</script>

<style >
</style>