import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ data }) => {
  const {
    id,
    title,
    eventStartTime,
    eventEndTime,
    location,
    address,
    eventThumbnail,
    eventDescription,
    hostedBy,
    eventType,
    isPaid,
    eventTags,
    speakers,
    price,
    additionalInformation,
  } = data || {};

  const Navigation = useNavigate();

  return (
    <div
      className=" m-3  overflow-hidden  cursor-pointer"
      onClick={() => Navigation(`/event/${id}`)}>
      <div
        className="w-15rem h-15rem relative border-round-xl"
        style={{ backgroundImage: `url(${eventThumbnail})` }}>
        <p className="absolute top-0 bg-white border-round-lg ml-3 p-1">{eventType} Event</p>
      </div>
      <p className="text-gray-500 m-0 ">{new Date(eventStartTime).toISOString()}</p>
      <h2 className="m-0">{title}</h2>
    </div>
  );
};

export default EventCard;
