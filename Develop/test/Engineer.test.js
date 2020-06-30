const Engineer = require("../lib/Engineer");

test("Can set GitHub account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.GitHubUser).toBe(testValue);
});

test("getTitle() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getTitle()).toBe(testValue);
});

test("Can get GitHub username via getGitHub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGitHub()).toBe(testValue);
});
