// set endpoint and your access key
endpoint = 'latest';
access_key = 'cb78031db0bd2804a418035df2808fbc';

// get the most recent exchange rates via the "latest" endpoint:
// define from currency, to currency, and amount
from = 'USD';
to = 'RUB';
amount = '1';

// execute the conversion using the "convert" endpoint:
$.ajax({
  url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key + '&from=' + from + '&to=' + to + '&amount=' + amount,
  dataType: 'jsonp',
  success: function (json) {}
});
// $(document).ready(function () {
//   $('.currensy').text(function ();

//   );

// });