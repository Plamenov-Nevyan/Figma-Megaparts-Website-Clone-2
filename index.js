$(document).ready(function(){
    $('.header-bottom').slideDown('slow').css({'display': 'flex'})
    setTimeout(() => {
        $('.home-badge').fadeIn('slow').css({'display': 'flex'})
        $('.badge-slide').each(function(){
            $(this).fadeIn('slow').css({'display': 'flex'})
        })
        initNavBadgesSlide()
    }, 1000);
    setTimeout(() => {
        $('.quick-search-section').show('slide', {direction: 'right'}, 1000, function(){
            $(this).css({'display': 'flex'})
        })
       
    }, 2000)
    initBigSlide()

   $(window).on('scroll', function(){
        if($(this).scrollTop() >= 160){
            $('.quick-search-section').css({'z-index': 0})
        }else {
            $('.quick-search-section').css({'z-index': 2})
        }
   })

    function initBigSlide(){
        let slideCount = $('.slide').length;
        let currentIndex = 0;
        $('.slide').hide();
        $('.active').show();
        $('.prev-slide').on('click', function () {
           currentIndex--;
           if (currentIndex < 0) {
              currentIndex = slideCount - 1;
           }
           showSlide(currentIndex);
        });
        $('.next-slide').on('click', function () {
           currentIndex++;
           if (currentIndex >= slideCount) {
              currentIndex = 0;
           }
           showSlide(currentIndex);
        });
        function showSlide(index) {
           $('.slide').hide().removeClass('active');
           $('.slide').eq(index).show().addClass('active');
        }
        showSlide(currentIndex);
    }

    function initNavBadgesSlide(){
        $('.badges-slide-links').slick()
    }
})