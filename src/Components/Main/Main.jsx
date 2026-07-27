import { useState } from "react";
import Avatar from "../../images/Avatar.jpg";

import Popup from "./Components/Popup/Popup";
import NewCard from "./Components/Form/NewCard/NewCard";
import EditProfile from "./Components/Form/EditProfile/EditProfile";
import EditAvatar from "./Components/Form/EditAvatar/EditAvatar";
import Card from "./Components/Card/Card";
import ImagePopup from "./Components/ImagePopup/ImagePopup";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

console.log(cards);

function Main() {
  const [popup, setPopup,] = useState(null);

  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard />,
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  const editAvatarPopup = {
    title: "Editar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="main">
      <div className="main__profile">
        <div className="main__content-image">
          <img
            src={Avatar}
            alt="Foto de perfil"
            className="main__profile-image"
          />

          <button
            type="button"
            className="main__avatar-edit"
            aria-label="Editar foto de perfil"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          ></button>
        </div>

        <div className="main__content-paragraph">
          <p className="main__paragraph main__paragraph_name">Yair Morales</p>

          <p className="main__paragraph main__paragraph_about">Estudiante</p>

          <button
            type="button"
            className="main__button main__button_edit"
            onClick={() => handleOpenPopup(editProfilePopup)}
          >
            🖌
          </button>
        </div>

        <button
          type="button"
          className="main__button main__button_add"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          +
        </button>
      </div>
      {/*bloque de tarjetas*/}
      <ul className="cards__list">
        {cards.map((card) => (
          <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
        ))}
      </ul>
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
