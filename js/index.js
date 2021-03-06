//select//
$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 400;

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });

});


//slider//
$(document).ready(function(){
  $('.hero-slider').slick({
     arrows: false,
     speed: 2000,
     easing: 'ease-in-out',
     initialSlide: 0,
     autoplay: true,
     autoplaySpeed: 2000,
     adaptiveHeight: false
  });
});

//burger//
$(document).ready(function() {
	$('.burger-icon').click(function(){
        $('.burger-icon').toggleClass('open-menu');
        $('.burger').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
	});
});

$('.menu__item').on('click', function(){
  $('.burger, .burger-container, .burger-icon').removeClass('open-menu');
});

$(document).ready(function(){
  $(".search-btn").click(function(){
    $(".search-container, .search-input").toggleClass("active");
    $("input[type='text']").focus();
  });

});







