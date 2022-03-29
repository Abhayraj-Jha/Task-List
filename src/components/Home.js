import React, { useEffect, useState } from "react";
import Task from "./Task";
import Modal from "react-modal";
import './../styles/home.css';

Modal.setAppElement('#root')

const Home = () => {

    const [task, setTask] = useState("");
    const [modal, setModal] = useState(false);
    const [list, setList] = useState([]);
    const [clear, setClear] = useState(false);

    useEffect(()=> {
        if(list.length > 0){
            setClear(false);
        }
        else{
            setClear(true);
        }
    }, [list]);

    const changeModal = () => {
        setModal(true);
    };

    const handleTask = () => {
        setList((prev) => {
            return [...prev, task]
        });
        setTask("");
        setModal(false);
    };

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const removeTask = (id) => {
        setList((prev)=> {
            return prev.filter((elem, i)=> {
                return i !== id
            })
        })
    };

    const removeAll = () => {
        setList([]);
    };

    return (
        <>
            <div className="todoContainer">
                <div className="upperContainer">
                    <div className="upperLeft">
                        <span className="task">Tasks</span>
                        <span className="list">List</span>
                    </div>
                    <div className="upperRight">
                        <span className="plus"><i className="fas fa-3x fa-plus-circle" onClick={changeModal}></i></span>
                        <span className="add">Add Task</span>
                    </div>
                </div>
                <ul className="taskList">
                    {
                        list.map((elem, i) => {
                            if(elem!== ""){
                                return <Task text={elem} key={i+1} onSelect={removeTask} id={i} />
                            }
                            else{
                                return null
                            }
                        })
                    }
                </ul>

                <div className={clear ? "clearHide": "clearAll"}>
                    <button onClick={removeAll}>Clear All</button>
                </div>
            </div>
            <Modal isOpen={modal} className="popUp">
                <div className="popupHeading">Add New Task</div>
                <div className="input"><input type="text" value={task} placeholder="Task..." onChange={handleChange} /></div>
                <button onClick={handleTask}>ADD</button>
            </Modal>


        </>
    )
};

export default Home;