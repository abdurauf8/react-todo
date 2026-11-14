import EditIcon from "./assets/edit_icon.svg";
import DeleteIcon from "./assets/delete_icon.svg";

export default function Task() {
  return (
    <div className="task">
      <input type="checkbox" />
      <div className="main_part">
        <h2>Daily workout</h2>
        <div className="task_buttons">
          <button><img src={EditIcon} alt="" /></button>
          <button><img src={DeleteIcon} alt="" /></button>
        </div>
      </div>
    </div>
  );
}
