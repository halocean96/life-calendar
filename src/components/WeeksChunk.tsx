import React from "react";
import { range } from "lodash-es";

type WeeksChunkProps = {
  fillCount: number;
  healthYear: boolean;
};

// 4 x 13, 1년
const WeeksChunk = ({ fillCount, healthYear }: WeeksChunkProps) => {
  return (
    <div className="grid grid-cols-4 grid-rows-10 gap-1">
      {range(4 * 13).map((week) => {
        return (
          <div
            className={`w-2 h-2 border border-primary ${
              fillCount > week ? "bg-primary" : ""
            } ${healthYear ? "" : "opacity-40"}`}
            key={week}
          />
        );
      })}
    </div>
  );
};

export default WeeksChunk;
