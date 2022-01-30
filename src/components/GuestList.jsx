import { useEffect, useState } from "react";

function GuestList() {
  const [guests, setGuests] = useState([]);

  //Set State from API
  useEffect(() => {
    const getGuests = async () => {
      const guestsFromServer = await fetchGuests();
      setGuests(guestsFromServer);
    };

    getGuests();
  }, []);

  //Fetch Guests
  const fetchGuests = async () => {
    const response = await fetch("http://localhost:5000/guests");
    const data = await response.json();
    return data;
  };

  //Render Guests' Names and Home Page Link
  return (
    <div>
      <h1>Guest List</h1>
      <ul>
        {guests.map((guest) => (
          <li key={guest.id}>{guest.name}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default GuestList;
