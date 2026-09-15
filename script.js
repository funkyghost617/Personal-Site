let darkmode = document.cookie;
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  document.cookie = "darkmode=active";
  darkmode = document.cookie;
}

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  document.cookie = "darkmode=inactive";
  darkmode = document.cookie;
}

if (darkmode == "") disableDarkmode();
if (darkmode == "darkmode=active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode == "darkmode=inactive" ? enableDarkmode() : disableDarkmode();
})
