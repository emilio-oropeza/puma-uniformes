(function($){
	$.fn.uniformes = function(options){
		return this.each(function() {
			var element = $(this);						
			if (element.data('uniformes')) return;
			var myplugin = new Uniformes(this, options);
			element.data('uniformes', myplugin);
			element.data('uniformes').methods.init();			
		});
	};
	
	var Uniformes = function(target, options ){
		var componentObj = {
			methods:{
				init:function(){
					componentObj.methods.select();
					componentObj.methods.resize();
					$(window).resize(function(){
						componentObj.methods.resize();
					});
				},
				resize: function(){
					if($(window).width() > 768){
						$("#portada > .container").addClass("abs-center");
					}else{
						$("#portada > .container").removeClass("abs-center");
					}
				},
				select:function(){
					$(".uniformes").each(function(){
						var el = this;
						var nombre = $(this).data("equipo");
						$(this).find("img").hover(
							function(){
								$(el).css({
									"background-color":"rgba(155,175,61,0.8)"
								});
								$(this).attr("src",urlIndepth+"images/portada/uniformes/"+nombre+"_away.png");
							}, function(){
								$(el).css({
									"background-color":"transparent"
								});
								$(this).attr("src",urlIndepth+"images/portada/uniformes/"+nombre+"_home.png");
						});
					});
				}
			}
		};
		return componentObj;
	};	
})(jQuery);