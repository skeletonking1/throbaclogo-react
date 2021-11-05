import React from 'react';
import { Link } from 'react-router-dom'

const table_data = [
  {
    id: 1,
    address: "kuparine@live.com"
  },
  {
    id: 2,
    address: "dhwon@mac.com"
  },
  {
    id: 3,
    address: "devphil@gmail.com"

  }
]
const Emails = table_data.map(ele => {
  return (
  <div key={ele.id}>
    <Link 
      to={{ pathname: "https://mailto:" + ele.address }} 
      style={{color:'white',fontFamily:'Sukhumvit Set',fontSize:45}}
      target="_blank">{ele.address}
      </Link>
  </div>);
})
const Contact = () => {
  return (<>
    <div className="container">
      {Emails}
      <div className="row">
        <div className="col-3">
            <Link to={{ pathname:'https://twitter.com/ThrobacLabs?s=20'}} target="_blank">
              <i className="fab fa-twitter fa-5x" style={{color:"#1284c7"}}></i>
            </Link>
        </div>
        <div className="col-3">
            <Link to={{ pathname:'https://discord.gg/ZcEubdqk'}} target="_blank">
              <i className="fab fa-discord fa-5x" style={{color:"#1284c7"}}></i>
            </Link>
        </div>
        <div className="col-3">
              <Link to={{ pathname:'https://github.com/Throbac-Labs'}} target="_blank">
                <i className="fab fa-github fa-5x" style={{color:"#1284c7"}}></i>
              </Link>
        </div>
        <div className="col-3">
            <Link to={{ pathname:'https://medium.com/@throbaclabs'}} target="_blank">
              <i className="fab fa-medium fa-5x" style={{color:"#1284c7"}}></i>
            </Link>
        </div>
      </div>
    </div>
    </>);
}
export default Contact;