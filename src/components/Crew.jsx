import React, { useState } from "react";
import data from "../lib/data.json";
const Crew = () => {
  const [crews] = useState(data.crew);
  const [value, setValue] = useState(0);
  const { name, images, role, bio } = crews[value];
  return (
    <div>
      <section>
        <div className="">
          <div className="top">
            <div className="title">
              <p>02</p>
              <p>Meet your crew</p>
              <div className="">
                <img src={images.webp} alt={name} />
              </div>
            </div>
          </div>

          <div className="bottom">
            <ul>
              {crews.map((item, index) => (
                <li key={index}>
                  <button>{item.name}</button>
                </li>
              ))}
            </ul>
            <div className="role">
              <p>{role}</p>
            </div>
            <div className="name">
              <p>{name}</p>
            </div>
            <div className="bio">
              <p>{bio}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Crew;
