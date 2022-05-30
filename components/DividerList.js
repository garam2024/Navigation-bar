import React from "react";

import DividerItem from "./DividerItem";


function DividerList(props) {
  return (
    props.homeItem.map((item) => (
      < DividerItem
        key={item.id}
        id={item.id}
        bag={item.bag}
        logo={item.logo}
        title={item.title}
        desc={item.desc}
      />

    ))
  );
}

export default DividerList;


