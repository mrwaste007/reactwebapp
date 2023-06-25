import './UserList.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users?page=2');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);
   
  var SearchBar = React.createClass({
    render: function () {
        return (
            <input type="search" />
        );
    }
}); 

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-item">
          <img src={user.avatar} alt={user.first_name} />
          <span>{user.first_name}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
