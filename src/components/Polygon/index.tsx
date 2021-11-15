import React, { ReactElement } from "react";
import { getPoints } from "../../utils";

interface IPolygon {
  sides: number;
  length: number;
  colors: string[];
  childs: number;
}

function Polygon(props: IPolygon) {
  const { sides, length, colors, childs } = props;
  const points = getPoints(sides, length);

  const renderChilds = (): ReactElement[] => {
    if (childs) {
      const polygons: ReactElement[] = [];
      Array.from({ length: childs }, (_, index): ReactElement[] => {
        const scaleNumber = ((1 / (childs + 1)) * (index + 1)).toFixed(2);
        polygons.push(
          <polygon
            key={index}
            points={points}
            fill={colors[index + 1]}
            style={{
              transform: `scale(${scaleNumber})`,
            }}
          />
        );

        return polygons;
      });

      return polygons.reverse();
    }

    return [];
  };

  return (
    <svg
      width={length * 2}
      height={length * 2}
      viewBox={`${length * -1} ${length * -1} ${length * 2} ${length * 2}`}
    >
      <polygon points={points} fill={colors[0]} />
      {renderChilds()}
    </svg>
  );
}

export default Polygon;
