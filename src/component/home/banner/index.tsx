import React from "react";
import { Carousel } from "antd";
import { Resource } from "../../../types";
import useApi from "../../../api";

const Image = ({ pic, click_url }: { pic: string; click_url: string }) => (
  <img
    className="home-container-img"
    src={pic}
    alt=""
    onClick={() => {
      if (click_url) {
        window.open(click_url, "_self");
      }
    }}
  />
);

const Banner: React.FC = () => {
  const [banner] = useApi(Resource.banner);
  return (
    <Carousel autoplay dots={false}>
      {((banner as any)?.banners || []).map(
        ({ pic, click_url }: { pic: string; click_url: string }, i: number) => (
          <Image key={`img${i}`} pic={pic} click_url={click_url} />
        )
      )}
    </Carousel>
  );
};

export default Banner;
