'use strict';

eventsApp.directive('upVote', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: '/templates/directives/UpVote.html',
    scope: {
      upVote: "&",
      downVote: "&",
      count: "="
    }
  }
})