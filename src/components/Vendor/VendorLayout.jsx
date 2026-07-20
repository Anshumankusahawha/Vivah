import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const VendorLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <main className="p-8">
          {children}
        </main>

      </div>

    </div>
  );
};

export default VendorLayout;