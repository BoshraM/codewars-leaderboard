import test from "node:test";
import assert from "node:assert";
import nock from "nock";

import { fetchUser } from "../modules/api/fetchUser.mjs";

test("fetchUser returns user data", async () => {

  const scope = nock("https://www.codewars.com")
    .get("/api/v1/users/testuser")
    .reply(200, {
      username: "testuser",
      clan: "CYF"
    });

  const user = await fetchUser("testuser");

  assert.equal(user.username, "testuser");
  assert.equal(user.clan, "CYF");

  assert(scope.isDone());
});