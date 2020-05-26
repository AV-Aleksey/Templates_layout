$(document).ready(function() {
	$("#form_send").submit(function() {
		$.ajax({
			type: "POST",
			url: "success.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val(" ");
			$("#form-alert").addClass('toggle-form-ok');
			$("body").css()
			$("#form_send").trigger("reset");
			$("#form-alert button").click(function(){
				$("#form-alert").removeClass('toggle-form-ok');
			})
		});
		return false;
	});

	const valid = new Validator(
		{
			id: 'form_send'
		}
	) 

});