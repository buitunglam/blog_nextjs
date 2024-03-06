import Link from "next/link";
import React from "react";

type Props = {};

const Links = (props: Props) => {
  const links = [
    {
      title: "HomePage",
      path: "/",
    },
    {
      title: "AboutPage",
      path: "/about",
    },
    {
      title: "ContactPage",
      path: "/contact",
    },
    {
      title: "BlogPage",
      path: "/blog",
    },
  ];

  return (
    <div>
      {links.map((link) => (
        <Link key={link.title} href={link.path}>
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
