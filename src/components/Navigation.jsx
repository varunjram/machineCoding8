import { AutoComplete } from "primereact/autocomplete";
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
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
      {" "}
      <header className="flex justify-content-between align-items-center">
        <h3 className="text-red-400">Meetup</h3>
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
      </header>
    </div>
  );
};

export default Navigation;
