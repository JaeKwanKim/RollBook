$(document).ready(function() {
    var str = "";
    $.getJSON("data/classinfo.json", function(data) {
	$.each(data, function() { 
	    str += "<tr><td>" + this.classname + "</td><td>" + this.profe + "</td><td>" + this.hp + "</td><td>" + this.email + "</td><td>" + this.intro + "</td></tr>";
	 });
         console.log(JSON.stringify(data));
	 $('#tablebody').html(str);
         $('#classinfo').html("<h1>정상출력</h1>");
    });
});
