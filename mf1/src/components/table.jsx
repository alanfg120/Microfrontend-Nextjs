import React, { useState, useEffect } from "react";
import useUserStore from "./../store/user.store";
import fetchGitHubUsers from "@/services/users.service";

const Table = ({ data }) => {
  const [usersTable, setUserTable] = useState(data);
  const { setUsers, cant, users, setInitialUsers, setloading,loading } = useUserStore();

  const getusers = async  () => {
    setloading(true);
    // Simulacion de demora
    await new Promise((res,rej) => setTimeout(() => res(),3000))
    const users = await fetchGitHubUsers(cant);
    setUsers(cant,users);
  }

  useEffect(() => {
    if (users.length === 0) {
      setInitialUsers(data);
      return;
    }
    setUserTable(users);
  }, [users, setUsers]);

   if(loading){
    return <h2>Obteniendo mas usuarios....</h2>
   }


  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        onClick={() => getusers()}
      >
        Obtener mas usuarios
      </button>
      <div className="table-container">
        <table class="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Avatar</th>
              <th>Username</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
            {usersTable.map((row, index) => (
              <tr key={index}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <img
                    src={row.avatar_url}
                    alt="Avatar"
                    class="circular-image"
                  />
                </td>
                <td>{row.login}</td>
                <td>
                  <a style={
                    {
                      textDecoration: "underline",
                      color: "blue",
                      cursor: "pointer"
                    }
                  } href={row.html_url} target="_blank">{row.html_url}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
