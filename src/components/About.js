import React from "react";

function About(props) {
  const dImage = "https://via.placeholder.com/215";
  
  return (
    <aside>
      <img src={props.image || dImage} alt="blog logo" />
      <p>{props.about}</p>
    </aside>
  );
}

export default About;
