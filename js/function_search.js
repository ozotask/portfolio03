$(function(){
	//	개별 동작 ==================================//

	//	분리배출 리스트 썸네일
	$('.recycle-list>li>a').on('click',function(evt){
		evt.preventDefault();
		let nowIdx = 0;
		nowIdx = $('.recycle-list>li>a').index(this);
		console.log(nowIdx)
		$('.recycle-list-page').show();
		$('.recycle-list-page>li').eq(nowIdx).show().siblings().hide();
		$('body').addClass('hidden')
	});
	
	$('.recycle-list-page .close-btn').on('click',function(evt){
		evt.preventDefault();
		$('.recycle-list-page').hide();
		$('body').removeClass('hidden');
	});
});