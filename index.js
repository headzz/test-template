let chosen = "pt";

const changePage = (actualPage, nextPage, language) => {
  if (language) {
    chosen = language;
  }

  window.scroll(0, 0);

  const hidePage = document.getElementById(actualPage);
  hidePage.style.display = "none";

  const showPage = document.getElementById(nextPage);
  showPage.style.display = "block";
};
