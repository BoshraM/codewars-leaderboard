export function getLanguages(users) {
  const languages = new Set();

  users.forEach(user => {
    const userLanguages =
      Object.keys(user.ranks.languages);

    userLanguages.forEach(language => {
      languages.add(language);
    });
  });

  return [...languages];
}