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
					componentObj.methods.changeImage();
					$(window).resize(function(){
						componentObj.methods.resize();
					});
					componentObj.methods.menu();
				},
				changeImage: function(){
					var clubes = ["Atlas", "Chivas", "Mty", "Qro", "Santos"];
					var home = "home";
					var away = "away";
					var cambio = false;
					setInterval(function(){
						$(".landing-thumbs").each(function(i, val){
						var imagen1 = $(this).find("img").get(0);
						var imagen2 = $(this).find("img").get(1);
						var imagen3 = $(this).find("img").get(2);
						var imagen4 = $(this).find("img").get(3);
						$(imagen1).attr("src",urlIndepth+"images/"+clubes[i].toLowerCase()+"/detalles/"+clubes[i]+"_"+((cambio)?home:away)+"1.jpg");
						$(imagen2).attr("src",urlIndepth+"images/"+clubes[i].toLowerCase()+"/detalles/"+clubes[i]+"_"+((cambio)?home:away)+"2.jpg");
						$(imagen3).attr("src",urlIndepth+"images/"+clubes[i].toLowerCase()+"/detalles/"+clubes[i]+"_"+((cambio)?home:away)+"3.jpg");
						$(imagen4).attr("src",urlIndepth+"images/"+clubes[i].toLowerCase()+"/detalles/"+clubes[i]+"_"+((cambio)?home:away)+"4.jpg");
					});	
					cambio = (cambio)?false:true;
					}, 5000);
				},
				menu: function(){
					$('#atlas').waypoint(componentObj.methods.menuChange);
					$('#chivas').waypoint(componentObj.methods.menuChange);
					$('#mty').waypoint(componentObj.methods.menuChange);
					$('#qro').waypoint(componentObj.methods.menuChange);
					$('#santos').waypoint(componentObj.methods.menuChange);
					$("#comments").waypoint(function(direction){
						if(direction === "down"){
							$("#puma-menu").fadeOut("fast");
						}else{
							$("#puma-menu").fadeIn("fast");
						}
					});
				},
				menuChange: function(direction){
					var menuName = "#"+$(this).data("menu");
					if(menuName == "#atlas-menu"){
						if(direction == "down"){
							$("#puma-menu").fadeIn("fast");
						}else{
							$("#puma-menu").fadeOut("slow");
						}
					}
					$(".equipos-menu").removeClass("active");
					$(menuName).addClass("active");
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
								componentObj.methods.showHome(el, this, nombre);
							}, 
							function(){
								componentObj.methods.showAway(el, this, nombre);
						});
						$(this).find("img").focus(
							function(){
								componentObj.methods.showHome(el, this, nombre);
							}, 
							function(){
								componentObj.methods.showAway(el, this, nombre);
						});
					});
				},
				showHome: function(el, img, nombre){
					$(el).css({
						"background-color":"rgba(155,175,61,0.8)"
					});
					$(img).attr("src",urlIndepth+"images/portada/uniformes/"+nombre+"_away.png");
				},
				showAway: function(el, img, nombre){
					$(el).css({
						"background-color":"transparent"
					});
					$(img).attr("src",urlIndepth+"images/portada/uniformes/"+nombre+"_home.png");
				}
				
			}
		};
		return componentObj;
	};	
})(jQuery);