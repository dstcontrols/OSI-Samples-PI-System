/* eslint-disable linebreak-style */
//  Need to install the karma-cli package
//      npm install -g karma-cli
//  To run the test:  karma start

// Increase timeout interval for longer running http calls.
// jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

describe('AppComponent', function() {
  const piWebAPIUrl = '';
  const assetServer = '';
  const piServer = '';
  const userName = '';
  const userPassword = '';
  const authType = '';

  beforeEach(module('myApp'));

  let http;
  let flush;

  /**
   * Configure the container for the http service.
   */
  beforeEach(function() {
    const i = angular.injector(['ng']);
    const rs = i.get('$rootScope');
    http = i.get('$http');

    flush = function() {
      rs.$apply();
    };

    module('myApp', function($provide) {
      $provide.value('$http', http);
      $provide.value('$rootScope', rs);
    });
  });

  /**
   * Configure the rootScope container.
   */
  beforeEach(inject(function($controller, $rootScope) {
    rootScope = $rootScope;
    scope = $rootScope.$new();
    controller = $controller('AppController', { $scope: scope });
  }));

  /**
   * Test the createDatabase method.
   */
  it('createDatabase should return a status code of 201 when creating a new database', done => {
    let returnCode = 0;
    returnCode = scope.createDatabase(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(201);
      done();
    });
    flush();
  });

  /**
   * Test the createCategory method.
   */
  it('createCategory should return a status code of 201 when creating a new category', done => {
    let returnCode = 0;
    returnCode = scope.createCategory(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(201);
      done();
    });
    flush();
  });

  /**
   * Test the createTemplate method.
   */
  it('createTemplate should return a status code of 201 when creating a new template', done => {
    let returnCode = 0;
    returnCode = scope.createTemplate(
      piWebAPIUrl,
      assetServer,
      piServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(201);
      done();
    });
    flush();
  });

  /**
   * Test the createElement method.
   */
  it('createElement should return a status code of 200 when creating a new element', done => {
    let returnCode = 0;
    returnCode = scope.createElement(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(200);
      done();
    });
    flush();
  });

  /**
   * Test the writeSingleValue method.
   */
  it('writeSingleValue should return a status code of 202 when writing a single value', function(done) {
    let returnCode = 0;
    returnCode = scope.writeSingleValue(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(202);
      done();
    });
    flush();
  });

  /**
   * Test the writeSetOfValues method.
   */
  it('writeSetOfValues should return a status code of 202 when writing a set of values', function(done) {
    let returnCode = 0;
    returnCode = scope.writeSetOfValues(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(202);
      done();
    });
    flush();
  });

  /**
   * Test the updateAttributeValue method.
   */
  it('updateAttributeValue should return a status code of 204 when updating an attribute value', function(done) {
    let returnCode = 0;
    returnCode = scope.updateAttributeValue(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(204);
      done();
    });
    flush();
  });

  /**
   * Test the readSingleValue method.
   */
  it('readSingleValue should return a status code of 200 when reading a single value', function(done) {
    let returnCode = 0;
    returnCode = scope.readSingleValue(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(200);
      done();
    });
    flush();
  });

  /**
   * Test the readSetofValues method.
   */
  it('readSetOfValues should return a status code of 200 when reading a set of values', function(done) {
    let returnCode = 0;
    returnCode = scope.readSetOfValues(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(200);
      done();
    });
    flush();
  });

  /**
   * Test the reducePayloadWithSelectedFields method.
   */
  it('reducePayloadWithSelectedFields should return a status code of 200 when reducing payload with selected fields', function(done) {
    let returnCode = 0;
    returnCode = scope.reducePayloadWithSelectedFields(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(200);
      done();
    });
    flush();
  });

  /**
   * Test the doBatchCall method.
   */
  it('doBatchCall should return a status code of 207 when performing a batch call', function(done) {
    let returnCode = 0;
    returnCode = scope.doBatchCall(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(207);
      done();
    });
    flush();
  });

  /**
   * Test the deleteElement method.
   */
  it('deleteElement should return a status code of 204 when deleteing the element', function(done) {
    let returnCode = 0;
    returnCode = scope.deleteElement(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(204);
      done();
    });
    flush();
  });

  /**
   * Test the deleteTemplate method.
   */
  it('deleteTemplate should return a status code of 204 when deleteing the template', function(done) {
    let returnCode = 0;
    returnCode = scope.deleteTemplate(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(204);
      done();
    });
    flush();
  });

  /**
   * Test the deleteCategory method.
   */
  it('deleteCategory should return a status code of 204 when deleteing the category', function(done) {
    let returnCode = 0;
    returnCode = scope.deleteCategory(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(204);
      done();
    });
    flush();
  });

  /**
   * Test the deleteDatabase method.
   */
  it('deleteDatabase should return a status code of 204 when deleteing the database', function(done) {
    let returnCode = 0;
    returnCode = scope.deleteDatabase(
      piWebAPIUrl,
      assetServer,
      userName,
      userPassword,
      authType
    );
    returnCode.then(function(result) {
      expect(result).toEqual(204);
      done();
    });
    flush();
  });
});
