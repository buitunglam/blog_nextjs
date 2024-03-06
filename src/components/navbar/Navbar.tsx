import Links from "@/components/navbar/links/Links";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div>
      <div>logo</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
