<template>
    <!-- Carousel start -->
    <div class="carousel slide pl-0 pr-0" data-ride="carousel" data-aos="fade-up" data-aos-duration="2000">
        <div class="productBg carousel-inner mb-first">
            <div class="mtHome carousel-item active">
                <div class="container">
                    <h1>Shopping is</h1>
                    <h1 class="carouselH1">MORE FUN</h1>
                    <p>Vivamus dignissim a ex eu ornare. Ut fermentum orci <br> vel diam ultricies faucibus. Quisque quis erat sed</p>
                    <button class="btn btnWhite">SHOP NOW</button>
                </div>
                <img src="@/assets/homeBg.png" class="d-block imgCarousel img-none">
            </div>
        </div>
    </div>
    <!-- Carousel end -->
</template>

<style scoped>
    @media (max-width: 1025px) {
        .mb-first{
            padding-bottom: 3rem;
        }
    }
</style>