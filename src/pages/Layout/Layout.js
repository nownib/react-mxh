import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Layout.scss";

const Layout = () => {
  return (
    <>
      <aside
      // className={`mobile-header-wrapper-inner  navbar-aside ps ps--active-y ${
      //   isSidebarVisible ? "show" : ""
      // }`}
      // ref={domNode}
      >
        <Sidebar
        //   toggleSidebar={toggleSidebar}
        //   isSidebarVisible={isSidebarVisible}
        />
      </aside>
      <main className="main-wrap">
        <div className="ml-190 outlet">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
