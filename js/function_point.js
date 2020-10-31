$(function(){
	//	개별 동작 ==================================//
	$('body').addClass('hidden');
	//	기본값
	$('.brand-campaign__pagination').hide();
	$('.quiz-answer__wrong').hide();
	$('.quiz-answer__correction').hide();

	//	메뉴 타이틀 on/off
	$('.menu-title>h3').on('click',function(){

		var nowIdx = $('.menu-title>h3').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.top-menu').eq(nowIdx).show().siblings().hide();

		$('.quiz-answer__choice').show();
		$('.quiz-answer__wrong').hide();
		$('.quiz-answer__correction').hide();
		$('.quiz-container>.title').text('정답은?');
	});

	//	my point - 적립내역/사용내역
	$('.sub-menu-title span').on('click',function(){
		$(this).addClass('on').siblings().removeClass('on');

		var nowIdx = $('.sub-menu-title span').index(this);
		$('.history-list>ol').eq(nowIdx).show().siblings().hide();
	});

	
	//	OX 퀴즈 - 정답 클릭
	$('.quiz-answer__choice span').eq(0).on('click',function(){
		$('.quiz-answer__choice').hide();
		$('.quiz-answer__correction').show();

		$('.quiz-container>.title').text('정답입니다!');
	});
	$('.quiz-answer__choice span').eq(1).on('click',function(){
		$('.quiz-answer__choice').hide();
		$('.quiz-answer__wrong').show();
		$('.quiz-container>.title').text('오답입니다..');
	});

	//	다시쓰기 - 적립 내역 자세히보기
	$('.more-history').on('click',function(){
		$('.menu-title>h3').eq(0).addClass('on').siblings().removeClass('on');
		$('.top-menu').eq(0).show().siblings().hide();
	});
});