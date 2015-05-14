$(document).ready(function() {
	$('.loader').hide();
    var load = 0;
    $(window).scroll(function() {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        	$('.loader').show();
            load++;
            $.post("ajax.php",{load:load}, function(data){
            	$('.listing-section').append(data);
            	$('.loader').hide();
            });
        }
    });
});