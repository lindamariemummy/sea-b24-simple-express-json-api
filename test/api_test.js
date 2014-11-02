require("../server.js");
var chai = require('chai');
var chaihttp = require('chai-http');
chai.use(chaihttp);

describe('Simple JSON API', function() {

  it('should greet someone', function(){
    chai.request('http://localhost:3000').get('/Linda').end(function (err, res) {
     chai.expect(res).to.be.json;
   });
  });

  it('should send the local time', function(){
    chai.request('http://localhost:3000').get('/clock').end(function (err, res) {
      chai.expect(res).to.be.html;
    });
  });
});
