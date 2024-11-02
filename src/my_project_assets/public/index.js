import my_project from 'ic:canisters/my_project';

my_project.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
