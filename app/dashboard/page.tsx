import React from "react";
import Card from "../ui/dashboard/card";
import Transactions from "../ui/dashboard/transactions-card";
import Chart from "../ui/dashboard/chart-card";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Ensures the content takes at least the full height of the viewport */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-10 gap-4">
        {/* Left Section */}
        <div className="md:col-span-10 space-y-4">
          {/* Row 1: Data Containers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((index) => (
              <Card index={index} />
            ))}
          </div>{" "}
          {/* Row 2: Latest Transactions */} <Transactions />
          {/* Row 3: Chart Container */}
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
