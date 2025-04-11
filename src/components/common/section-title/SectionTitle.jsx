import React from "react";
const SectionTitle = ({titleIcon, title,paragraph}) => {
  return (
    <>
      <div className="section-title">
        <h2>
          <span className="titleIcon">{titleIcon}</span> 
          {title}
        </h2>
        {paragraph && <p>{paragraph}</p>}
      </div>
    </>
  );
};

export default SectionTitle;
