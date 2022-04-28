function openNav() {
  document.getElementById("navbar-drawer").style.width = "200px";
}

function closeNav() {
  document.getElementById("navbar-drawer").style.width = "0";
}

// This function adds the active class to the currently opened page - used as visual indicator for the user
$(function () {
  let currentPage = window.location.pathname.split("/").slice(-1)[0];
  $('#navbar-top')
    .find('a')
    .each(function () {
      $(this).toggleClass('active', $(this).attr('href') == currentPage);
  });
});