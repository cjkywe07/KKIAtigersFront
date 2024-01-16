var swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    freeMode: true,
    watchOverflow: false, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정(false는 숨기지 않음)

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
