function listelement() {
	var elem = document.getElementById('people')
	var list = elem.getElementsByTagName('li')
	//alert(list[0].innerHTML)
	
	document.getElementById("result1").innerHTML="Results: "+"<br>"+list[0].innerHTML;
}
