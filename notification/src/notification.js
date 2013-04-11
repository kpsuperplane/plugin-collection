(function ($) {
	$.extend({
        notification: function (text,type) {
            var settings = $.extend({
				'type': 'default',
				'text': 'There is a notification'
			}, text,type);
			var bgcolor = "#06C";
			var bordercolor = "#014991";
			if(settings.type == 'success'){
				bgcolor = "#0D9101";
				bordercolor = "#075400";
			}else if(settings.type == 'warning'){
				bgcolor = "#B3B30E";
				bordercolor = "#919101";
			}else if(settings.type == 'error'){
				bgcolor = "#C00";
				bordercolor = "#6F0000";
			}
			var zind = 1000;
			var count = 0;
			$('.notification').each(function(){
				count++;
				if($(this).css('z-index') >= zind){
					zind = $(this).css('z-index')+1;
				}
			});
			var thenotif = $('<div>').addClass('notification').css({'background':bgcolor,'border-bottom-color':bordercolor,'display':'none','z-index':zind}).html('<span style="color:'+bordercolor+'">'+(count+1)+"</span> "+settings.text+" (click to dismiss)");
			var thespacer = $('<div>').attr('id','notification-spacer').css({'height':'40px','display':'none'});
			thenotif.prependTo('body');
			thenotif.slideDown(300);
			var thisspacer = false;
			if($('#notification-spacer').length <= 0){
				thespacer.prependTo('body');
				thespacer.slideDown(300);
				thisspacer = true;
				$('#top-shadow, .navdrop-container').animate({top:'+=40px'},300);
			}
			thenotif.click(function(){
				if(thisspacer){
					$('#top-shadow, .navdrop-container').animate({top:'-=40px'},300);
				}
				thenotif.slideUp(300,function(){thenotif.remove();thespacer.remove();});
				thespacer.slideUp(300);
			});
        }
    });
})(jQuery);