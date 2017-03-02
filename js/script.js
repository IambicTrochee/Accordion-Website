$(document).ready(function($) {
	//Adapted from code by david@uniondesign.ca
	//http://uniondesign.ca/simple-accordion-without-jquery-ui/
	//Enables accordion
	$('#accordion').find('.accordion-toggle').click(function(){

    //Expand selected panel
    $(this).next().slideToggle('slow');

    //Hide the other panels
    $(".accordion-content").not($(this).next()).slideUp('fast');

    //Hide the toggle for current panel
    $(this).slideUp('fast');

    //Re-opens closed toggles
    $(".accordion-toggle").not($(this)).slideDown('fast');

    //Adapted from code by Davod Darnes on EnvatoTuts
    //https://webdesign.tutsplus.com/tutorials/quick-tip-add-a-formspree-form-to-your-static-sites--cms-23870
    //Enables Formspree and avoids posting email address in plaintext
    var contact =  document.getElementById('contactform');
    contact.setAttribute('action', 'https://formspree.io/' + 'sal' + 'lyluo' + 'ng.pu' + 'blic' + '@g' + 'mail' + '.' + 'com');

    });
});