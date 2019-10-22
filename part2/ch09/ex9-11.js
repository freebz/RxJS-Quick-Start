let tobeIndex = store.index;
if (Math.abs(distance) >= THRESHOLD) {
    tobeIndex = distance < 0 ? tobeIndex + 1 : tobeIndex - 1;
}
