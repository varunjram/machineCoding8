import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Navigation from "../components/Navigation";
import { Button } from "primereact/button";
import SpeakerCard from "../components/SpeakerCard";
import { Dialog } from "primereact/dialog";

const Event = () => {
  const { id } = useParams();
  const { meetups } = useAppContext();
  const [visible, setVisible] = useState(false);
  const [rsvp, setRsvp] = useState(false);

  const {
    id: eventID,
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
  } = meetups?.find((meetup) => meetup?.id === id) || {};

  return (
    <div>
      <Dialog
        header={
          <>
            <h2 className="m-0 p-0 ">Complete your RSVP</h2>
            <p className="m-0 p-0 text-gray-500">Fill in your personal information</p>
          </>
        }
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}>
        <div>
          <div class="field">
            <label for="name">Name:</label>
            <input
              id="name"
              type="text"
              class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>
          <div class="field">
            <label for="email">Email:</label>
            <input
              id="email"
              type="text"
              class="text-base text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
            />
          </div>
        </div>
        <p className="m-0 p-0 text-gray-500">* you have to make the payment at venue</p>
        <Button
          label="RSPV"
          className="block m-auto"
          onClick={() => {
            setRsvp(true);
            setVisible(false);
          }}
        />
      </Dialog>
      <Navigation />
      <main className="grid">
        <div className="col-8">
          <h1>{title}</h1>
          <p className="m-0">Hosted by:</p>
          <h4 className="mb-0">{hostedBy}</h4>
          <div className="w-25rem h-25rem">
            <img
              src={eventThumbnail}
              alt=""
              srcset=""
              className="w-full h-full"
            />
          </div>
          <p className="text-3xl">Details</p>
          <p className="m-0">{eventDescription}</p>
          <div>
            <h3 className="mb-0">Additional Information</h3>
            <p className="p-0 m-1">
              {" "}
              <span className="font-bold">Dress Code</span>: {additionalInformation?.dressCode}
            </p>
            <p className="p-0 m-1">
              {" "}
              <span className="font-bold">Age Restrictions</span>:{" "}
              {additionalInformation?.ageRestrictions}
            </p>
          </div>
          <div>
            <h3 className="mb-0">Event Tags</h3>
            {eventTags?.map((ele, i) => (
              <Button
                label={ele}
                className="p-1 m-1"
              />
            ))}
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="flex align-items-center">
              <i class="bi bi-clock"></i>
              <div className="text-gray-400 text-sm">
                <p className="p-0 m-0">{new Date(eventStartTime).toISOString()} to </p>
                <p className="p-0 m-0">{new Date(eventEndTime).toISOString()} </p>
              </div>
            </div>
            <div className="flex align-items-center mt-5">
              <i class="bi bi-geo-alt"></i>
              <div className="text-gray-400 text-sm">
                <p className="p-0 m-0">Marketing City </p>
                <p className="p-0 m-0">{address} </p>
              </div>
            </div>
            <p> &#8377; {price}</p>
          </div>
          <h2>Speakers:({speakers.length})</h2>
          <div className="flex flex-wrap">
            {speakers?.map((speaker) => (
              <SpeakerCard speaker={speaker} />
            ))}
          </div>
          <Button
            label={rsvp ? "RSPVed" : "RSPV"}
            className="block m-auto"
            onClick={() => setVisible(true)}
          />
        </div>
      </main>
    </div>
  );
};

export default Event;
