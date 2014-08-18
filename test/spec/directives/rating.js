'use strict';

describe('Directive: rating', function () {

  // load the directive's module
  beforeEach(module('pageDemoApp'));

  var element,
    scope, template, controller;

  beforeEach(inject(function ($rootScope, $compile, $httpBackend) {
    $httpBackend.whenGET("/views/rating.html").respond("");
    $httpBackend.expectGET("/views/rating.html");
    element = angular.element('<div rating="4.5"></div>');
    $compile(element)($rootScope.$new());
    $rootScope.$digest();
    controller = element.controller();
    scope = element.isolateScope() || element.scope();
    console.log(element);
  }));

  it('should return true', inject(function () {
    expect(scope.rated(4)).toBe(true);
    expect(scope.rated(5)).toBe(false);
    expect(scope.half(4)).toBe(true);
  }));
});


