function SlowComponent() {
  const start = performance.now();
  while (performance.now() - start < 2000) {
    // Simulerar en laddning på 2 sekunder
  }

  return <section>Laddning är klar! Redo att visas!</section>;
}

export default SlowComponent;
