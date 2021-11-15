const getPoints = (sides: number, length: number): string => {
  const x: { [key: number]: number } = { 0: length };
  const y: { [key: number]: number } = { 0: 0 };

  for (let i = 1; i <= sides; i++) {
    x[i] = Number((length * Math.cos((2 * Math.PI * i) / sides)).toFixed(0));
    y[i] = Number((length * Math.sin((2 * Math.PI * i) / sides)).toFixed(0));
  }

  let str = "";
  Array.from({ length: sides + 1 }, (_, index) => {
    return (str += `${x[index]},${y[index]} `);
  });

  return str;
};

const getColors = (hash: string): string[] => {
  return hash
    .split(/(?<=^(?:.{3})+)(?!$)/)
    .filter((color: string) => color.length === 3)
    .map((color: string) => `#${color}`);
};

const getChildsCount = (hash: string): number => {
  return Math.max(
    2,
    hash.split("").filter((a: string) => isNaN(Number(a))).length % 22
  );
};

const getSidesCount = (hash: string): number => {
  return Math.max(
    3,
    hash
      .split("")
      .filter((a: string) => !isNaN(Number(a)) && Number(a) % 6 === 0).length
  );
};

export { getPoints, getColors, getChildsCount, getSidesCount };
