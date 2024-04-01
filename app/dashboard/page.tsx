import React from "react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      {/* Ensures the content takes at least the full height of the viewport */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-10 gap-4 p-4">
        {/* Right Section */}
        <div className="md:col-span-7 space-y-4">
          {/* Row 1: Data Containers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-bgSoft p-4 min-h-[150px] rounded-lg shadow">Data Container 1</div>
            <div className="bg-bgSoft p-4 min-h-[150px] rounded-lg shadow">Data Container 2</div>
            <div className="bg-bgSoft p-4 min-h-[150px] rounded-lg shadow">Data Container 3</div>
          </div>

          {/* Row 2: Latest Transactions */}
          <div className="bg-bgSoft p-4 min-h-[200px] rounded-lg shadow">Latest Transactions</div>

          {/* Row 3: Chart Container */}
          <div className="bg-bgSoft p-4 min-h-[250px] rounded-lg shadow">Chart Container</div>
        </div>

        {/* Left Section */}
        <div className="md:col-span-3 space-y-4">
          {/* Image Container 1 */}
          <div className="bg-bgSoft p-2 flex justify-center items-center min-h-[100px] rounded-lg shadow">
            {/* Placeholder for Image 1 */}
          </div>
          {/* Image Container 2 */}
          <div className="bg-bgSoft p-2 flex justify-center items-center min-h-[100px] rounded-lg shadow">
            {/* Placeholder for Image 2 */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
