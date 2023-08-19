const Titles = ({
  titleSmall,
  textBlack,
  textColor,
  textDescription,
  textAlign,
}) => {
  return (
    <div className={`section-head text-${textAlign || 'center'} style-4`}>
      <small className="title_small">{titleSmall}</small>
      <h2 className="mb-30">
        {textBlack} <span> {textColor} </span>
      </h2>
      {textDescription && <p>{textDescription}</p>}
    </div>
  );
};

export default Titles;
