function delay1s() {
  const start = new Date().getTime();
  while(new Date().getTime() - start < 1000) {
    ; // 1s
  }
}
