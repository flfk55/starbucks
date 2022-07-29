/* SEARCH */
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
})

searchInputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
})

/* BADGES */
const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
    console.log(window.scrollY);

    if(window.scrollY > 500) {
        //gsap.to(요소, 지속시간(애니메이션이 처리되는 시간), 옵션);

        //배지 숨기기
        //badgeEl.style.display = 'none'
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });

        //버튼 보이기
        gsap.to(toTopEl, .2, {
            x: 0
        })
    } else {
        // 배지 보이기
        //badgeEl.style.display = 'block'
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })

        //버튼 숨기기
        gsap.to('#to-top', .2, {
            x: 100
        })
    }
},300));

toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0 // scrollToPlugin이 있어야지만 동작, 최상단으로 이동
    });
})

const fadeEls = document.querySelectorAll('.visual .fade-in');
 
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1 ) * .7, //지연시간, 순차적으로 진행하기 위해 다음과 같이 지정 ex. 0.7, 1.4, 2.1, 2.7
        opacity: 1,
    })
})
 
/* SWIPER */
//new Swiper(선택자, 옵션)
 new Swiper('.notice-line .swiper', {
    direction: 'vertical', //슬라이드 방향
    autoplay: true,
    loop: true
 });

 new Swiper('.promotion .swiper', {
    slidesPerView: 3, 
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //슬라이드 가운데 위치
    loop: true,
    autoplay: {
        delay: 5000, //5초에 한번씩 슬라이드
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true, // pagination 클릭 할 수 있는지 
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    },
 })

 new Swiper('.awards .swiper', {
    autoplay:true,
    loop: true,
    spaceBetween: 30, //슬라이드 사이 여백
    slidesPerView: 5, 
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    },
 })

 const promotionEl = document.querySelector('.promotion');
 const promotionToggleBtn = document.querySelector('.toggle-promotion');
 let isHidePromotion = false; 
 promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion) {
        promotionEl.classList.add('hide');
    } else {
        promotionEl.classList.remove('hide');
    }
 })

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
// `.toFixed()`를 통해 반환된 '문자 데이터'를,
// `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floathingObject(selector, delay, size) {
    // gsap.to(요소,시간,옵션)
    gsap.to(
        selector, // 선택자
        random(1.5, 2.5), { //애니메이션 동작 시간
        y:size, // y축으로 이동
        repeat: -1, // 반복 횟수, -1은 무한
        yoyo: true, // 애니메이션 진행 방향을 반복 될 때 마다 변경하는 옵션, animation-direction: alternate 속성과 동일
        ease: Power1. easeInOut,
        delay: random(0, delay),
                
    })
 }
 floathingObject('.floating1', 1, 15);
 floathingObject('.floating2', .5, 15);
 floathingObject('.floating3', 1.5, 20);


// 스크롤 이벤트 
// 요소 찾기
const spyEls = document.querySelectorAll('section.scroll-spy')

// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가, 스크롤 매직 라이브러리 특정한 옵션을 감시하는 메소드 
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 선택
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})

//현재 년도 자동 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
