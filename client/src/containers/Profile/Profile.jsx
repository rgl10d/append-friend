import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "./Profile.css";

const Profile = (authUser) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    name: "",
    gitHub: "",
    languages: [],
    email: "",
    phone: "",
    experience: "",
    location: "",
    occupation: "",
    appRole: "",
    followedUsers: [],
    usersFollowing: [],
    imgURL: "",
  });

  const getUserInfo = () => {
    console.log(authUser.authUser);
    const queryURL = "api/developer/" + authUser.authUser;
    console.log(queryURL);
    axios
      .get(queryURL)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">

        <div className="row">
          <div className="col s6">
            <div className="card">
              <div className="card-image" id="devCardImageContainer">
                <img alt={state.name} src={state.imgURL} id="profilePagePicture"/>
                
              </div>

              <div className="card-content">
              <span className="card-title" id="name">
                  {state.name}
                </span>
                <ul className="collection">
                  <li className="collection-item" placeholder="App Role:">
                    Role: {state.appRole}
                  </li>
                  <li className="collection-item">
                    Occupation: {state.occupation}
                  </li>
                  <li className="collection-item">
                    Experience: {state.experience} years
                  </li>
                  <li className="collection-item">
                    Location: {state.location}
                  </li>
                  <li className="collection-item">gitHub: <a href={state.gitHub} target="_blank">{state.gitHub}</a></li>
                  <li className="collection-item">Email: {state.email}</li>
                  <li className="collection-item">Phone: {state.phone}</li>
                </ul>
              </div>
            </div>
          </div>


          <div className="col s6" id="profilePageAboutCol">
          <div className="row" id="profilePageButtons">
              <NavLink
                to="/editprofile"
                id="edit-profile-button"
                className="waves-effect waves-dark blue lighten-1 btn-small"
              >Edit Profile
              </NavLink>
            </div>
            <div className="row">
              <h6 className="header">About Me:</h6>
              <div className="card horizontal">
                <div className="card-stacked">
                  <div className="card-content">
                    <p>{state.about}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
