import Color from 'color';
const getPoints = (sides: number, length: number): string => {
  const x: { [key: number]: number } = { 0: length };
  const y: { [key: number]: number } = { 0: 0 };

  Array.from({length: sides}, (_, index) => {
    const i = index + 1;
    x[i] = Number((length * Math.cos((2 * Math.PI * i) / sides)).toFixed(0));
    y[i] = Number((length * Math.sin((2 * Math.PI * i) / sides)).toFixed(0));
    return { x: x[i], y: y[i] };
  })

  let str = "";
  Array.from({ length: sides + 1 }, (_, index) => {
    return (str += `${x[index]},${y[index]} `);
  });

  return str;
};

const getColors = (hash: string, text: string): string[] => {
  const mainColor = `#${hash
    .split(/(?<=^(?:.{3})+)(?!$)/)
    .filter((color: string) => color.length === 3)[0]}`;
  const colors = Array.from({ length: 10 }, (_, index) => {
    return Color(mainColor).alpha(0.1*index*text.length).lighten(0.1*index)
  });

  //@ts-ignore
  return colors.map((color: string) => color.hex().toString());
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
      .filter((a: string) => !isNaN(Number(a)) && Number(a) % 8 === 0).length
  );
};

export { getPoints, getColors, getChildsCount, getSidesCount };
