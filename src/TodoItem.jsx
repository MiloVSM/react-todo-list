import { useTranslation } from "react-i18next"

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    const { t } = useTranslation()
    return (
        <li>
            <label>
                <input type="checkbox" checked={completed} 
                onChange={e => toggleTodo(id, e.target.checked)}
                />
                {title}
            </label>
            <button 
            onClick={() => deleteTodo(id)} 
            className="btn btn-danger">{t('deleteBtn')}
            </button>
        </li>
    )
}