$(function(){
	//	개별 동작 ==================================//
	//	팁 슬라이드 동작
	let nowIdx = 0;
	const slideFn = function(){

		if(nowIdx < 2){
			nowIdx++
		}else{
			nowIdx = 0
		}
		$('.tips').children('li').eq(nowIdx).fadeIn(1400).siblings().fadeOut(1400)
	};
	slideFn();
	setInterval(slideFn,6000)

});