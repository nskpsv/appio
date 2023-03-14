export const email = (value: string) =>
  /\b\w+@\w+\.[A-z]{2,}\b/gi.test(value) ? '' : 'Введите корректный email.';
