function search() {
	'use strict';

	var name = document.getElementsByName('name')[0].value;

	document.getElementById('status').innerHTML = 'Apdorojama užklausa...<div class="clear"></div>';

	var ajax = new XMLHttpRequest();

	ajax.open('GET', 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + name, true);
	ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

	ajax.onreadystatechange = function() {
		if (ajax.readyState === 4 && ajax.status === 200) {
			var value = JSON.parse(ajax.responseText);

			var result = '';

			if (value === false) {
				result += 'Nerasta';
			} else {
				for (i in value) {
					result += 'Reikšmė: ' + value;
				}
			}

			document.getElementById('status').innerHTML = result;
		}
	}

	ajax.send();
}