import React from "react";
import "./homepage.styles.scss";

const HomePage = () => {
    const sub = "SHOP NOW";
    const titles = ["HATS", "JACKETS", "SHOES", "WOMENS", "MENS"];

    return (
        <div className="homepage">
            <div className="directory-menu">
                {titles.map((title) => (
                    <div className="menu-item">
                        <div className="content">
                            <h1 className="title">{title}</h1>
                            <span className="subtitle">{sub}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomePage;
