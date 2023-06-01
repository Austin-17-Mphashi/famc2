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
        <h4 className="my-5">Registered users</h4>
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
      
      <div id="no-more-tables" className="table-responsive">
        <table  className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th className="col-12 col-sm-6 col-md-1" scope="col">#</th>
              <th className="col-12 col-sm-6 col-md-1" scope="col">Name</th>
              <th className="col-12 col-sm-6 col-md-1" scope="col">Surname</th>
              <th className="col-12 col-sm-6 col-md-1" scope="col">Sex</th>
              <th className="col-12 col-sm-6 col-md-1" scope="col">ID Number</th>
              <th className="col-12 col-sm-6 col-md-1" scope="col">Cellphone</th>
              <th className="col-12 col-sm-6 col-md-1" scope="col">Telephone</th>
              <th className="col-12 col-sm-6 col-md-1" scope="col">Address</th>
              <th className="col-12 col-sm-6 col-md-1" scope="col">Province</th>
              <th className="col-12 col-sm-6 col-md-1" scope="col">City</th>
              <th className="col-12 col-sm-6 col-md-1" scope="col">Code</th>
              <th className="col-12 col-sm-6 col-md-1" scope="col">Qualification</th>
              <th className="col-12 col-sm-6 col-md-1" scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers &&
              filteredUsers.sort((a, b) => a.name.localeCompare(b.name)).map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td data-title="Name" >{user.name}</td>
                  <td data-title="Surname">{user.surname}</td>
                  <td data-title="Sex">{user.sex}</td>
                  <td data-title="ID">{user.id_number}</td>
                  <td data-title="Cell phone">{user.cellphone}</td>
                  <td data-title="Telephone">{user.telephone}</td>
                  <td data-title="Address">{user.address}</td>
                  <td data-title="Province">{user.province}</td>
                  <td data-title="City">{user.city}</td>
                  <td data-title="Code">{user.code}</td>
                  <td data-title="Qualification">{user.qualification}</td>
                  <td data-title="View">
                    <Link
                      to={user.id}
                      state={{ data: user }}
                      style={{ textDecoration: "none", color: "inherit" }}
                      className="btn btn-warning"
                    >
                      view
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
