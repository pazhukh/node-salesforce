NodeJs-Salesforce App gets records from Salesforce and shows their.

Used Node and npm packages node-salesforce, express, ejs

To run app you need change constants in index.js file to your credentials and after this run "node index.js":
  const username = 'username@salesforce.com';
  const password = 'password';
  const loginUrl = 'https://my-org-url.salesforce.com';
