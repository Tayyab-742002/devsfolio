export const measurePerformance = (component: string) => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    return () => {
      const end = performance.now();
      const duration = end - start;
      if (duration > 16.67) { // More than 60fps threshold
        console.warn(`${component} took ${duration.toFixed(2)}ms to render`);
      }
    };
  }
  return () => {};
};