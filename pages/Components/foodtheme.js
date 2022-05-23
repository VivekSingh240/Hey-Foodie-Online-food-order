import React, { Fragment } from 'react';
import FoodTheme from "../../public/Images/partner-1.png";
import Image from 'next/image';
const Foodtheme = () => {
  return (
    <Fragment>
        <Image height={600} src={FoodTheme} />
    </Fragment>
  )
}

export default Foodtheme;