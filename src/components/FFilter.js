import { Button } from "antd";
import React from "react";

function FFilter({ data }) {
  console.log(data);
  return (
    <div className="f-gallery-wrapper">
      <div className="gallery-container" style={{ height: "auto%" }}>
        <div className="gallery-filter-item">
          <Button type="primary">All</Button>
        </div>
        {data.map((gen) => (
          <div className="gallery-filter-item" key={gen.id}>
            <Button type="link">{gen.name}</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FFilter;
