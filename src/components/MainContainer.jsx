import { useState } from "react"; 
import Image from "..////////////////////////assets/image.png";

export default function MainContainer() {
 
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [completed, setCompleted] = useState([]);


    const addItem = () => {
        if (inputValue.trim() !== "") { 
            setItems([...items, inputValue]); 
            setCompleted([...completed, false]); 
            setInputValue(""); 
        }
    };


    const removeItem = (index) => {
        setItems(items.filter((_, i) => i !== index)); 
        setCompleted(completed.filter((_, i) => i !== index)); 
    };

    const toggleComplete = (index) => {
        setCompleted(completed.map((c, i) => (i === index ? !c : c)));
    };

    return (
        <div className="mainContainer">
            <div className="heading">
                <img src={Image} alt="image" className="image1" />
            </div>


            <div className="form">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} 
                />
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>


            <ul className="taskList">
                {items.map((item, index) => (
                    <li key={index}>

                        <span
                            className={completed[index] ? "completed" : ""}
                            onClick={() => toggleComplete(index)} 
                        >
                            {item}
                        </span>

                        <button className="deleteBtn" onClick={(e) => {
                            e.stopPropagation(); 
                            removeItem(index);
                        }}>🗑️
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
