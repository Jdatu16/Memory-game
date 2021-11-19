import { useEffect } from "react";
import Modal from "react-modal";

import {
  cardImagesEight,
  cardImagesTwelve,
  emojiImagesLarge,
  emojiImagesSmall,
} from "../../constants";

import "../../css/modal.css";

Modal.setAppElement("#root");

export const NewGame = ({
  showModal,
  setShowModal,
  shuffleCards,
  setCardImages,
  cardImages,
  setHidden,
  gameTheme,
  gridSize,
  setGameTheme,
  setGridSize,
}) => {
  const onSubmit = () => {
    if (gameTheme === "pictures") {
      if (gridSize === "12") {
        setCardImages(cardImagesTwelve);
      } else if (gridSize === "8") {
        setCardImages(cardImagesEight);
      }
    } else if (gameTheme === "emoji") {
      if (gridSize === "12") {
        setCardImages(emojiImagesLarge);
      } else if (gridSize === "8") {
        setCardImages(emojiImagesSmall);
      }
    }
    setHidden(false);
  };

  useEffect(() => {
    setShowModal(false);
    shuffleCards();
  }, [cardImages]);

  return (
    <Modal
      closeTimeoutMS={500}
      style={{
        overlay: {
          backgroundColor: "#808080de",
          display: "flex",
          justifyContent: "center",
        },
      }}
      className="modal"
      isOpen={showModal}
      onRequestClose={() => setShowModal(false)}
    >
      <div className="modal-header">
        <div className="modal-title">
          <h3>Select Settings</h3>
        </div>
        <div className="modal-close-button">
          <i onClick={() => setShowModal(false)} class="far fa-times"></i>
        </div>
      </div>
      <div className="modal-content">
        <div>
          <div className="theme-container">
            <p>Select Theme:</p>
            <div className="theme-select-buttons">
              <button
                onClick={() => {
                  setGameTheme("emoji");
                }}
                type="button"
                className={
                  gameTheme === "emoji"
                    ? "theme-btn theme-btn-checked"
                    : "theme-btn"
                }
              >
                Emoji
              </button>
              <button
                onClick={() => {
                  setGameTheme("pictures");
                }}
                type="button"
                className={
                  gameTheme === "pictures"
                    ? "theme-btn theme-btn-checked"
                    : "theme-btn"
                }
              >
                Pictures
              </button>
            </div>
            <p>Grid Size:</p>
            <div className="theme-select-buttons">
              <button
                onClick={() => {
                  setGridSize("8");
                }}
                type="button"
                className={
                  gridSize === "8" ? "theme-btn theme-btn-checked" : "theme-btn"
                }
              >
                8
              </button>
              <button
                onClick={() => {
                  setGridSize("12");
                }}
                type="button"
                className={
                  gridSize === "12"
                    ? "theme-btn theme-btn-checked"
                    : "theme-btn"
                }
              >
                12
              </button>
            </div>
          </div>
          <button
            onClick={() => onSubmit()}
            className="modal-sumbit-btn"
            type="submit"
          >
            start
          </button>
        </div>
      </div>
    </Modal>
  );
};
