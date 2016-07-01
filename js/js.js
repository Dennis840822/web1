$(document).ready(function() {
		center()

		// $(document).ready(function() {
		// 	pos = $(window).height()/2-$(".nav").height()/2$(.nav).css("top",pos)
		// $(window).resize(function() {
		// 	pos = $(window).height()/2-$(".nav").height()/2$(".nav").css("top",pos)
		// })
		function center(){
                pos=$(window).height()/2-$(".nav").height()/2
                $(".nav").css("top",pos)
            }
			$(".nav li:eq(0)").click(function() {
				$("html,body").animate({"scrollTop":$(".one").offset().top})
			})
			$(".nav li:eq(1)").click(function() {
				$("html,body").animate({"scrollTop":$(".two").offset().top})
			})
			$(".nav li:eq(2)").click(function() {
				$("html,body").animate({"scrollTop":$(".three").offset().top})
			})
			$(".nav li:eq(3)").click(function() {
				$("html,body").animate({"scrollTop":$(".four").offset().top})
			})

		// var num_li = $("li").length
		// for (var i = 0; i < num_li; i++) {
		// 	$(".nav li:eq("+i+")").click({id:i},function(e){page = e.data.id+1
		// 		$("html,body").animate({"scrollTop":$(".one"+page).offset().top})
		// 	})
		// }

		$(".gotop").click(function(){
                $("html,body").stop()
                $("html,body").animate({"scrollTop":"0"})
                n=1
            })
		$(".gotop").fadeOut(0)
		$(window).scroll(function() {
			if ($(window).scrollTop()>=$(".two").offset().top) {$(".gotop").fadeIn()} else {$(".gotop").fadeOut()}
		})
		})