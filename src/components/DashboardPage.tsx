import React from "react";

interface DashboardPageProps {
  userName: string; // Define the type of the register prop
}
const DashboardPage: React.FC<DashboardPageProps> = ({ userName }) => {
  return (
    <div>
      <h2>Welcome {userName} </h2>
    </div>
  );
};

export default DashboardPage;
