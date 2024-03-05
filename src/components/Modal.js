import "./componentsStyle.css";

export default function Modal({ isVisible, errorMessage }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div
          style={{ color: errorMessage ? "red" : "green" }}
          id="modal-content"
        >
          {errorMessage != null
            ? errorMessage
            : "The Form Has Been Submitted Successfully"}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
