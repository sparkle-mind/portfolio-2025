import React from "react";
import "./skills.scss";
import SectionTitle from "../common/section-title/SectionTitle";
const Skills = () => {
  const skillData = [
    {
      label: "Motion  & Interactions",
      img: "images/react.png",
    },
    {
      label: "new 2",
      img: "images/css.png",
    },
    {
      label: "hello world",
      img: "images/react.png",
    },
    {
      label: "xyz abc",
      img: "images/react.png",
    },
    {
      label: "xyz abc",
      img: "images/react.png",
    },
    {
      label: "xyz abc",
      img: "images/react.png",
    },
    {
      label: "xyz abc",
      img: "images/react.png",
    },
    {
      label: "xyz abc",
      img: "images/react.png",
    },
  ];
  return (
    <>
      <section className="skills-section">
        <div className="container">
          <div className="skills-inner">
            <SectionTitle
              titleIcon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 21H15M12 3C8.68629 3 6 5.68629 6 9C6 10.2145 6.36084 11.3447 6.98117 12.2893C7.93507 13.7418 8.41161 14.4676 8.47352 14.5761C9.02428 15.541 8.92287 15.2007 8.99219 16.3096C8.99998 16.4342 9 16.6229 9 17C9 17.5523 9.44772 18 10 18H14C14.5523 18 15 17.5523 15 17C15 16.6229 15 16.4342 15.0078 16.3096C15.0771 15.2007 14.9751 15.541 15.5259 14.5761C15.5878 14.4676 16.0651 13.7418 17.019 12.2893C17.6394 11.3447 18.0002 10.2145 18.0002 9C18.0002 5.68629 15.3137 3 12 3Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              title={"Lorem exp"}
            />
            <div className="skills-row flex align-center justify-center">
              {skillData.map((item, index) => {
                return (
                  <>
                    <div className="skill-col" key={index}>
                      <div className="skill-icn">
                        <img src={item.img} alt={item.img} />
                      </div>
                      <div className="skill-label">
                        <h4>{item.label}</h4>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
