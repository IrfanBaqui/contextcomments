'use strict';


angular.module('contextcommentsApp')
	.controller('contentCtrl', function($scope, $http) {
    $scope.title = '';
    $scope.body = '';
    $http.get('/api/content/title1').
      success(function(data, status, headers, config) {
        $scope.title+=data;
      }).
      error(function(data, status, headers, config) {
        console.log('error');
      });

    $http.get('/api/content/body1').
      success(function(data, status, headers, config) {
        $scope.body+=data;
      }).
      error(function(data, status, headers, config) {
        console.log('error');
      });

		$scope.content = {};
		var arr = ['<p id="" class=""><span class="" tabindex="" id="">So you’re a </span>parent, thinking about sending your 7-year-old to this rogue startup of a school you heard about from your friend’s neighbor’s sister. It’s prospective parent information day, and you make the trek to San Francisco’s South of Market neighborhood. You walk up to the second floor of the school, file into a glass-walled conference room overlooking a classroom, and take a seat alongside dozens of other parents who, like you, feel that public schools—with their endless bubble-filled tests, 38-kid classrooms, and antiquated approach to learning—just aren’t cutting it. </p>'];
		$scope.content.site = arr;
		$scope.t = '';

		$scope.highlight = function(e) {
		    $scope.t = (document.all) ? document.selection.createRange().text : document.getSelection();
		    console.log($scope.t.toString());
        $scope.hl('yellow');
		}

		document.onmouseup = $scope.highlight;
		if (!document.all) document.captureEvents(Event.MOUSEUP);

    var range, sel = window.getSelection();

    $scope.makeEditableAndHighlight = function(colour) {
      if (sel.rangeCount && sel.getRangeAt) {
          range = sel.getRangeAt(0);
      }
      document.designMode = "on";
      if (range) {
          sel.removeAllRanges();
          sel.addRange(range);
      }
      // Use HiliteColor since some browsers apply BackColor to the whole block
      if (!document.execCommand("HiliteColor", false, colour)) {
          document.execCommand("BackColor", false, colour);
      }
      document.designMode = "off";
    }

    $scope.hl = function(colour) {
      var range;
      if (window.getSelection) {
          // IE9 and non-IE
          try {
              if (!document.execCommand("BackColor", false, colour)) {
                  $scope.makeEditableAndHighlight(colour);
              }
          } catch (ex) {
              $scope.makeEditableAndHighlight(colour)
          }
      } else if (document.selection && document.selection.createRange) {
          // IE <= 8 case
          range = document.selection.createRange();
          range.execCommand("BackColor", false, colour);
      }
    }
	});
