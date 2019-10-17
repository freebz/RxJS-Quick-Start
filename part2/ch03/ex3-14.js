numbers$.subscribe(
  value => console.log(`observable ${value}`),
  error => console.error(`observable ${error}`),
  complete => console.error(`observable complete`)
);
