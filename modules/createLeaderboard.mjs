export function createLeaderboard(users, ranking) {
  const leaderboard = [];

  users.forEach(user => {
    let score;

    if (ranking === "overall") {
      score = user.ranks.overall.score;
    } else {
      const languageRank =
        user.ranks.languages[ranking];

      if (!languageRank) {
        return;
      }

      score = languageRank.score;
    }

    leaderboard.push({
      username: user.username,
      clan: user.clan || "",
      score: score
    });
  });

  leaderboard.sort(
    (a, b) => b.score - a.score
  );

  return leaderboard;
}