import { useState } from "react";

// import useApi from "../../api";
import { Nav, Resource } from "../../types";
import Header, { navData } from "./dynamic";
import HomeComponent from "../home";
import TradeComponent from "../trade";
import AboutUsComponent from "../about-us";
import { ACTIVE_COLOR, BASE_COLOR } from "../../utils";
// import appIcon from "../../assets/app_icon.png";

import "./style.scss";

/**
 * Main Component
 */
export const Main = (props: {
  value: Nav;
  callback: (title: string) => void;
}) => {
  const { value, callback } = props;

  const main: { [key: string]: JSX.Element } = {
    [Nav.home]: <HomeComponent />,
    [Nav.trade]: <TradeComponent />,
    [Nav.us]: <AboutUsComponent callback={callback} />,
  };

  return main[value];
};

/**
 * App Component
 */
const App = () => {
  // const [contact] = useApi(Resource.contact);
  const [navigation, setNavigation] = useState(navData);
  const [key, setKey] = useState(navData.find((i) => i.active)!.key);
  const [title, setTitle] = useState("");

  const titleCallback = (value: string) => {
    setTitle(value);
  };

  const navChange = (key: Nav) => {
    setKey(() => key);
    setNavigation(
      navigation.map((item) => {
        return {
          ...item,
          active: item.key === key,
        };
      })
    );
  };

  return (
    <div className="App">
      <header className={`App-header ${key}`}>
        <Header value={key} title={title} />
      </header>
      <main className={`App-main ${key}`}>
        {/* <img
          className="phone-container-app"
          src={appIcon}
          alt=""
          onClick={() => {
            if ((contact as unknown as { whatsapp: string })?.whatsapp) {
              window.open((contact as any).whatsapp, "_self");
            }
          }}
        /> */}
        <Main value={key} callback={titleCallback} />
      </main>
      <footer className="App-footer">
        {navigation.map((nav) => {
          const { icon, active_icon, active, text, key } = nav;
          return (
            <div
              className="App-footer-item"
              key={key}
              onClick={() => navChange(key)}
            >
              <div className="App-footer-item-box">
                <img src={active ? active_icon : icon} alt="" />
                <p style={{ color: active ? ACTIVE_COLOR : BASE_COLOR }}>
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </footer>
    </div>
  );
};

export default App;
