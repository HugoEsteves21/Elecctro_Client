import { useState } from "react";
import axios from "axios";
import styles from "./EditDescriptionForm.module.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const EditDescriptionForm = ({ todoId }) => {
  const [description, setDescription] = useState("");

  const handlePopUp = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/todo/${todoId}`,
        {
          description,
        }
      );
      window.location.reload();
      console.log(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <Popup
      trigger={<button className={styles.button}>Edit</button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <input
            type="text"
            placeholder="Edit description here..."
            name="popUpDescription"
            onChange={handleDescription}
          />
          <div>
            <button
              onClick={() => {
                handlePopUp();
                close();
              }}
            >
              Save changes
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default EditDescriptionForm;
