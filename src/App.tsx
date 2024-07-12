import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { store } from "./store/store";
import Home from "./modules/Home/HomeContainer";
import { Auth0Provider } from "@auth0/auth0-react";
import ReviewOthers from "./modules/ReviewOthers/ReviewOthers";
import GetReviewed from "./modules/GetReviewed";
import CheckReviews from "./modules/CheckReviews/CheckReviews";
import Profile from "./modules/Profile";

const App = () => {
  const domain = "dev-bwrby0nyavkpii8b.us.auth0.com";
  const clientId = "OjuGMaHlimsJxcNNnmaXOdZ4zOrK1ybe";

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-profile" element={<Profile />} />
          <Route path="/check-my-reviews" element={<CheckReviews />} />
          <Route path="/get-reviewed" element={<GetReviewed />} />
          <Route path="/review-others" element={<ReviewOthers />} />
        </Routes>
      </Provider>
    </Auth0Provider>
  );
};

export default App;
