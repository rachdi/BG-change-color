function change(){
	$("input").on("change",function(){

		var red = $("#red").val();
		console.log(red);
		var green =$("#green").val();
		console.log(green)
		var blue = $("#blue").val();
		console.log(blue);
		var alpha=$("#alpha").val();
		
		var redh = red.toString(16);
		var greenh = green.toString(16);
		var blueh = blue.toString(16);
		var alphah = alpha.toString(16);

		
		$("body").css("background-color","rgba("+redh+","+greenh+","+blueh+","+alphah+")");
		$("#valeur").html("<h1>"+redh+"/"+greenh+"/"+blueh+"/"+alphah+"</h1>");
	});
}
change();