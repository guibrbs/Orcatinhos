import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import "./styles.css";

function Buttons() {
  return (
    <div className="buttons-wrapper">
      <FaEdit className="edit-icon" id="edit" onClick={() => ({})} />
      <FaTrash className="edit-icon" id="delete" onClick={() => ({})} />
    </div>
  );
}

export default Buttons;
