import React from "react";

const Footer = () => (
    <footer>
        Created by <span id="Danny">Danny</span>
        <br />
        <span>
            <i
                className="fab fa-github"
                onClick={() =>
                    window.open("https://github.com/dannytzul", "_blank")
                }
            ></i>{" "}
            <i
                className="fab fa-linkedin"
                onClick={() =>
                    window.open(
                        "https://www.linkedin.com/in/danny-tzul-171a93216/",
                        "_blank"
                    )
                }
            ></i>{" "}
        </span>
    </footer>
);

export default Footer;
