
$(document).ready(function(){
	$('#employee-form').submit(function(event){
		event.preventDefault();
		var form = $('#employee-form').serialize();

		$.ajax({
			url: 'employee.php',
			type: 'POST',
			data: form,
			success: function(response){
				$('#message').html(response);
				$('#employee-form')[0].reset();
			}
		});
	});
});