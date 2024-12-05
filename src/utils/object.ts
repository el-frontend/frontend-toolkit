export const deepMerge = (
  target: Record<string, unknown>,
  source: Record<string, unknown>,
): Record<string, unknown> => {
  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      // Recursively merge if both target and source have the same key and the value is an object
      Object.assign(
        source[key],
        deepMerge(
          target[key] as Record<string, unknown>,
          source[key] as Record<string, unknown>,
        ),
      );
    }
  }
  return { ...target, ...source };
};
