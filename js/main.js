transparent = true;

$(document).ready(function() 
{
    //img overlays
    $('.container .column, .container .columns').on('mouseover', function()
    {		
        var overlay = $(this).find('.overlay-wrp');
        var content = $(this).find('.overlay-content');
        var top = parseInt(overlay.height() * 0.5 - 4);

        overlay.stop(true,true).fadeIn(300);
        content.stop().animate({'top': top}, 400);
        
    }).on('mouseleave', function()
    {
        var overlay = $(this).find('.overlay-wrp');
        var content = $(this).find('.overlay-content');
        var top = parseInt(overlay.height() * 0.2);
        
        content.stop().animate({'top': top}, 100);
        overlay.fadeOut(200);
    });
    
	if ($('#homepage') != null) {		
		//loader line fixer
		setTimeout(function()
		{
			$('#homepage .logo, #homepage .line, nav, #slidecaption, #slidebutton').animate({'opacity': '1'}, 400);
		}, 400);        
	}	    
});

$(document).scroll(function() {    
    if( $(this).scrollTop() > 260 ) {        
        if(transparent) {            
            transparent = false;
            $('nav[role="navigation"]').removeClass('navbar-transparent');			
        }
    } else {
        if( !transparent ) {            
            transparent = true;			
            $('nav[role="navigation"]').addClass('navbar-transparent');
        }
    }
});