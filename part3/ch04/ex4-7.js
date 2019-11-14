let [render$, search$] = changedHash$.pipe(
    partition(({ routeId }) => routeId)
);
