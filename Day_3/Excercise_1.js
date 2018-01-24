const dns = require('dns');
var w3 = dns.resolve4('www.mum.edu', function (err, addresses) {
  console.log(addresses);
});

