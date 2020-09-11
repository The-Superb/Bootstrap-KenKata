<template>
    <footer class="pl-0 pr-0 relative">
        <div class="container m-footer">
            <img class="img-fluid" src="@/assets/Brand.png" alt="">
        </div>

        <div class="bg-footer">
            <div class="container pl-0 pr-0">
                <div class="row">
                    <div class="pt-footer col col-md-6 col-xl-3 mb-5">
                        <div class="whiteDark">
                            <a class="navbar-brand logoText col" href="#">KEN<i class="logo fas fa-mountain"></i>KATA</a>
                            <p class="mt-3 col">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent enim quam, ullamcorper vel tellus vitae, tempus fringilla lectus. Donec maximus justo eu nisl convallis iaculis. Aenean laoreet.</p>
                            <p class="col img-none">Follow us</p>
                        </div>
                        <div class="col theme img-none">
                            <a class="" href="#"><i class="fab fa-facebook-f"></i></a>
                            <a class="ml-3" href="#"><i class="fab fa-instagram"></i></a>
                            <a class="ml-3" href="#"><i class="fab fa-twitter"></i></a>
                            <a class="ml-3" href="#"><i class="fab fa-linkedin"></i></a>
                            <a class="ml-3" href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    <div class="col col-md-6 col-xl-3 pt-footer mt-phone">
                        <h6 class="theme caps">Contact info</h6>
                        <p class="theme mt-3 address">Address: <br> <span class="white">
                            Solna Business Park <br> Feni-2500, Stockholm
                        </span>
                        </p>
                        <p class="theme mt-3 img-none">Phone: <br> <span class="white">
                            +08-123456789 <br> +08-123456789
                        </span>
                        </p>
                        <p class="theme mt-3 img-none">Email: <br> <span class="white">
                            support@website.com <br> info@website.com
                        </span>
                        </p>
                    </div>

                    <div class="col col-md-6 col-xl-3 mt-5 whiteDark img-none">
                        <h6 class="theme caps col">Useful links</h6>
                        <a class="col">Privacy Policy</a><br>
                        <a class="col">Terms And Conditions</a><br>
                        <a class="col">Contact Us</a><br>
                        <a class="col">Our Sitemap</a><br>
                        <a class="col">Latest News</a><br>
                        <a class="col">Returns</a><br>
                    </div>

                    <div class="mt-5 img-none col-12 col-md-6 col-xl-3">
                        <h6 class="theme caps">recent instagram</h6>
                        <div class="row mt-4">
                            <div class="col-3 instaGrey"></div>
                            <div class="col-3 instaGrey ml-2"></div>
                            <div class="col-3 instaGrey ml-2"></div>
                        </div>
                        <div class="row">
                            <div class="col-3 instaGrey mt-2"></div>
                            <div class="col-3 instaGrey ml-2 mt-2"></div>
                            <div class="col-3 instaGrey ml-2 mt-2"></div>
                        </div>
                        <div class="row">
                            <div class="col-3 instaGrey mt-2"></div>
                            <div class="col-3 instaGrey ml-2 mt-2"></div>
                            <div class="col-3 instaGrey ml-2 mt-2"></div>
                        </div>
                    </div>
                    <a id="topBtn" href="#" class="btn btn-light btn-lg" role="button"><i class="fas fa-long-arrow-alt-up"></i></a>
                </div>
            </div>
        </div>

        <div class="footerDark white">
            <div class="container pt-3 pb-3">
                <div class="col row">
                    <p class="col-12 col-md-6 mt-2 text-center">© Copyright 2020 KenKata</p>
                    <div class="col-12 col-md-6 mt-1">
                        <img class="img-fluid float-right" src="@/assets/Payment.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* Footer */
.bg-footer{
    background-color: var(--darkBlue);
}

.footerDark{
    background-color: #080C24;
}

.instaGrey:hover{
    background-color: var(--theme);
}

button {
    outline: 0 !important;
}
/* Footer end */
</style>