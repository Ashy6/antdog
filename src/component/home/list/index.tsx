import React from "react";
import useApi from "../../../api";
import { Resource } from "../../../types";
import "./style.scss";

const TITLE_LEFT = "We buy card list";
const TITLE_RIGHT = "$ > NGN/USD";

/**
 * title of list
 * @returns Component
 */
const ListTitle = ({ title }: { title: string }) => (
  <div className="list-title">
    <h1>{title || TITLE_LEFT}</h1>
    <span>{TITLE_RIGHT}</span>
  </div>
);

/**
 * card of list
 * @returns Component
 */
const Card = ({ value }: { value: any }) => (
  <div className="list-card">
    <img className="list-card-img" src={value?.pic} alt="" />
    <div className="list-card-info">
      <h2 className="list-card-info-title">{value?.name}</h2>
      {(value?.face_value || []).map(
        ({ value, rate }: { value: string; rate: string }, i: number) => (
          <p key={`text${i}`} className="list-card-info-text">
            {value}
            <span>{rate}</span>
          </p>
        )
      )}
    </div>
  </div>
);

/**
 * list component
 * @returns Component
 */
const List: React.FC = () => {
  const [result]: any = useApi(Resource.card);
  return (
    <>
      {result && <ListTitle title={result?.title} />}
      <div className="list">
        {(result?.card || []).map((item: any, i: number) => (
          <Card key={`list-item${i}`} value={item} />
        ))}
      </div>
    </>
  );
};

export default List;
