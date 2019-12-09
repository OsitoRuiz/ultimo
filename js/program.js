this.logueado = false;

$("#entrar").click(function(){
	if($("#usuario").val() == "yo" && $("#password").val() == "123"){
		logueado = true;
		if(logueado == true){
			window.location = "menu.html";
		}
		
		}else{
			Swal.fire('Error');
	}
});


$("#Retorno").click(function(){
	window.location="./menu.html";
});

$("#galeria").click(function(){
	window.location ="./pages/galeria.html"

});
$("#pdf").click(function(){
	window.location ="../pages/pdfs.html"
});
$("#salir").click(function(){
	window.location ="./index.html"
});
window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});
