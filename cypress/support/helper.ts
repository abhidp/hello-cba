export const randomString = (length?: number) => {
  length = length || 10;
  return 'cy' + [...Array(length)].map(() => (~~(Math.random() * 36)).toString(36)).join('');
};

export const getRandomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomEmail = (length?: number) => {
  length = length || 10;
  return 'cy' + [...Array(length)].map(() => (~~(Math.random() * 36)).toString(36)).join('') + '@test.com';
};
