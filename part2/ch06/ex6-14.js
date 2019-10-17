user$.subscribe({
    next: v => drawLayer(v.items),
    error e => {
      console.error(e);
      alert(e.message);
    }
});
