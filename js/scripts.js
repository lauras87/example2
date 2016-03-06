$(function(){

	// Instantiate MixItUp:

	$('#containerm').mixItUp();

});

$("#contact-us").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/laurasiegel10@gmail.com", 
      method: "POST",
      data: {
        name: $(form).find("input[name='name']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        message: $(form).find("textarea[name='message']").val()
      },
      dataType: "json"
success: function() {
        $("#submit-success").fadeIn();
        $("#contact-us").fadeOut();
      },
      error: function() {
        $("#submit-errors").fadeIn();        
      }
    });
  }
});