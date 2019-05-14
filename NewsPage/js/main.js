$(function(){
	$.get('http://data.fixer.io/api/latest?symbols=USD,RUB', {'access_key': 'cb78031db0bd2804a418035df2808fbc'}, function(response){
		var RUB = '<span class="rub">' + 'EUR/RUB: ' + (response.rates.RUB) + '</span><br>';
		var USD = '<span class="usd">' + 'EUR/USD: ' + (response.rates.USD) + '</span>';
		$('.course-app').append(RUB);
		$('.course-app').append(USD);
		});
});