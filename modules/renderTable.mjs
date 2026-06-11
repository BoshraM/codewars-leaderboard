export function renderTable(leaderboard) {
  const tbody =
    document.getElementById("leaderboard-body");

  tbody.innerHTML = "";

  leaderboard.forEach((user, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${user.username}</td>
      <td>${user.clan}</td>
      <td>${user.score}</td>
    `;

    if (index === 0) {
      row.style.backgroundColor = "gold";
      row.style.fontWeight = "bold";
    }

    tbody.appendChild(row);
  });
}