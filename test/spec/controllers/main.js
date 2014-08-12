'use strict';

describe('Directive: rating', function () {

  // load the directive's module
  beforeEach(module('pageDemoApp'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
     });
  }));

  it('should sort elements', inject(function ($compile) {
    var mockedArray = [
      {ratings:{
        number : 10
      }},
      {ratings:{
        number : 5
      }},
      {ratings:{
        number : 65
      }},
      {ratings:{
        number : 23
      }},
    ];
    scope.data = mockedArray;

    for(var i=0; i<3; i++){
      expect(scope.data[i].ratings.number).toBeGreater(scope.data[i+1].ratings.number);
    }
  }));
});
