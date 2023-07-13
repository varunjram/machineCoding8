import React from "react";
import { Avatar } from "primereact/avatar";

const SpeakerCard = ({ speaker: { name, image, designation } }) => {
  return (
    <div className="w-8rem h-8rem">
      <Avatar
        image={image}
        size="xlarge"
        shape="circle"
      />
      <p className="p-0 m-0 font-bold text-lg">{name}</p>
      <p className="p-0 m-0 text-sm text-gray-600">{designation}</p>
    </div>
  );
};

export default SpeakerCard;
