$(document).ready(function() {
  $('#fullpage').fullpage({
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'About','Experiences','Skills','Favourite','Contact'],
    showActiveTooltip: true,
    slidesNavigation: true,
      slidesNavPosition: 'bottom',
    controlArrows:true,
  });
  /* End of full page */

  $('#blog-container').load('blog.html');
  $('#skills-list').load('skills.html');

/* Get full year */  
  var full_date = new Date();
  var year_from_date = full_date.getFullYear();
  document.getElementById("year").innerHTML = year_from_date;  
/* End of Get Full Year */

});
