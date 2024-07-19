import React from "react";
import styles from "./Reusable.module.css";

const Reusable = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.bannerWrapper}>
        {reusableBannersList.map((item, index) => {
          return (
            <div
              key={item?.id}
              style={{
                backgroundImage: `url(${item?.banner})`,
                justifyContent: item?.justifyContent,
              }}
              className={styles.bannerItem}
            >
              <h3>{item?.title}</h3>
              <p>{item?.description}</p>
              <button>Show More</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reusable;

const reusableBannersList = [
  {
    id: 1,
    title: "The Seasons Latest",
    description: "Get the seasons all latest designs in a flick of your hand",
    banner:
      "https://static.vecteezy.com/system/resources/previews/000/664/483/original/abstract-blue-banner-design-vector.jpg",
    justifyContent: "flex-start",
  },
  {
    id: 2,
    title: "Our New Designs",
    description:
      "Get the designs developed by our in-house team all for yourself",
    banner:
      "https://static.vecteezy.com/system/resources/previews/000/664/483/original/abstract-blue-banner-design-vector.jpg",
    justifyContent: "center",
  },
  {
    id: 3,
    title: "Insiders",
    description: "Get the top class products for yourself with an extra off",
    banner:
      "https://static.vecteezy.com/system/resources/previews/000/664/483/original/abstract-blue-banner-design-vector.jpg",
    justifyContent: "center",
  },
];
