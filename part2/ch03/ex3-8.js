const promise = new Promise((resolve, reject) => {
  try {
    resolve(1);
  } catch(e) {
    reject("error promise");
  }
});
