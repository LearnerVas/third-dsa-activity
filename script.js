var pass = "";
if (pass.length === 8) {
  console.log("Welcome");
}
else if (pass.length < 8) {
  console.log("Password is too short");
}
else if (pass.length > 8) {
  console.log("Too Long Password");
  console.log("Password should be 8 characters");
}
else {
  console.log("Please provide a password.");
}