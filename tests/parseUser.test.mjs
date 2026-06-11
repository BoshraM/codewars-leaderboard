import test from "node:test";
import assert from "node:assert";

import { parseUsernames } from "../modules/parseUsernames.mjs";

test("splits comma separated usernames", () => {
  const result =
    parseUsernames("alice,bob,charlie");

  assert.deepEqual(
    result,
    ["alice", "bob", "charlie"]
  );
});
