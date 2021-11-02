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
    <div>
      {Emails}
      <div className="row">
        <div className="col-sm-3">
            <Link to={{ pathname:'https://twitter.com/ThrobacLabs?s=20'}} target="_blank"><i className="fab fa-twitter"></i>
            </Link>
        </div>
        <div className="col-sm-3">
            <Link to={{ pathname:'https://discord.gg/ZcEubdqk'}} target="_blank"><i className="fab fa-discord"></i>
            </Link>
        </div>
        <div className="col-sm-3">
              <Link to={{ pathname:'https://github.com/Throbac-Labs'}} target="_blank"><i className="fab fa-github"></i>
              </Link>
        </div>
        <div className="col-sm-3">
            <Link to={{ pathname:'https://medium.com/@throbaclabs'}} target="_blank"><i className="fab fa-medium"></i>
            </Link>
        </div>
      </div>
    </div>
    </>);
}
export default Contact;