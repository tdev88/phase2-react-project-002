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

  //Render Users' Names and Home Page Link
  return (
    <div>
      <h1>Address Book</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default AddressBook;
