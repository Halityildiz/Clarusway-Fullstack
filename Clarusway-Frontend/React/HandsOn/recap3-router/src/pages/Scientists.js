import React from "react";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import "../../src/index.css";

const Scientists = () => {
  // const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const url = "https://api.github.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <article className="followers">
      <h1 style={{ margin: "2rem auto", textAlign: "center" }}>
        OUR SCIENTISTS
      </h1>
      <div className="cont">
        {users.map((user) => {
          const { id, login, avatar_url, html_url, repos_url } = user;
          return (
            <div className="card" key={id}>
              <img src={avatar_url} alt={login} />
              <h3>{login}</h3>
              <h4>{repos_url}</h4>
              <a href={html_url} className="btn">
                view profile
              </a>
            </div>
          );
        })}
      </div>
    </article>
    // <div className="text-center">
    //   <h1>OUR INSTRUCTOR</h1>
    //   {/* <h5 className="text-danger">
    //     This is just to learn API. It is not real :)
    //   </h5> */}
    //   {users.map((user) => {
    //     const { id, login, avatar_url } = user;
    //     return (
    //       <div key={id}>
    //         <h2>{login}</h2>

    //         <img
    //           src={avatar_url}
    //           alt=""
    //           style={{ cursor: "pointer", width: "300px", borderRadius: "50%" }}
    //           onClick={() => navigate(`/instructors/${user.login}`)}
    //         />
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Scientists;
