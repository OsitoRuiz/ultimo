this.logueado=false;

$("#entrar").click(function () {
	// body...
	if($("#usuario").val()=="JORGE" && $("#contrasena").val()=='123'){
		logueado=true;
	 if (logueado==true) {
			window.location= "./Pages/inicio.html";
		}
	}else{
		swal.fire('ERROR');
	}
});

window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});

$("#entrada").click(function(){
	window.location="../index.html";
});

$("#galeria").click(function(){
	window.location="./galeria.html";
});

$("#Retorno").click(function(){
	window.location="./inicio.html";
});

$("#pdf").click(function(){
	window.location="./pdf.html";
});




