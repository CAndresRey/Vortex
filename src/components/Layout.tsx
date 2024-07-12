import Header from "./Header";
import Footer from "./Footer";
import {
  HomeIcon,
  BriefcaseIcon,
  CalendarIcon,
  UserIcon,
  BookOpenIcon,
} from "@heroicons/react/16/solid";
import Sidebar from "./Sidebar";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setActive } from "../modules/Home/slices/Sidebar.slice";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const active = useSelector((state: RootState) => state.sidebar.active);

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <div className="flex flex-1 bg-dark-accent ">
        {isAuthenticated && (
          <aside className="bg-dark-accent w-64 pt-16 border-r border-borders text-lg h-full">
            <nav>
              <Sidebar
                Icon={HomeIcon}
                text="Home"
                route="/"
                onClick={() => {
                  dispatch(setActive("Home"));
                }}
                active={active === "Home"}
              />
              <Sidebar
                Icon={UserIcon}
                text="Edit profile"
                route="/edit-profile"
                onClick={() => {
                  dispatch(setActive("Edit Profile"));
                }}
                active={active === "Edit Profile"}
              />
              <Sidebar
                Icon={BriefcaseIcon}
                text="Check my reviews"
                route="/check-my-reviews"
                onClick={() => {
                  dispatch(setActive("Check my reviews"));
                }}
                active={active === "Check my reviews"}
              />
              <Sidebar
                Icon={CalendarIcon}
                text="Get reviewed"
                route="/get-reviewed"
                onClick={() => {
                  dispatch(setActive("Get reviewed"));
                }}
                active={active === "Get reviewed"}
              />
              <Sidebar
                Icon={BookOpenIcon}
                text="Review others"
                route="/review-others"
                onClick={() => {
                  dispatch(setActive("Review others"));
                }}
                active={active === "Review others"}
              />
            </nav>
          </aside>
        )}
        <section className="flex-1">{children}</section>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
