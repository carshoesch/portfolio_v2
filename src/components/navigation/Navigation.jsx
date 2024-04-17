import React, { useEffect, useState } from "react";
import "./styles.scss";

const Navigation = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  const items = [
    {
      label: "Home",
      path: "#home",
    },
    {
      label: "About",
      path: "#about",
    },
    {
      label: "Work",
      path: "#work",
    },
    {
      label: "Contact",
      path: "#contact",
    },
  ];

  return (
    <>
      <div>
        <nav>
          <ul className="linkWrapper">
            {items.map((item, index) => (
              <li
                key={index}
                className={`link ${currentHash === item.path ? "active" : ""}`}
              >
                <a href={item.path} className="link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
