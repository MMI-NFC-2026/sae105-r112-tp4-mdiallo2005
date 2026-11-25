// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");

accordeon.querySelectorAll("summary").forEach((summary) => {
  summary.addEventListener("click", () => {
    accordeon.querySelectorAll("details").forEach((details) => {
      if (details.querySelector("summary") !== summary) {
        details.open = false;
      }
    });
  });
});