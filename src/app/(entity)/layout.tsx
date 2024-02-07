import React, { FC, ReactNode } from "react";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="flex flex-col items-center md:items-start md:flex-row gap-10">{children}</div>;
};

export default Layout;
