interface LayoutProps {
  children: React.ReactNode;
}

const Container: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto overflow-auto bg-bgSoft rounded-lg p-2  flex-col justify-center items-center w-full  min-h-screen">
      {children}
    </div>
  );
};

export default Container;
