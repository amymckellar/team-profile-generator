const Engineer = require("../lib/Engineer");
// A test for the Engineer class
test("Set GitHUb account", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Amy", 1, "amy_mckellar@yahoo.com", testValue);
});
// A test for the Engineer role
test("Return Engineer", () => {
  const testValue = "Engineer";
  const e = new Engineer("Amy", 1, "amy_mckellar@yahoo.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});
// A test to get the Engineer GitHub username
test("Get GitHub username", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Amy", 1, "amy_mckellar@yahoo.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
