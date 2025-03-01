export default function TodoItem({ _id, text, isCompleted, changeStastusHandler }) {

    function onChangeStatus() {
        changeStastusHandler(_id)
    }

    return (
        <tr className={`todo ${isCompleted ? "is-completed" : "is-not-completed"}`}>
            <td>{text}</td>
            <td>{isCompleted ? "Complete" : "Not Completed"}</td>
            <td className="todo-action">
                <button onClick={onChangeStatus} className="btn todo-btn">Change status</button>
            </td>
        </tr>
    )
}