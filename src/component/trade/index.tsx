import useApi from "../../api";
import { Resource } from "../../types";
import { TRADE_INFO, TRADE_List } from "./static";

import "./style.scss";

const TradeCard = ({
  resource,
  title,
  icon,
}: {
  resource: Resource;
  title: string;
  icon: string;
}) => {
  const [value]: any = useApi(resource);

  return (
    <div className="trade-container-card">
      <h3 className="trade-container-card-title">
        <img src={icon} alt="" />
        {title}
      </h3>
      <div className="trade-container-card-scroll">
        {(value?.withdraw || value?.transaction || []).map(
          (info: string, i: number) => (
            <p key={`item${i}`} className="trade-container-card-text">
              <span>{value.date}</span>
              {info}
            </p>
          )
        )}
      </div>
    </div>
  );
};

const Trade = () => (
  <>
    <p className="trade-container-title">{TRADE_INFO}</p>
    {TRADE_List.map((item, i) => (
      <TradeCard
        key={`trade-card${i}`}
        resource={item.resource}
        title={item.title}
        icon={item.icon}
      />
    ))}
  </>
);

export default Trade;
