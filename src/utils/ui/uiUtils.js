export function handleUnCheckFavorites(value) {
  document.querySelectorAll(".favorites__field").forEach((element) => {
    if (element.id !== value || value === "all") {
      element.checked = "";
    }
  });

  document.querySelector("#fahrenheit").checked = "";
  document.querySelector("#celcius").checked = "checked";
};