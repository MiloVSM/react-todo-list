import { TodoItem } from "./TodoItem"
import { useTranslation } from "react-i18next"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    const { t } = useTranslation()
    let text = t('noTodoTxt');
    return (
        <ul className="list">
            {todos.length === 0 && [text]}
            {todos.map(todo => {
            return (
                <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        )
    })}
</ul>
    )
   
}

