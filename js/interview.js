$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // ��ֱ�л�ѡ��
        loop: false, // ѭ��ģʽѡ��
        effect: 'coverflowEffect',
        slidesPerView : 1.6,
        initialSlide:0,


        // �����Ҫ��ҳ��
        pagination: {
            el: '.swiper-pagination',
        },

        // �����Ҫǰ�����˰�ť
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // �����Ҫ������
        //scrollbar: {
        //    el: '.swiper-scrollbar',
        //},
    })




});