export default function TodoItem({ text, isCompleted }) {
    return (
        <tr className={`todo ${isCompleted ? "is-completed" : "is-not-completed"}`}>
            <td>{text}</td>
            <td>{isCompleted ? "Complete" : "Not Completed"}</td>
            <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
            </td>
        </tr>
    )
}