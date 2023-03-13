import React from "react";

const Profile = ({ avatar, username, tag, location }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <h1 className="username">{username}</h1>
        <h2 className="tag">{tag}</h2>
        <h2 className="location">{location}</h2>
      </div>

      <ul className="stats">
        <li>
          <span className="label">
            {" "}
            <b>Followers</b>{" "}
          </span>
          <span className="quantity">5603</span>
        </li>
        <li>
          <span className="label">
            {" "}
            <b>Views</b>{" "}
          </span>
          <span className="quantity">4827,</span>
        </li>
        <li>
          <span className="label">
            {" "}
            <b>Likes</b>{" "}
          </span>
          <span className="quantity">1308</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
