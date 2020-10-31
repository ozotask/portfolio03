$(function(){
	//	공통 기본값 ==================================//
	$('.search_firm').hide();
	$('form').hide();
	$('.search_popup').hide();

	//	사이드메뉴 동작 - 열기
	$('.side_menu_btn').on('click',function(evt){
		evt.preventDefault();
		$('aside').fadeIn();
		$('aside>.side_menu').stop().animate({
			left: 0
		},400)
	});
	//	사이드메뉴 동작 - 닫기
	$('aside .close_btn').on('click',function(){
		$('aside>.side_menu').stop().animate({
			left: -100 + "%"
		},400)
		$('aside').fadeOut();
	});
	$('aside .side_menu_bg').on('click',function(){
		$('aside>.side_menu').stop().animate({
			left: -100 + "%"
		},400)
		$('aside').fadeOut();
	});

	//	검색 팝업 동작 - 열기
	$('.search_open').on('click',function(evt){
		evt.preventDefault();
		$('form').show();
		$('.search_popup').show();
		$('.search_firm').show();
		$(this).hide();
	});
	//	검색 팝업 동작 - 닫기
	$('.search_popup>.search_popup_bg').on('click',function(){
		$('form').hide();
		$('.search_popup').hide();
		$('.search_firm').hide();
		$('.search_open').show();
	});
	//	검색 팝업 동작 - 최근 검색어 삭제
	$('.recent .recent-del').on('click',function(){
		$(this).parent().hide();
	});
	//	사진 검색 아이콘
	$('.photo_search_icon').on('click',function(){
		$('.photo-shot-page').show();
	});
	$('.photo-shot-page').on("click", function (e) {
        if ($(e.target).parents(".photo-shot-btn").size() == 0) {
            $('.photo-shot-page').hide();
        };
    });
	$('.photo-shot-btn>span').on('click',function(){
		$('.photo-result-page').show();
		$('body').addClass('hidden');
		$('section').addClass('hidden');

		$('.photo-shot-page').hide();
		$('.search_popup').hide();
		$('.search_firm').hide();
		$('.search_open').show();
	});

	$('.photo-result-page>.close-btn').on('click',function(){
		$('.photo-result-page').hide();
		$('.search_popup').hide();
		$('body').removeClass('hidden');
		$('section').removeClass('hidden');
	});
});