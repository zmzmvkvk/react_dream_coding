import React from "react";

export default function Avatar({ image, isNew }) {
  return (
    <div className="avatar">
      {isNew && <div className="badge-new">New</div>}
      <img className="photo" src={image} alt="avatar" />
    </div>
  );
}
