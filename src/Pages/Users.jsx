import React, { useState, useEffect } from "react";
import { projectFirestore } from "../firebase";
import { Link } from "react-router-dom";

function Users() {
  const route = "users";

  const eventsRef = projectFirestore.collection(route);
  const [users, setUsers] = useState([]);
  const [filtered, setFilteredUsers] = useState("");

  const filteredUsers = users?.filter(
    (user) =>
      user.name?.toLowerCase().includes(filtered.toLowerCase()) ||
      user.surname?.toLowerCase().includes(filtered.toLowerCase()) ||
      user.id_number?.toLowerCase().includes(filtered.toLowerCase()) ||
      user.cellphone?.toLowerCase().includes(filtered.toLowerCase()) ||
      user.telephone?.toLowerCase().includes(filtered.toLowerCase()) ||
      user.email?.toLowerCase().includes(filtered.toLowerCase()) ||
      user.address?.toLowerCase().includes(filtered.toLowerCase()) ||
      user.qualification?.toLowerCase().includes(filtered.toLowerCase()) ||
      user.city?.toLowerCase().includes(filtered.toLowerCase()) ||
      user.code?.toLowerCase().includes(filtered.toLowerCase()) ||
      user.sex?.toLowerCase().includes(filtered.toLowerCase())
  );

  useEffect(() => {
    const unsubscribe = eventsRef.onSnapshot((snapshot) => {
      const usersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersData);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div className="mt-5 mb-5">
      <form className="sm-mx-1 m-5 my-1 d-flex">
        <div className="row sm-mx-1 mt-5 mb-5">
          <div className="col-12">
            <input
              className="sm-mx-1 form-control me-sm-2 input"
              type="search"
              placeholder="Search"
              onChange={(e) => setFilteredUsers(e.target.value)}
            />
          </div>
        </div>
      </form>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Sex</th>
            <th scope="col">ID Number</th>
            <th scope="col">Cellphone</th>
            <th scope="col">Telephone</th>
            <th scope="col">Address</th>
            <th scope="col">Province</th>
            <th scope="col">City</th>
            <th scope="col">Code</th>
            <th scope="col">Qualification</th>
            <th scope="col">view</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers &&
            filteredUsers.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.sex}</td>
                <td>{user.id_number}</td>
                <td>{user.cellphone}</td>
                <td>{user.telephone}</td>
                <td>{user.address}</td>
                <td>{user.province}</td>
                <td>{user.city}</td>
                <td>{user.code}</td>
                <td>{user.qualification}</td>
                <td className="btn btn-dark">
                  <Link
                    to={user.id}
                    state={{ data: user }}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    view
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
