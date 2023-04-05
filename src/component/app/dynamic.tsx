import home from "../../assets/home.png";
import home_active from "../../assets/home_active.png";
import trade from "../../assets/trade.png";
import trade_active from "../../assets/trade_active.png";
import us from "../../assets/us.png";
import us_active from "../../assets/us_active.png";
import antDog from "../../assets/ant-dog.png";
import contactIcon from "../../assets/contact.png";
import { Nav, Resource } from "../../types";
import useApi from "../../api";

export const navData = [
  {
    key: Nav.home,
    text: "Home",
    active: true,
    icon: home,
    active_icon: home_active,
  },
  {
    key: Nav.trade,
    text: "Trade",
    active: false,
    icon: trade,
    active_icon: trade_active,
  },
  {
    key: Nav.us,
    text: "About US",
    active: false,
    icon: us,
    active_icon: us_active,
  },
];

/**
 * Header Component
 */
const Header = (props: { value: Nav; title: string }) => {
  const { value, title } = props;
  const [contact] = useApi(Resource.contact);

  const header: { [key: string]: JSX.Element } = {
    [Nav.home]: <img src={antDog} style={{ width: "14rem" }} alt="" />,
    [Nav.trade]: (
      <img
        src={contactIcon}
        style={{ width: "24.2rem" }}
        alt=""
        onClick={() => {
          if ((contact as unknown as { whatsapp: string })?.whatsapp) {
            window.open((contact as any).whatsapp, "_self");
          }
        }}
      />
    ),
    [Nav.us]: (
      <>
        <span>——</span>
        <span className="text">{title || "Antdog Dynamic"}</span>
        <span>——</span>
      </>
    ),
  };

  return header[value];
};

export default Header;
