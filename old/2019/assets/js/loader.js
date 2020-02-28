$(function() {
	var h = $(window).height();
	// $('#main_contents').css('display','none');
	$('#loader_bg, #loader_contents').height(h).css('display','block');
});
$(window).on("load",function(){
    $('#loader_bg').delay(1200).fadeOut(1200); //$('#loader-bg').fadeOut(800);でも可
    $('#loader_contents').delay(1200).fadeOut(800);
		// $('#main_contents').css('display', 'block');
});
