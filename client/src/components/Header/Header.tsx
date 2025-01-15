import * as React from "react";



const Header: React.FunctionComponent = () => {
  return (
    <div>
      <div className="container p-0.5 mx-auto">
        <nav className="py-5 flex justify-center items-center">
          <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black to-teal-800">URLShortner</div>
        </nav>
      </div>
    </div>
  );
};

export default Header;