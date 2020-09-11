<template>
<div class="container mtHome">
        <h1 class="row font-weight-bold d-flex justify-content-center caps">top<span class="theme ml-2">sellers</span></h1>
        <div class="d-flex justify-content-center mb-3">
            <img src="@/assets/wave.png" >
        </div>
        <p class="d-flex justify-content-center">Check out our weekly top sellers in all category</p>

<div class="grid-layout-ts">
    <div class="grid-item span-5 grid-item-2">
        <div class="item">
            <img class="bgCGrey hover-me img-fluid" src="@/assets/topProd1.png" >
            <div class="new-box">
                <p class="mb-0 pt-p">
                    <img class="logo-size" src="@/assets/Bexim.png" >
                </p>
            </div>
            <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="mt-boxBig mr-auto">
                        <p class="mb-2">Men's denim shirts full</p>
                        <p class="border pl-2 my-width-p">Fashion</p>
                        <p class="line-through mb-2">$190.00</p>
                        <h4 class="theme">$170.00</h4>
                    </div>
                    <div class="mr-4 mt-4 ml-5 white-bg">                           
                        <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                        <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                        <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                        <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="H">Left</a>
                        <i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i>
                    </div>
                    </div>
                        <div class="theme d-flex flex-row-reverse mr-4 m-Star">
                            <i class="far fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
            </div>                  
            <p class="bgCBlue mb-0">Men's denim shirts full</p>
        </div>
    </div>

    <div class="grid-item span-4 grid-item-1">
        <div class="item">
            <img class="bgCGrey hover-me img-fluid" src="@/assets/topProd2.png" >
            <div class="new-box">
                <p class="mb-0 pt-p">
                    <img class="logo-size" src="@/assets/Lighton.png" >
                </p>
            </div>
            <div class="my-show white pl-3">
                <div class="d-flex">
                    <div class="mt-box mr-auto">
                        <p class="mb-2">Women's leather bag and shoe</p>
                        <p class="border pl-2 my-width-p">Fashion</p>
                        <p class="line-through mb-2">$190.00</p>
                        <h4 class="theme">$170.00</h4>
                    </div>
                    <div class="mr-4 mt-4 ml-5 white-bg">                           
                        <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                        <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                        <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                        <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="H">Left</a>
                        <i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i>
                    </div>
                    </div>
                        <div class="theme d-flex flex-row-reverse mr-4 m-Star">
                            <i class="far fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
            </div>                  
            <p class="bgCBlue mb-0">Women's leather bag</p>
        </div> 


    </div>

    <div class="grid-item span-4 grid-item-3">

        <div class="item">
            <img class="bgCGrey hover-me img-fluid" src="@/assets/topProd3.png">
            <div class="new-box">
                <p class="mb-0 pt-p">
                    <img class="logo-size" src="@/assets/Rosimo.png" >
                </p>
            </div>
            <div class="my-show white pl-3 ">
                <div class="d-flex">
                    <div class="mt-box mr-auto">
                        <p class="mb-2">New look men's sneakers</p>
                        <p class="border pl-2 my-width-p">Outdoors</p>
                        <p class="line-through mb-2">$190.00</p>
                        <h4 class="theme">$170.00</h4>
                    </div>
                    <div class="mr-4 mt-4 ml-5 white-bg">                           
                        <i class="fas fa-circle bigger-red mt-2 d-flex"></i>
                        <i class="far fa-heart bigger mt-2 grey d-flex"></i>
                        <i class="fas fa-random bigger mt-2 grey d-flex"></i>
                        <i class="fas fa-search bigger mt-2 grey d-flex"></i>
                        <a href="#" data-toggle="tooltip" data-placement="left" title="H">Left</a>
                        <i class="fas fa-shopping-cart mt-2 grey bigger d-flex"></i>
                    </div>
                    </div>
                        <div class="theme d-flex flex-row-reverse mr-4 m-Star">
                            <i class="far fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
            </div>                  
            <p class="bgCBlue mb-0">New look men's sneakers</p>
        </div> 
    </div>
</div>



</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.mt-box {
    margin-top: 10rem;
}

.mt-boxBig {
    margin-top: 31rem;
}

.hover-me:hover + .my-show {
    display: block;
}

.hover-me:hover + .new-box {
    display: block;
}

.hover-me:hover + .new-box + .my-show {
    display: block;
}

.hover-me:hover + .new-box + .my-show + p {
    display: block;
}

.new-box {
    border-radius: 10px;
    background: white;
}

.my-show {
    background-color: #0e153de5;
    border-radius: 5px;
    display: none;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
}

.grid-item{
    background-color: transparent;
}

.grid-layout-ts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 15px;
    grid-auto-flow: dense;
    padding: 10px;
}

.span-4 {
    grid-column-end: span 2;
    grid-row-end: span 2;
}

.span-5 {
    grid-column-end: span 2;
    grid-row-end: span 4;
}

.logo-size{
    height: 1.6rem;
}

@media (max-width: 1025px) {
    .grid-layout-ts {
        grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)) !important;
        grid-gap: 10px;
    }
}
</style>