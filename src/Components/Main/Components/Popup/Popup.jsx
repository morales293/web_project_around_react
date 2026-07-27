export default function Popup(props) {
  const { title, children, onClose } = props;

  return (
    <div className="popup popup_opened">
      <div
        className={`popup__content ${
          !title ? "popup__content_type_image" : ""
        }`}
      >
        <button
          type="button"
          aria-label="Cerrar ventana"
          className="popup__close"
          onClick={onClose}
        >
          &#10007;
        </button>

        {title && <h2 className="popup__title">{title}</h2>}

        {children}
      </div>
    </div>
  );
}
