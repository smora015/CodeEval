/**
  This version of captwords() is usable in HTML 5.
**/

function captwords() {
	var fs ="";
	var elem = document.getElementById('capwords').value;
	//alert(elem);
	
	elem.split("<br>").forEach( function(line){
		if(line !== "") {
			var words = line.split(" ");
			
			for(var i = 0; i < words.length; ++i){
				var letter = words[i][0];
				if(letter <= 'z'&& letter >= 'a'){
					letter = String.fromCharCode(letter.charCodeAt()-32);
				}
				//alert("Caught: "+" \n "+letter+" in "+words[i]);
				fs = fs + letter + words[i].substr(1) + " ";
			}

			fs = fs + "<br>";
		}
	});

	document.getElementById("result").innerHTML="Results: "+"<br>"+fs;
}
