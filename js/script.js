//adapted from code by david@uniondesign.ca
//http://uniondesign.ca/simple-accordion-without-jquery-ui/

$(document).ready(function($) {
    $('#accordion').find('.accordion-toggle').click(function(){

      	//Expand or collapse this panel
    	$(this).next().slideToggle('slow');

      	//Hide the other panels
      	$(".accordion-content").not($(this).next()).slideUp('slow');

    	//Hide the toggle for current panel
     	$(this).slideUp('slow');

     	//Re-opens closed toggles
    	$(".accordion-toggle").not($(this)).slideDown('slow');

    });
});