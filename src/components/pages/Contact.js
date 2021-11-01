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
      style={{color:'white'}}
      target="_blank">{ele.address}</Link>
  </div>);
})
const Contact = () => {
  return (<>
    {Emails}
  </>);
}
export default Contact;