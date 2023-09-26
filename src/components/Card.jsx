import { useRef } from "react";
import PropTypes from "prop-types";

function Card({
  cardImage,
  cardTitle,
  cardText,
  overLayText,
  overLayTextColor,
  overLayBG,
  link
}) {
  const overlayContainer = useRef(null);
  function showOverLay() {
    const overLayElem = overlayContainer.current;
    overLayElem.classList.add("card__overlay--active");
  }
  function hideOverLay() {
    const overLayElem = overlayContainer.current;
    overLayElem.classList.remove("card__overlay--active");
  }
  return (
    <div
      onMouseEnter={showOverLay}
      onMouseLeave={hideOverLay}
      className="card-wrapper"
    >
      <a href={link}>
        <div className="card js-card">
          <div className="card__logo">{cardImage}</div>
          <h2 className="card__title">{cardTitle}</h2>
          <p className="card__text">{cardText}</p>
          <div
            ref={overlayContainer}
            className="card__overlay js-card__overlay card-overlay1"
            style={{
              color: `${overLayTextColor}`,
              backgroundColor: `${overLayBG}`,
            }}
          >
            <h2 className="card__overlay-text js-card__overlay-text">
              {overLayText}
            </h2>
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
