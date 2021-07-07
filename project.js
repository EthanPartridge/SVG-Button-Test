	function change() {
		var input = document.test.elements["savereport"];

		if (input.value == "false") {
			document.test.elements["savereport"].value = "true";
			document.getElementById("check").style.background = "url(redCheckButtonForKickit.svg)";
		} 
		else if (input.value == "true") {
			document.test.elements["savereport"].value = "false";
			document.getElementById("check").style.background = "url(checkButtonForKickit.svg)";

		}
		document.getElementById("displayBool").textContent = input.value;
	}