var create_name = function(text) {
  // Convert text to lower case.
  var name = text.toLowerCase();
  
  // Remove leading and trailing spaces, and any non-alphanumeric
  // characters except for ampersands, spaces and dashes.
  name = name.replace(/^\s+|\s+$|[^a-z0-9&\s-]/g, '');
  
  // Replace '&' with 'and'.
  name = name.replace(/&/g, 'and');
  
  // Replaces spaces with dashes.
  name = name.replace(/\s/g, '-');
  
  // Squash any duplicate dashes.
  name = name.replace(/(-)+\1/g, "$1");
  
  return name;
};

var add_link = function() {
  // Convert the h5 element text into a value that
  // is safe to use in a name attribute.
  var name = create_name($(this).text());
  
  // Create a name attribute in the following div.toggle
  // to act as a fragment anchor.
  $(this).next('div.toggle').attr('name', name);
  
  // Replace the h5.toggle element with a link to the
  // fragment anchor.  Use the h5 text to create the
  // link title attribute.
  $(this).html(
    '<a href="#' + name + '" title="Reveal ' +
    $(this).text() + ' content">' +
    $(this).html() + '</a>');
};

var toggle = function(event) {
  event.preventDefault();

  // Toggle the 'expanded' class of the h5.toggle
  // element, then apply the slideToggle effect
  // to div.toggle siblings.
  $(this).
    toggleClass('expanded').
    nextAll('div.toggle').slideToggle('fast');
};

var remove_focus = function() {
  // Use the blur() method to remove focus.
  $(this).blur();
};

$(document).ready (function (){
  // Replace the '_toggle' class with 'toggle'. 
  $('._toggle').
    removeClass('_toggle').
    addClass('toggle');
    
  // Replace the '_expanded' class with 'expanded'. 
  $('._expanded').
    removeClass('_expanded').
    addClass('expanded');
  
  // Hide all div.toggle elements that are not initially expanded.
  $('h5.toggle:not(.expanded)').nextAll('div.toggle').hide();
  
  // Add a link to each h5.toggle element.
  $('h5.toggle').each(add_link);
  
  // Add a click event handler to all h5.toggle elements.
  $('h5.toggle').click(toggle);
  
  // Remove the focus from the link tag when accessed with a mouse.
  $('h5.toggle a').mouseup(remove_focus);
});


$(document).ready(function(){
  $("#hide").click(function(){
    $("div.toggle").hide();
	$("h5").removeClass('expanded');
  });
  $("#show").click(function(){
    $("div.toggle").show();
	$("h5").addClass("expanded");
  });
});

$(document).ready(function(){
  $("#hide1").click(function(){
    $("div.toggle").hide('fast');
	$("h5").removeClass('expanded');
});
  $("#show1").click(function(){
    $("div.toggle").show('fast');
	$("h5").addClass("expanded");
  });
});


$(document).ready(function(){
  $("#showhide").click(function(){
    $("div.toggle").toggle('fast');
	$("h5").toggleClass('expanded');
});

});
