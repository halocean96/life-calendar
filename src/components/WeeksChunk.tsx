import React from "react";
import { range } from "lodash-es";

type WeeksChunkProps = {
  fillCount: number;
};

// 4 x 13, 1년
const WeeksChunk = ({ fillCount }: WeeksChunkProps) => {
  return (
    <div className="grid grid-cols-4 grid-rows-10 gap-1">
      {range(4 * 13).map((week) => {
        return (
          <div
            className={`w-2 h-2 border border-primary ${
              fillCount > week ? "bg-primary" : ""
            }`}
            key={week}
          />
        );
      })}
    </div>
  );
};

export default WeeksChunk;
