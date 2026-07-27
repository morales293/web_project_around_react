import ImagePopup from "../ImagePopup/ImagePopup";

export default function Card(props) {
  const { card, handleOpenPopup } = props;
  const { name, link, isLiked } = card;

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() =>
          handleOpenPopup({
            children: <ImagePopup card={card} />,
          })
        }
      />

      <button
        type="button"
        aria-label="Eliminar tarjeta"
        className="card__delete-button"
      />

      <div className="card__description">
        <h2 className="card__title">{name}</h2>

        <button
          type="button"
          aria-label="Me gusta"
          className={`card__like-button ${
            isLiked ? "card__like-button_active" : ""
          }`}
        />
      </div>
    </li>
  );
}
