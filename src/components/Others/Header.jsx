import React from "react";

const Header = ({ data, changeUser }) => {
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    changeUser("");
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        {getGreeting()}, <br />
        <span className="text-3xl font-semibold">
          {data ? data.firstName : "Admin"} 👋🏻
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
