/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("navbar-drawer").style.width = "225px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("navbar-drawer").style.width = "0";
}

$(function () {
  let currentPage = window.location.pathname;
  $('#navbar-top').find('a').each(function () {
    $(this).toggleClass('active', "/" + $(this).attr('href') == currentPage);
  });
});