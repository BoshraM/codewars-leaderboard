import { fetchUser } from "./modules/api/fetchUser.mjs";
import { renderTable } from "./modules/renderTable.mjs";
import { createLeaderboard } from "./modules/createLeaderboard.mjs";
import { getLanguages } from "./modules/getLanguages.mjs";
import { populateDropdown } from "./modules/populateDropdown.mjs";
import { parseUsernames } from "./modules/parseUsernames.mjs";

const form = document.getElementById("user-form");
const usernameInput = document.getElementById("usernames");
const errorMessage = document.getElementById("error-message");
const languageSelect = document.getElementById("language-select");

let users = [];

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const usernames = parseUsernames(usernameInput.value);
  if (usernames.length === 0) {
    errorMessage.textContent =
      "Please enter at least one username";
    return;
  }
  errorMessage.textContent= "";

  try {
    users = await Promise.all(
      usernames.map(fetchUser)
    );

    const languages = getLanguages(users);
    populateDropdown(languages);

    const leaderboard =
      createLeaderboard(users, "overall");

    renderTable(leaderboard);

  } catch (error) {
    errorMessage.textContent = error.message;
  }

});

languageSelect.addEventListener("change", (event) => {
  const selectedLanguage = event.target.value;

  const leaderboard =
    createLeaderboard(users, selectedLanguage);

  renderTable(leaderboard);
});