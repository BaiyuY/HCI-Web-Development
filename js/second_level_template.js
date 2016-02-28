(function () { var body= $('.menu');
	var side=$('nav.menu-side');
	var toggle = $('a.menu-toggle')
    $('.menu-toggle').bind('click',function(){
        body.toggleClass('menu-open');
        side.toggleClass('menu-open');
        toggle.toggleClass('menu-open');

        return false;
        
    })
    })();


document.back_to_hm(function(){
    $(".logo").click(function(){
    	window.location.href = "homepage.html";// redirect back to homepage
    });
});