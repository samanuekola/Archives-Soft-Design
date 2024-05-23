// collapse section
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}



(function ($) {
	'use strict';

	// testimonial-wrap
	if ($('.testimonial-wrap').length !== 0) {
		$('.testimonial-wrap').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 6000,
			responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}, {
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	// navbarDropdown
	if ($(window).width() < 992) {
		$('#navbar .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}

	$(window).on('scroll', function () {
		//.Scroll to top show/hide
		if ($('#scroll-to-top').length) {
			var scrollToTop = $('#scroll-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 200) {
				scrollToTop.fadeIn(200);
			} else {
				scrollToTop.fadeOut(100);
			}
		}
	});
	// scroll-to-top
	if ($('#scroll-to-top').length) {
		$('#scroll-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	}

	// portfolio-gallery
	if ($('.portfolio-gallery').length !== 0) {
		$('.portfolio-gallery').each(function () {
			$(this).find('.popup-gallery').magnificPopup({
				type: 'image',
				gallery: {
					enabled: true
				}
			});
		});
	}

	// Counter
	if ($('.counter-stat').length !== 0) {
		$('.counter-stat').counterUp({
			delay: 10,
			time: 1000
		});
	}

})(jQuery);


//portfolio


    const buttons = document.querySelectorAll('.btns')
    const storeItems = document.querySelectorAll('.store-item')
    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter
            storeItems.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = 'block'
                }
                else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            })
        })
    })

	const readmore=document.querySelectorAll(".read-more")
	const text=document.querySelectorAll(".learn-more")
	for(let i=0;i<text.length;i++){
		readmore[i].addEventListener("click",function(e){
			e.preventDefault()
			if(readmore[i].innerHTML=="Read more"){
				text[i].style.display="block"
				readmore[i].innerHTML="Readless"
				console.log(i)
			}
			else{
				text[i].style.display="none"
				readmore[i].innerHTML="Read more"
			}
			
		})
	}
	
