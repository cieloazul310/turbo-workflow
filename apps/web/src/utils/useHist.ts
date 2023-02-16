function useHist(values: number[], division: number = 0.1) {
  const [min, max] = [-2, 2];
  const length = Math.round((max - min) / division);
  return Array.from({ length }, (_, i) => {
    const items = values.filter(
      (d) => d >= min + i * division && d < min + (i + 1) * division
    );
    return {
      index: i.toString(),
      items,
      totalValue: items.length,
    };
  });
}

export default useHist;
