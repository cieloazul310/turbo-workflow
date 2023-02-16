function add(...nums: number[]) {
  return nums.reduce((accum, curr) => accum + curr, 0);
}

export default add;
