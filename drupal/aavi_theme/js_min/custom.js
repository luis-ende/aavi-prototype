function theme_home(){jQuery(".flexslider").flexslider({animation:"slide"})}function theme_menu(){jQuery("#main-menu").smartmenus(),jQuery(".navbar-toggle").click(function(){jQuery(".region-primary-menu").slideToggle()}),jQuery(window).width()<767&&jQuery(".region-primary-menu li a:not(.has-submenu)").click(function(){jQuery(".region-primary-menu").hide()})}jQuery(document).ready(function(e){theme_home(),theme_menu()});