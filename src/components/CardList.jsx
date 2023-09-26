import data from "../data/data";
import Card from "./Card";

function CardList() {
  return data.map(
    ({
      cardImage,
      cardTitle,
      cardText,
      overLayText,
      cardID,
      overLayTextColor,
      overLayBG,
      link,
    }) => {
      return (
        <Card
          key={cardID}
          cardTitle={cardTitle}
          cardImage={cardImage}
          cardText={cardText}
          overLayText={overLayText}
          cardID={cardID}
          overLayTextColor={overLayTextColor}
          overLayBG={overLayBG}
          link={link}
        />
      );
    }
  );
}

export default CardList;
