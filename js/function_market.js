$(function(){
	//	개별 동작 ==================================//

	//	메뉴 타이틀 on/off
	$('.menu-title>h3').on('click',function(){
		var nowIdx = $('.menu-title>h3').index(this);
		$(this).addClass('on').siblings().removeClass('on');
		$('.top-menu').eq(nowIdx).show().siblings().hide();

		$('.market-message-detail').hide();

		if(nowIdx == 3){
			$('.write-btn').hide();	
		}else if(nowIdx > 0){
			$('.write-btn').show();	
		}
	});

	//	즐겨찾기 버튼 on/off
	$('.favorites-btn').on('click',function(evt){
		evt.preventDefault();
		$(this).toggleClass('on');
	});

	//	필요해요 리스트 toggle
	$('.market-need__text-container').on('click',function(){
		var nowIdx = $('.market-need__text-container').index(this);
		$('.market-need>li').eq(nowIdx).toggleClass('on');
	});
	//	나눠요 리스트 toggle
	$('.market-donate__text-container').on('click',function(){
		var nowIdx = $('.market-donate__text-container').index(this);
		$('.market-donate>li').eq(nowIdx).toggleClass('on');
	});
	$('.market-donate__thumb').on('click',function(){
		var nowIdx = $('.market-donate__thumb').index(this);
		$('.market-donate>li').eq(nowIdx).toggleClass('on');
	});
	//	메세지 보내기
	$('.send-msg').on('click',function(){
		$('.menu-title>h3').eq(3).addClass('on').siblings().removeClass('on');
		$('.top-menu').eq(3).show().siblings().hide();
		$('.write-btn').hide();	
	});
	
	//	페이지네이션 on/off
	$('.market-need__pagination>li>a').on('click',function(evt){
		evt.preventDefault();
		if($(this).hasClass('list-no') == 1){
			$(this).parent('li').addClass('on').siblings().removeClass('on');
		}
	});
	$('.market-donate__pagination>li>a').on('click',function(evt){
		evt.preventDefault();
		if($(this).hasClass('list-no') == 1){
			$(this).parent('li').addClass('on').siblings().removeClass('on');
		}
	});

	//	찜리스트 즐겨찾기 동작
	$('.market-favorites-container .favorites-btn').addClass('on');
	$('.market-favorites-container .favorites-btn').on('click',function(evt){
		evt.preventDefault();
		
		var favoritesFirm = confirm('찜한 게시물을 삭제하시겠습니까?');
		if(favoritesFirm == true){
			$(this).parents('li').remove();
		}else{
			$(this).addClass('on');
		}
	});

	//	메세지함 동작
	$('.market-message-container>.market-message>li').on('click',function(){
		$('.market-message-detail').show();
		$('.new-icon').hide();
	});

	//	메세지 닫기
	$('.market-message-detail>.close-btn').on('click',function(){
		$('.market-message-detail').hide();
	});
});