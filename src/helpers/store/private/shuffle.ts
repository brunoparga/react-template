// Shuffles an array using the Fisher-Yates algorithm
export function shuffle<T>(array: T[]): T[] {
  for (let index = array.length - 1; index > 0; index -= 1) {
    const jndex = Math.floor(Math.random() * (index + 1));

    // eslint-disable-next-line no-param-reassign
    [array[index], array[jndex]] = [array[jndex], array[index]];
  }

  return array;
}
