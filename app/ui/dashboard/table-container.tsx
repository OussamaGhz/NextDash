import React from "react";

interface TableContainerProps {
    children: React.ReactNode;
}

const TableContainer: React.FC<TableContainerProps> = ({ children }) => {
    return (
        <div className="container mx-auto overflow-x-scroll bg-bgSoft rounded-lg p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            {children}
        </div>
    );
};

export default TableContainer;
