fetch("https://api.github.com/search/users?q=sculove")
  .then(res => res.json())
  .then(data => console.log(data));
