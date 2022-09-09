import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

//import coverImage from "../../assets/cover/cover-image.jpg";

const categories = [
    {
        name: "commercial",
        description: "photos of grocery stores and other projects",
    },
    { name: "portraits", description: "Portraits"},
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ];

  const handleClick = () => {
    console.log("click handled")
  }

function Nav() {
  return (
    <header data-testid="header" className="flex-row px-1">
      <h2>
        <a href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
                About me
            </a>
          </li>
          <li className={"mx-2"}>
          <span onClick={() => handleClick()}>
              Contact
              </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
