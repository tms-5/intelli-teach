export function debounce(func: (...args: any[]) => void, delay: number) {
  let debounceTimer: NodeJS.Timeout;
  return function (this: any, ...args: any[]) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
}
