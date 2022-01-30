import { useEffect, useState } from "react";

function AddressBook() {
  const [users, setUsers] = useState([]);


  //Set State from API
  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    };

    getUsers();
  }, []);


  //Fetch Users
  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  };


  //Add to Guest List
  
  const handleClick = (e) => {
    console.log(e.target.innerText)
    
    const url = 'http://localhost:5000/guests'
    
    //post body data 
    const newGuest = {
      name: e.target.innerText,
      attending: true
    }
    
    // request options
    const request = {
      method: 'POST',
      body: JSON.stringify(newGuest),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // send POST request
    fetch(url, request)
      .then(response => response.json)
   
  }


  //Render Users' Names and Home Page Link
  return (
    <div>
      <h1>Address Book</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={handleClick}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddressBook;
