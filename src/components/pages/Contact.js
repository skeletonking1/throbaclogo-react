import React from 'react';
import { Link } from 'react-router-dom';
const Contact = () => {
  return (<>
    <div className="container">
      <Link
        to={{ pathname: "https://mailto:team@throbaclabs.io" }}
        style={{ color: 'white', fontFamily: 'Sukhumvit Set', fontSize: 40 }}
        target="_blank">
        team@throbaclabs.io
      </Link>
      <div className="row mt-20">
        <div className="col-3">
          <Link to={{ pathname: 'https://twitter.com/ThrobacLabs?s=20' }} target="_blank">
            <i className="fab fa-twitter fa-5x" style={{ color: "#1284c7" }}></i>
          </Link>
        </div>
        <div className="col-3">
          <Link to={{ pathname: 'https://discord.gg/ZcEubdqk' }} target="_blank">
            <i className="fab fa-discord fa-5x" style={{ color: "#1284c7" }}></i>
          </Link>
        </div>
        <div className="col-3">
          <Link to={{ pathname: 'https://github.com/Throbac-Labs' }} target="_blank">
            <i className="fab fa-github fa-5x" style={{ color: "#1284c7" }}></i>
          </Link>
        </div>
        <div className="col-3">
          <Link to={{ pathname: 'https://medium.com/@throbaclabs' }} target="_blank">
            <i className="fab fa-medium fa-5x" style={{ color: "#1284c7" }}></i>
          </Link>
        </div>
      </div>
    </div>
  </>);
}
export default Contact;