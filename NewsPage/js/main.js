// set endpoint and your access key
endpoint = 'latest';
access_key = 'cb78031db0bd2804a418035df2808fbc';

// define from currency, to currency, and amount
from = 'EUR';
to = 'GBP';
amount = '10';

// execute the conversion using the "convert" endpoint:
$.ajax({
  url: 'http://data.fixer.io/api/' + endpoint + '?access_key=' + access_key + '&from=' + from + '&to=' + to + '&amount=' + amount,
  dataType: 'jsonp',
  success: function (json) {

    // access the conversion result in json.result
    console.log(json);

  }
});