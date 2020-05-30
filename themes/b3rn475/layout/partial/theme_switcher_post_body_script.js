(function () {
  if (!localStorage) {
    return;
  }
  var switcher = document.querySelector(".theme-switcher > input");
  if (!switcher) {
    return;
  }
  switch (localStorage.getItem("theme")) {
    case "dark-theme":
      switcher.checked = true;
      break;
    case "light-theme":
    default:
      switcher.checked = false;
      break;
  }
  switcher.addEventListener('change', function () {
    localStorage.setItem("theme", switcher.checked ? "dark-theme" : "light-theme");
    reloadTheme();
  });
})();
