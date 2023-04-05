import { useCallback } from "react";

import useApi from "../../api";
import { Resource } from "../../types";

import "./style.scss";

const AboutUS = ({ callback }: { callback: (title: string) => void }) => {
  const [article]: any = useApi(Resource.article);

  useCallback(() => {
    if (article?.title) {
      callback(article.title);
    }
  }, [article]);

  return (
    <>
      {(article?.article || []).map(
        (
          {
            content,
            sub,
            // time,
            pic_url,
            title,
          }: {
            content: string;
            sub: string;
            time: string;
            pic_url: string;
            title: string;
          },
          i: number
        ) => (
          <div
            key={`card${i}`}
            className="about-us-container-card"
            onClick={() => {
              if (content) {
                window.open(content, "_self");
              }
            }}
          >
            <div className="card-left">
              <h2 className="about-us-container-card-title">{title}</h2>
              <sub className="about-us-container-card-sub">{sub}</sub>
            </div>
            <img className="card-image" src={pic_url} alt="" />
            {/* <span>{time}</span> */}
          </div>
        )
      )}
    </>
  );
};

export default AboutUS;
