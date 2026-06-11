## 1. The website must contain an input to accept a comma-separated list of users
  Tested manually by entering:
  "CodeYourFuture, SallyMcGrath, 4thieves"

## 2. Submitting the list of users fetches data from the Codewars API about each of the users
  Tested using:
  Unit tests in tests/fetchUser.test.mjs
  --
  console.log data in the function to check if data exit.
  --
  Tested manually by submiting:
  "CodeYourFuture, SallyMcGrath, 4thieves"

## 3. Based on the leaderboard data, a drop-down is shown, allowing the user to pick from all of the possible language rankings plus the overall ranking
  Tested manually:
  After loading users, dropdown shows available languages + overall.

## 4. The default ranking selected is the overall ranking
  Tested manually:
  Page loads and shows overall ranking automatically.

## 5. A table is shown for the current ranking, with columns for each user’s username, clan and score
  Tested manually:
  after submiting comma-separated list of users if there is no problem with the list a table display fro current ranking, with columns for each user’s username, clan and score

## 6. Changing the selected ranking will update the table to reflect the newly selected ranking
  Tested manually:
  Selected different rankings from the dropdown menu and verified that the table updated to display the correct leaderboard data for the selected ranking.

## 7. The table is sorted from the highest to lowest score, top to bottom
  Tested manually:
  Checked the scores displayed in the table for multiple users and verified that the users srted from highest to lowest score.

## 8.Users without a ranking in a chosen language are not shown in that table
  Tested manually:
  Changed the selected ranking in the dropdown menu and verified that users without a ranking in the selected language were not displayed in the table. For example, when  selecting "Go", only CodeYourFuture was shown because the other users did not have a Go ranking.

## 9.The top user’s score is visually highlighted
  Tested manually:
  Checked the leaderboard on the live site and verified that the user with the highest score, displayed in the first row of the table, was visually highlighted with a Gold background color.

## 10. The website must score 100 for accessibility in Lighthouse
  Tested using Lighthouse snapshot mode in Chrome DevTools for Both mobile and desktop and passed accessibility checks.

## 11. Unit tests must be written for at least one non-trivial function
  Unit tests in tests/fetchUser.test.mjs
  Unit tests in tests/parseUser.test.mjs

## 12. Searching for a user which doesn’t exist should show a message to the user explaining this.
  Tested manually:
  When an invalid username (boshramahmoudi) is entered , the following error message is displayed:
  The user "boshramahmoudi" does not exist.

## 13. If multiple users were searched for, it is acceptable to either just error, or to show the valid users, but the user should be made aware of the invalid users.
  Tested manually:
  When searching for a list of users, if one or more usernames are invalid, the application displays an error message. The error message identifies the first invalid username in the list and informs the user that it does not exist.

## 9. API/network error handling
  Tested manually
  Open the website.
  Open DevTools → Network.
  Set the network to Offline.
  Search for a valid username.
  Verify that the UI displays:
  Unable to contact Codewars. Please check your internet connection and try again.