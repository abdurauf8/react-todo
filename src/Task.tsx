export default function Task() {
  return (
    <div className="task">
      <input type="checkbox" />
      <div className="main_part">
        <h2>Daily workout</h2>
        <div className="task_buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
