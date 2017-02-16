var request = require("request"),
    assert = require('assert'),
    helloWorld = require("../app.js"),

    base_url = "http://localhost:3000/";
    about_url = "http://localhost:3000/about";

describe("Hello World Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        //expect(response.statusCode).toBe(200);
        assert.equal(200, response.statusCode);
        done();
      });
    });

    it("returns Hello World", function(done) {
      request.get(base_url, function(error, response, body) {
        //expect(body).toBe("Hello World");
        assert.equal("Hello World", body);
        //helloWorld.closeServer();
        done();
      });
    });
    
    it("returns math", function(done) {
      request.get(base_url + 'math', function(error, response, body) {
        //expect(body).toBe("2');
        assert.equal("The answer is: 4", body, "The math test failed 1 + 1 = 2?");
        //helloWorld.closeServer();
        done();
      });
    });

    it("returns about", function(done) {
    	request.get(base_url+'about', function(error, response, body) {
        
        //expect(body).toBe("About");
        //assert.equal(200, response.statusCode);
        assert.equal("about", body, "The web page did not return 'about'.");
        helloWorld.closeServer();
        done();
      });
    });



  });
});

