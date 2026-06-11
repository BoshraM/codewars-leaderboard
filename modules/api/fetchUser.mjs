export async function fetchUser(username) {
  try {
    const response = await fetch(
      `https://www.codewars.com/api/v1/users/${username}`
    );

    if (!response.ok) {
      throw new Error(
        `The user "${username}" does not exist.`
      );
    }

    return response.json();

  } catch (error) {

    if (error.message.includes("does not exist")) {
      throw error;
    }

    throw new Error(
      "Unable to contact Codewars. Please check your internet connection and try again."
    );
  }
}