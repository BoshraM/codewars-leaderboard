export function populateDropdown(languages) {
  const select =
    document.getElementById("language-select");

  select.innerHTML =
    '<option value="overall">Overall</option>';

  languages.forEach(language => {
    const option =
      document.createElement("option");

    option.value = language;
    option.textContent = language;

    select.appendChild(option);
  });
}