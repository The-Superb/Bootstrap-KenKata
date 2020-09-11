<template>
  <div>
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

  <!-- <router-link to="/">Home</router-link> |
  <router-link to="/shop">Shop</router-link> -->

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>







<style>
:root{
  --theme: #20D3C2;
  --sale: #64CB83;
  --hot: #FE4545;
  --lightGrey: #f6f6f6;
  --productBG: #eeeeee;
  --line: #e3e3e3;
  --grey: #aaaaaa;
  --white: #ffffff;
  --darkBlue: #0E153D;
}

@import url('https://fonts.googleapis.com/css?family=Roboto');

* {
  font-family: 'Roboto Condensed', sans-serif;
}

.btn:focus, .btn.focus {
  outline: 0;
  box-shadow: none !important;
}


/* Colors */
.white{
  color: var(--white) !important;
}
.white a{
  color: var(--white) !important;
}
.white a:hover{
  color: var(--darkBlue) !important;
}

.whiteDark{
  color: var(--white) !important;
}
.whiteDark a{
  color: var(--white) !important;
}
.whiteDark a:hover{
  color: var(--theme) !important;
}

.darkBlue{
  color: var(--darkBlue) !important;
}

.darkBlue a{
  color: var(--darkBlue) !important;
}

.darkBlue a:hover{
  color: var(--theme) !important;
}

.theme{
  color: var(--theme);
}

.sTheme{
  background-color: var(--theme);
}

.theme a{
  color: var(--theme) !important;
}

.theme a:hover{
  color: var(--white) !important;
}

.btn-theme{
  background-color: var(--theme);
  border-radius: 25px;
}

.btnWhite{
  background-color: var(--white);
  border-radius: 25px;
  color: var(--theme);
}

.btnWhite:hover{
  background-color: var(--theme);
  border-radius: 25px;
  color: var(--white);
}

/* Home start */
.productBg{
  background-color: var(--productBG);
}

.imgCarousel{
  margin-left: 40vw;
  margin-top: -30vh;
}

.mtHome{
  margin-top: 5rem;
}

.carouselH1{
  color: var(--theme);
  font-weight: 600;
}

.boxHome{
  background-color: #20d3c148;
  border-radius: 12px;
}

.boxHome:hover{
  background-color: var(--theme);
  color: var(--white);
}

.imgIcon{
  margin-top: 10%;
}

.h1Category{
  text-transform: uppercase;
}

.bgGrey{
  background-color: #cccccc;
}

.bgDarkblue{
  font-weight: 500;
  padding: 8px 15px 6px 15px;
  font-size: 16px;
  position: absolute;
  color: var(--theme);
  bottom: -1rem;
  border-radius: 0 6px 0 6px;
  background-color: var(--darkBlue);
}

.category-item{
  position: relative;
  background-color: #CCCCCC;
  border-radius: 6px;
}

.grid-container{
  display: grid;
  grid-gap: 10px 10px;
}

.btnBlue{
  background-color: var(--darkBlue);
  color: var(--white);
  border-radius: 25px;
}

.btnBlue:hover{
  color: var(--theme);
}

.caps{
  text-transform: uppercase;
}

.item-1{
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
}
.item-2{
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 1;
}
.item-3{
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 4;
}

.bgDarkblueSale{
  background-color: var(--darkBlue);
}

.marginBox{
  margin: 0rem 1rem 0rem 1rem;
}

.grid-layout{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  grid-auto-flow: dense;
  padding: 10px;
}

.grid-item{
  font-weight: 500;
  background-color: #cccccc;
}

.newArrivalsImg{
  width: 10vw;
  height: 20vh;
}

.m-Star{
  margin-top: -1.9rem;
}

.theme-bg{
  background-color: var(--theme);
  padding: 1.2rem;
}

.theme-bg-blog{
  margin-top: 0.2rem;
  background-color: var(--theme);
  width: 30%;
}

.date-pos {
  top: 11.5%;
  right: 6%;
}

.ml-blog{
  margin-right: 1rem;
  padding-right: 0.6rem;
}

.minus-margin{
  margin-left: -10rem !important;
}

.lightBg{
  background-color: var(--lightGrey);
}

.underline{
  text-decoration: underline;
}

.m-footer{
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.whiteCircle{
  background-color: white;
  border-radius: 50px;
  height: 4.5rem;
  width: 4.5rem;
  border: 2px dashed var(--theme);
}

.mtFS{
  margin-top: 6%;
}

.mt-FS{
  margin-top: -0.7rem;
}

.fs-small{
  font-size: 13px;
}

.ml-btn{
  margin-left: 36%;
  margin-top: 1rem;
}

.white-bg-ts{
  background-color: white !important;
  border-radius: 6px !important;
}

.relative{
  position: relative;
}

#topBtn{
  position: absolute;
  top: 15rem;
  right: 70px;
  font-size: 22px;
  width: 50px;
  height: 50px;
  background: var(--theme);
  color: white;
  border: none;
  cursor: pointer;
}

.darkBlueArrivals{
  background-color: var(--darkBlue);
}

.bgCGrey{
  background-color: var(--productBG);
  border-radius: 10px 10px 0px 0px;
}

.bgCBlue{
  background-color: var(--darkBlue);
  padding: 0.5rem;
  padding-left: 1rem;
  color: var(--white);
  border-radius: 0px 0px 10px 10px;
}

.redBg{
  background-color: var(--hot) !important;
}

.greenBg{
  background-color: var(--sale) !important;
}

.new-box {
  background-color: var(--theme);
  padding: 0.8rem 0.8rem 1.1rem 0.8rem;
  border-radius: 50px;
  position: absolute;
  top: 20px;
  left: 20px;
}

.my-hover{
  color: white;
}

.my-hover:hover { background-color: #20D3C2; }
.my-hover:hover h6, .my-hover:hover p { color: white; }
.my-hover:hover img { filter: brightness(0) invert(1)}

.pt-p {
  padding-top: 5px;
}

.white-bg {
  background-color: white;
  border-radius: 25px;
  padding: 10px;
  height: 48%;
}

.white-bg i:hover {
  color: var(--theme);
}

.grey {
  color: var(--line);
}

.bigger {
  font-size: 22px;
  font-weight: 100;
}

.bigger-red {
  font-size: 22px;
  color: red;
}

.line-through {
  text-decoration: line-through;
  font-size: 15px;
}

.my-width-p {
  width: 75px;
}

.item {
  position: relative;
}

.my-mt-box {
  margin-top: 14rem;
}

.my-show {
  background-color: #0e153de5;
  border-radius: 5px;
  display: none;
  position: absolute;
  top: 0;
  height: 112%;
  width: 100%;
}

.themeSale{
  background-color: var(--theme);
  height: 30vh;
}

/* hover */
.hover-me:hover + .my-show {
    display: block;
}

.hover-me:hover + .new-box {
  display: none;
}

.hover-me:hover + .new-box + .my-show {
  display: block;
}

.hover-me:hover + .new-box + .my-show + p {
  display: none;
}

.owl-container {
  margin-left: 20px;
  margin-right: 20px;
}

.owl-theme button:focus, .owl-theme button.focus {
  outline: 0;
}

.owl-carousel .owl-nav button {
  height: 60px;
  width: 60px;
}

.owl-carousel .owl-nav button span {
  color: var(--line);
}

/* PREV */
.owl-carousel .owl-nav button.owl-prev {
  font-size: 38px;
  border-radius: 50px;
  border: 1px solid var(--line);
  z-index: 100;
}

.owl-carousel .owl-nav button.owl-prev:hover {
  background-color: var(--theme) !important;
  border: none !important;
} .owl-carousel .owl-nav button.owl-prev:hover span {
  color: white !important;
}

/* NEXT */
.owl-carousel .owl-nav button.owl-next {
  font-size: 38px;
  border-radius: 50px;
  border: 1px solid var(--line);
  z-index: 100;
}

.owl-carousel .owl-nav button.owl-next:hover {
  background-color: var(--theme) !important;
  border: none !important;
} .owl-carousel .owl-nav button.owl-next:hover span {
  color: white !important;
}

.owl-dots button.owl-dot span {
  border-radius: 4px !important;
  padding: 6px;
}

.owl-dots button.owl-dot.active span {
  background-color: var(--theme) !important;
}

@media (min-width: 1200px) { 
  /* PREV */
  .owl-carousel .owl-nav button.owl-prev {
    position: absolute;
    top: 32%;
    left: -5rem;
  }

  /* NEXT */
  .owl-carousel .owl-nav button.owl-next {
    position: absolute;
    top: 32%;
    right: -5rem;
  }
}
/* Home end */


/* Mobile */
@media (max-width:1000px) {
  .img-none {
    display: none !important;
  }

  .span-1{
  grid-column-end: span 2;
  grid-row-end: span 1;
  }

  .span-2{
    grid-column-end: span 2;
    grid-row-end: span 1;
  }

  .span-2-m{
    grid-column-end: span 2;
    grid-row-end: span 1;
  }

  .border-top{
  border: solid 0px!important;
  }

  .tc-mobile{
    text-align: center;
  }

  .nav-mm{
    margin-left: 1rem;
  }

  .mt-phone{
    margin-top: 1.6rem !important;
  }

  .ml-phone{
    margin-left: 40%;
    margin-top: 0.5rem;
  }

  .ml-mobile-footer{
    margin-left: 1rem;
    margin-top: -1rem;
  }

  .pt-footer{
    margin-top: 1rem;
  }

  .mt-footer{
    margin-bottom: 1rem;
  }
}


/* Laptop */
@media (min-width: 1025px){
.img-none-lt{
  display: none !important;
}

.bgDarkblue{
  font-weight: 500;
  padding: 8px 15px 6px 15px;
  font-size: 16px;
  position: absolute;
  width: 50%;
  color: var(--theme);
  bottom: -1rem;
  border-radius: 0 6px 0 6px;
  background-color: var(--darkBlue);
}

.ml-btn{
  margin-left: 63%;
}

.m-footer{
  margin-top: 6rem;
  margin-bottom: 6rem;
}

.bg-footer{
  background-color: var(--darkBlue);
}

.marginBox{
  margin: 0rem 10rem 0rem 10rem;
}

#topBtn{
  position: absolute;
  bottom: 10rem;
  right: 30px;
  font-size: 22px;
  width: 50px;
  height: 50px;
  background: var(--theme);
  color: white;
  border: none;
  cursor: pointer;
}

.instaGrey{
  background-color: #cccccc;
  height: 8vh;
  border-radius: 10px;
}

.instaGrey:hover{
  background-color: var(--theme);
}

.pt-footer{
  margin-top: 3rem !important;
}

.themeSale{
  background-color: var(--theme);
  height: 40vh;
}

.grid-layout{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 10px;
  grid-auto-rows: minmax(180px, auto);
  grid-auto-flow: dense;
  padding: 10px;
}

.grid-item{
  font-weight: 500;
  background-color: #cccccc;
}

.span-1{
  grid-column-end: span 2;
  grid-row-end: span 1;
}

.span-2{
  grid-column-end: span 2;
  grid-row-end: span 2;
}

.span-3{
  grid-column-end: span 2;
  grid-row-end: span 1;
}

/* PREV */
#owl2.owl-carousel .owl-nav button.owl-prev {
  position: absolute!important;
  top: 52% !important;
  left: -5rem !important;
}

/* NEXT */
#owl2.owl-carousel .owl-nav button.owl-next {
  position: absolute !important;
  top: 52% !important;
  right: -5rem !important;
}
}

</style>