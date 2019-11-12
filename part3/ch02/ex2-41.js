return combineLatest(marker$, bus$, (marker, buses) => ({
    buses,
    markerInfo
}));
