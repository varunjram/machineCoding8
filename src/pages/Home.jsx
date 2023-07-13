import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import EventCard from "../components/EventCard";
import Navigation from "../components/Navigation";
import { AutoComplete } from "primereact/autocomplete";

export default function Home() {
  const { meetups } = useAppContext();

  const meetUPoptions = meetups.map((ele, i) => ({ ...ele, name: ele?.title }));

  const [meetup, setMeetups] = useState([]);
  console.log("meetup: ", meetup);

  const searchEvents = (event) => {
    // Timeout to emulate a network connection
    setTimeout(() => {
      let _filteredmeetups;

      if (!event.query.trim().length) {
        _filteredmeetups = [...meetUPoptions];
      } else {
        _filteredmeetups = meetUPoptions.filter((country) => {
          return country.title.toLowerCase().includes(event.query.toLowerCase());
        });
      }

      setMeetups(_filteredmeetups);
    }, 250);
  };

  const Navigate = useNavigate();

  return (
    <div>
      <Navigation />
      <main>
        <div className="flex justify-content-between align-items-center ">
          <h1>Meetup Events</h1>
          <AutoComplete
            className=""
            placeholder="Search"
            field="name"
            value={meetup}
            suggestions={meetUPoptions}
            completeMethod={searchEvents}
            onChange={(e) => {
              setMeetups(e.value);
            }}
            onSelect={(e) => {
              Navigate(`/event/${meetup[0]?.id}`);
              setMeetups(null);
            }}
          />
        </div>
        <div className="flex flex-wrap">
          {meetups.map((ele, i) => {
            return <EventCard data={ele} />;
          })}
        </div>
      </main>
    </div>
  );
}
