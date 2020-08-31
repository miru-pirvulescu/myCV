import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return(
    <>
        <div className="footer" style={{
                backgroundColor: "#F8F8F8",
                borderTop: "1px solid #E7E7E7",
                textAlign: "center",
                padding: "20px",
                position: "relative",
                left: "0",
                bottom: "0",
                height: "60px",
                width: "100%",
            }}>
            <p>Copyright © Miruna Pirvulescu, 2020</p>
        </div>
    </>
  );
}

export default Footer;