import React from "react";
import "./card.scss";
import ViewMoreIcn from "../common/view-more-btn/ViewMoreIcn";

const Card = () => {
  const cardData = [
    {
      projectImg:"images/project-1.png",
      cardTechnology: ["Beginner", "intermediate", "advanced"],
      projectName: "xyz abc",
      projectDescription:
        "lorem ahjdnb jajdn jjaij jkajdnajmd najkdj akanjdn aj kd nkadn nan adadad",
    },
    {
      projectImg:"images/project-1.png",
      cardTechnology: ["ddsds", "intermediate", "advanced"],
      projectName: "xyz abc",
      projectDescription:
        "lorem ahjdnb jajdn jjaij jkajdnajmd najkdj akanjdn aj kd nkadn nan adadad",
    },
    {
      projectImg:"images/project-1.png",
      cardTechnology: ["Begdasdainner", "intermediate", "advanced","sam"],
      projectName: "xyz abc",
      projectDescription:
        "lorem ahjdnb jajdn jjaij jkajdnajmd najkdj akanjdn aj kd nkadn nan adadad",
    },
    {
      projectImg:"images/project-1.png",
      cardTechnology: ["Beginner", "intermediate", "advanced"],
      projectName: "xyz abc",
      projectDescription:
        "lorem ahjdnb jajdn jjaij jkajdnajmd najkdj akanjdn aj kd nkadn nan adadad",
    },
    {
      projectImg:"images/project-1.png",
      cardTechnology: ["Beginner", "intermediate", "advanced"],
      projectName: "xyz abc",
      projectDescription:
        "lorem ahjdnb jajdn jjaij jkajdnajmd najkdj akanjdn aj kd nkadn nan adadad",
    },
  ];
  return (
    <>
      {cardData.map((item, index) => {
        return (
          <>
            <div className="card" key={index}>
              <div className="card-inner">
                <div className="card-img">
                  <img src={item.projectImg} alt={item.projectName} />
                </div>
                <ul className="card-technology flex align-center">
                  {item.cardTechnology.map((itm, index) => {
                    return <li key={index}>{itm}</li>;
                  })}
                </ul>
                <div className="project-desc">
                  <h5 className="card-title ">{item.projectName}</h5>
                  <p>{item.projectDescription}</p>
                </div>
                <a href="#" className="view-project">
                  Live view
                  <ViewMoreIcn />
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Card;
