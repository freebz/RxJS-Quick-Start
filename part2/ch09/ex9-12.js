let tobeIndex = store.index;
if (Math.abs(distance) >= THRESHOLD) {
    tobeIndex = distance < 0 ?
	Math.min(tobeIndex + 1, PANEL_COUNT - 1) :
	Math.max(tobeIndex - 1, 0);
}
