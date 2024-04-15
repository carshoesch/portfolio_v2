import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Navigation = () => {
    const items = [
        {
            label: "Home",
            path: "#home",
            // command: () => {
            //     window.location.href = "/";
            // },
        },
        {
            label: "About",
            path: "#about",
            // command: () => {
            //     window.location.href = "/about";
            // },
        },
        {
            label: "Work",
            path: "#work",
            // command: () => {
            //     window.location.href = "/about";
            // },
        },
        {
            label: "Contact",
            path: "#contact",
            // command: () => {
            //     window.location.href = "/about";
            // },
        },
    ];

    const handleScroll = (id) => {
        const anchor = document.querySelector(id);
        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <div>
                <nav>
                    <ul className="linkWrapper">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="link"
                                onClick={() => handleScroll(item.path)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Navigation;
