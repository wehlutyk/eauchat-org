"use strict";

$(document).ready(function() {
  /*
   * Set handlers for hovering on menu items
   */
  var appsContainer = $('div#apps'),
      apps = appsContainer.find('ul.apps').children(),
      descriptionsContainer = $('#descriptions'),
      appAnchor;

  // Handler when mouse comes in
  var hoverIn = function() {
    var app = $(this).attr('data-app'),
        description = descriptionsContainer.find('div[data-description=' + app + ']');
    description.addClass('active');
  };

  // Handler when mouse goes out
  var hoverOut = function() {
    var app = $(this).attr('data-app'),
        description = descriptionsContainer.find('div[data-description=' + app + ']');
    description.removeClass('active');
  };

  for (var i = 0; i < apps.length; i++) {
    // Get the app name
    appAnchor = $(apps[i]).find('a');
    // Attach handlers
    appAnchor.hover(hoverIn, hoverOut);
  }

  /*
   * Load SVG images
   */
  $('#footer').load('/images/home-footer.svg', function() {
    var footer = $('#footer svg'),
        width = footer.attr('width'),
        height = footer.attr('height');
    footer.removeAttr('width');
    footer.removeAttr('height');
    footer.get(0).setAttribute('viewBox', '0 0 ' + width + ' ' + height);
    footer.find('.twinkle').removeAttr('style');
  });
  $('#side').load('/images/home-side.svg', function() {
    var side = $('#side svg'),
        width = side.attr('width'),
        height = side.attr('height');
    side.removeAttr('width');
    side.removeAttr('height');
    side.get(0).setAttribute('viewBox', '0 0 ' + width + ' ' + (10000 + +height));
    side.find('.twinkle').removeAttr('style');
  });
});
