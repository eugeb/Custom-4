$(function(){
    //CONTACT FORM AJAX SUBMIT
    $('#formulario_condiciones').submit(function(){


		$.ajax({
			url:'si_no.php',
			type : 'POST',
			dataType: 'json',
			data: $(this).serialize(),
			success: function(data){
				if(data.error){
					alertify.error("Error!!! datos no enviados...");
				}else {
					 //alertify.success("Success notification");
					//window.location = "tos.php";
					$(location).attr('href','subirimagenes.php');
				}
				
			}
		})
        return false;
    })


})