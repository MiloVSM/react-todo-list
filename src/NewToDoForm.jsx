import { useState } from "react"
import { useTranslation } from "react-i18next"

export function NewTodoForm({ onSubmit }) {
    const { t } = useTranslation()
    const [newItem, setNewItem] = useState("")  
    
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="front-row">
          <label htmlFor="item">{t('newItemTxt')}: </label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
        </form>
    )
}