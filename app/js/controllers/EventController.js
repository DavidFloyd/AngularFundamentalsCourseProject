'use strict';

eventsApp.controller('EventController', function EventController($scope, eventData, $log, $anchorScroll, $routeParams, $route) {

  $scope.event = $route.current.locals.event;

  $scope.upVoteSession = function(session) {
    session.upVoteCount++;
  };
  $scope.downVoteSession = function(session) {
    session.upVoteCount--;
  };
  $scope.sortOrder = 'name';

  $scope.scrollToSession = function() {
    $anchorScroll();
  };

  $scope.reload = function() {
    $route.reload();
  }



});