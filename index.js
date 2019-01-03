//salesforce credentials
const username = 'username@salesforce.com';
const password = 'password';
const loginUrl = 'https://my-org-url.salesforce.com';

//3-d party modules
var sf = require('node-salesforce');
var express = require('express');

var app = express();

//set port
app.set( 'port', ( process.env.PORT || 3000 ));

//set file extension for front-end
app.set('view engine', 'ejs');

app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
});


app.get("/", (req, res)=> {
  var conn = new sf.Connection({
    loginUrl : loginUrl
  });

  conn.login(username, password, function(loginError, userInfo) {
    if (loginError) { return console.error('loginError'); }

    conn.query("SELECT Id, Name FROM Account LIMIT 3", function(queryErr, queryResult) {
      if (queryErr) { return console.error('queryErr'); }
        res.render("index", { records: queryResult.records });
        
        conn.logout(function(err) {
          if (err) { return console.error(err); }
          console.log('logout');
          // now the session has been expired.
        });

      });
  });
})
