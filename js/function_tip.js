$(function(){
	//	개별 동작 ==================================//

	//	기본값
	$('.brand-campaign__pagination').hide();

	//	메뉴 타이틀 on/off
	$('.menu-title>h3').on('click',function(){
		$(this).addClass('on').siblings().removeClass('on');
	});

	//	즐겨찾기 버튼 on/off
	$('.favorites-btn').on('click',function(evt){
		evt.preventDefault();
		$(this).toggleClass('on');
	});
	
	//	업사이클링 팁 - 페이지네이션 on/off
	$('.recycle-tip__pagination>li>a').on('click',function(evt){
		evt.preventDefault();
		if($(this).hasClass('list-no') == 1){
			$(this).parent('li').addClass('on').siblings().removeClass('on');
		}
	});
	//	브랜드 캠페인 - 페이지네이션 on/off
	$('.brand-campaign__pagination>li>a').on('click',function(evt){
		evt.preventDefault();
		if($(this).hasClass('list-no') == 1){
			$(this).parent('li').addClass('on').siblings().removeClass('on');
		}
	});

	//	업사이클링 팁 - 게시물 자세히보기 - 열기
	$('.recycle-tip__thumb').on('click',function(){
		$('.recycle-tip__article').show();
		$('body').addClass('hidden');
	});
	$('.recycle-tip__text-container').on('click',function(){
		$('.recycle-tip__article').show();
		$('body').addClass('hidden');
	});

	//	업사이클링 팁 - 게시물 자세히보기 - 닫기
	$('.recycle-tip__article>.close-btn').on('click',function(evt){
		evt.preventDefault();
		$('.recycle-tip__article').hide();
		$('body').removeClass('hidden');
	});

	//	브랜드 캠페인 - 게시물 자세히보기 - 열기
	$('.brand-campaign__thumb').on('click',function(){
		$('.brand-campaign__article').show();
		$('body').addClass('hidden');
	});
	$('.brand-campaign__text-container').on('click',function(){
		$('.brand-campaign__article').show();
		$('body').addClass('hidden');
	});

	//	브랜드 캠페인 - 게시물 자세히보기 - 닫기
	$('.brand-campaign__article>.close-btn').on('click',function(evt){
		evt.preventDefault();
		$('.brand-campaign__article').hide();
		$('body').removeClass('hidden');
	});

	//	업사이클링 팁 버튼 동작
	$('.menu-title>h3:first-child').on('click',function(){
		$('.brand-campaign__pagination').hide();
		$('.brand-campaign').hide();

		$('.recycle-tip').show();
		$('.recycle-tip__pagination').show();
	});
	//	브랜드 캠페인 버튼 동작
	$('.menu-title>h3:last-child').on('click',function(){
		$('.brand-campaign__pagination').show();
		$('.brand-campaign').show();

		$('.recycle-tip').hide();
		$('.recycle-tip__pagination').hide();
	});
});