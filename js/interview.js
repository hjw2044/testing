$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: false, // 循环模式选项
        effect: 'coverflowEffect',
        slidesPerView : 1.6,
        initialSlide:0,


        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // 如果需要滚动条
        //scrollbar: {
        //    el: '.swiper-scrollbar',
        //},
    })



    //标签栏切换
    $('.homepage').click(function(){
        $('.video').addClass('d-none');
        $('.unvideo').removeClass('d-none');
        $('.mine').addClass('d-none');
        $('.unmine').removeClass('d-none');
    })
    $('.unhomepage').click(function(){
        $('.homepage').removeClass('d-none');
        $('.unhomepage').addClass('d-none');
        $('.video').addClass('d-none');
        $('.unvideo').removeClass('d-none');
        $('.mine').addClass('d-none');
        $('.unmine').removeClass('d-none');
    })
    $('.unvideo').click(function(){
        $('.video').removeClass('d-none');
        $('.unvideo').addClass('d-none');
        $('.homepage').addClass('d-none');
        $('.unhomepage').removeClass('d-none');
        $('.unmine').removeClass('d-none');
        $('.mine').addClass('d-none');
    })
    $('.unmine').click(function(){
        $('.mine').removeClass('d-none');
        $('.unmine').addClass('d-none');
        $('.homepage').addClass('d-none');
        $('.unhomepage').removeClass('d-none');
        $('.video').addClass('d-none');
        $('.unvideo').removeClass('d-none');
    })

    $('.nav>a').click(function(){
        $(this).css({
            color: "#333333",
            'border-bottom':".04rem solid #4ac6ff"
        });
        $(this).siblings.css({
            color: "#777777",
            'border-bottom':"none"

        });

    })







});