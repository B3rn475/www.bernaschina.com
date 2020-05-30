function reloadTheme() {
  switch (localStorage.getItem("theme")) {
    case "dark-theme":
      document.documentElement.className = "dark-theme";
      break;
    case "light-theme":
    default:
      document.documentElement.className = "light-theme";
      break;
  }
}
if (localStorage) {
  reloadTheme();
}
