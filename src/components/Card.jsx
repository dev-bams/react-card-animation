import { useState } from "react";
import PropTypes from "prop-types";

function Card({
  cardImage,
  cardTitle,
  cardText,
  overLayText,
  overLayTextColor,
  overLayBG,
  link,
}) {
  const [isOverLayActive, setIsOverLayActive] = useState(false);

  function toggleOverLay() {
    setIsOverLayActive(!isOverLayActive);
  }

  return (
    <div onMouseEnter={toggleOverLay} onMouseLeave={toggleOverLay}>
      <a
        className="card__link"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        <div className="card">
          <div className="card__logo">{cardImage}</div>
          <h2 className="card__title">{cardTitle}</h2>
          <p className="card__text">{cardText}</p>
          <div
            className={`card__overlay ${
              isOverLayActive ? "card__overlay--active" : ""
            }`}
            style={{
              color: `${overLayTextColor}`,
              backgroundColor: `${overLayBG}`,
            }}
          >
            <h1
              className={`card__overlay-text ${
                isOverLayActive ? "card__overlay--active" : ""
              }`}
            >
              {overLayText}
            </h1>
          </div>
        </div>
      </a>
    </div>
  );
}

Card.propTypes = {
  cardImage: PropTypes.element.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardText: PropTypes.string.isRequired,
  overLayText: PropTypes.string.isRequired,
  overLayTextColor: PropTypes.string.isRequired,
  overLayBG: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Card;
