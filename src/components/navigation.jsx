import React from "react";

export const Navigation = (props) => {
  const handleNavClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            onClick={() => handleNavClick("page-top")}
          >
            Empower Safe
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#features"
                className="page-scroll"
                onClick={() => handleNavClick("features")}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="page-scroll"
                onClick={() => handleNavClick("about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#chat"
                className="page-scroll"
                onClick={() => handleNavClick("Chat")}
              >
                Chat Bot
              </a>
            </li>
            <li>
              <a
                href="#maps"
                className="page-scroll"
                onClick={() => handleNavClick("Maps")}
              >
                Maps Help
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="page-scroll"
                onClick={() => handleNavClick("team")}
              >
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
