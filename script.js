$(document).ready(function(){

	function r(x, y){
		return Math.floor(Math.random()*(y-x)+x)
	}

	function Pos(posx, posy, posz){
		this.posx = posx;
		this.posy = posy;
		this.posz = posz;
	}

	var tbp = [new Pos(20, 3, 1), new Pos(20, 5, 1), new Pos(20, 5.5, 1), new Pos(20, 1.8, 1), new Pos(20, 3.5, 1), new Pos(20, 1, 1)];
	// var tbp= [p(),p(),p(),p(),p()];
	$('.container').each(function(i){
		var posx = tbp[i].posx;
		$(this).css('transform', "rotate(" + r(-1, 1) + "deg)")
		.css("right", r(posx, posx + $(window).width()/75) +"vw");
	})
	function containerpos(){
		var contposy = 20;
		$('.container').each(function(i){
			var posy = tbp[i].posy;
			$(this)
			.css("top", contposy +"vh")
			contposy += ($("#textblock"+(i+1)).height()/posy);
			// contposy += tbp[i].posy * $(window).width()/100;
			console.log(contposy)
			// contposy += $("#textblock"+(i+1)).text().length
		})
	}
	setTimeout(containerpos(),200);
	$(window).resize(function(){
		containerpos();
	})
	// var lastScrollTop = 0;
	$(window).on('scroll', function() {
		st = $(this).scrollTop();
		// console.log(st);


		// if(st < lastScrollTop) {
		// 	console.log('up');
		// }
		// else {
		// 	console.log('down');
		// }
		// lastScrollTop = st;
	});


}())