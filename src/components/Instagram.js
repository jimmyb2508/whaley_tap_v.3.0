import React from 'react';
import Feed from "react-instagram-authless-feed";

import '../styles/Instagram.css';

const Instagram = () => {
  return (
    <section>
      <h1 className="header">Follow<span className="highlight"> Us </span>On Instagram</h1>
      <div>
        {/* <Feed userName="whaley_nook_tap_rooms" className="Feed" classNameLoading="Loading" limit="8"/> */}
      </div>

    </section>
  )
};

export default Instagram;