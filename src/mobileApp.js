import React from "react";
import { useState } from "react";
import './mobileApp.scss';
import { FaCheck, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
 
 
function MobileApp() {
    const [count, setCount] = useState()
    const [modal, setModal] = useState(false);
    const [task, setTask] = useState("");
    const [total, setTotal] = useState(0)
 
 
    const [listbox, setListbox] = useState([{
        count: 0,
        task: ""
    }]);
    const add = (e, i) => {
        e.preventDefault();
        const newListbox = {
            id: listbox.length,
            task,
            count: 0,
        }
        let temp = [...listbox]
        temp[i] = newListbox;
        if (task) {
            setListbox(temp)
            setTask("")
 
        }
        else {
            alert("You should add items to display")
        }
        console.log(listbox)
 
    }
 
    const handledel = (i) => {
        const del = [...listbox]
        del.splice(i, 1)
        setListbox(del);
    }
 
    const quantityincrease = (i) => {
        const increase = [...listbox]
        increase[i].count++
        setListbox(increase)
    }
 
    const quantitydecrease = (i) => {
        const increase = [...listbox]
        increase[i].count--
        setListbox(increase)
    }
 
    const toggleModal = () => {
        setModal(!modal)
        totalcalc()
    }
 
    const toggleModalclose = () => {
        setModal(false);
    }
 
    const totalcalc = () => {
        let total = 0;
        listbox.map(tot => total += tot.count * 15)
        setTotal(total)
    }
 
 
 
    return (
        <div className="header">
            <div className="head">
                Outscape
            </div>
            <hr />
 
            <div>
 
                {listbox.map((box, i) => {
                    return (
                        box.task ?
                            <div className="content">
                                <input className="inputboxlist" type="text" key={box.id} value={box.task} />
                                <span className="countspace">
                                    <button className="minusbtn" key={count} onClick={() => quantitydecrease(i)}>
                                        <FaMinus />
                                    </button>
                                    <button className="countbutton" key={box.count} type="text" >{box.count}</button>
                                    <button className="plusbtn" key={count} onClick={() => quantityincrease(i)}>
                                        <FaPlus />
                                    </button>
                                </span>
                            </div>
                            :
                            <div className="enterbox">
                                <input className="inputbox" type="text" placeholder="Enter the text" value={task} onChange={(e) => setTask(e.target.value)} />
                                <button className="checkbtn" type='submit' onClick={(e) => add(e, i)} >
                                    <FaCheck />
                                </button>
                                <button className="crossbtn" onClick={() => handledel(i)}>
                                    <FaTimes />
                                </button>
 
                            </div>
 
                    )
                })}
                <button className="addbtn" onClick={() => {
                    let temp = [...listbox]
                    temp.push({});
                    setListbox(temp);
                }
                }>+Add</button>
 
            </div>
 
 
            <button className="submit" onClick={toggleModal}>Submit</button>
 
            {modal && (
                <div className="modal">
                    <div className="modal-head">
                        <h3 className="bill">Bill</h3>
                        <button className="close" onClick={toggleModalclose}>
                            <FaTimes />
                        </button>
                    </div>
                    <div className="table-container">
                        <table >
                            <tr className="table-head">
                                <th>List</th>
                                <th>Count</th>
                                <th>Amount</th>
 
                            </tr>
 
                            {
                                listbox.map(tab => (
                            <tr className="table-row" key={tab.id}>
                                        <td>{tab.task}</td>
                                        <td>&times;&nbsp;{tab.count}</td>
                                        <td>Rs.{tab.count * 15}</td>
                                    </tr>
 
                                ))
                            }
                        </table>
 
                        <div className="table-footer">
                            <span className="amount">Total Amount</span>
                            <span className="rupee">Rs.{total}</span>
                        </div>
                    </div>
 
                </div>
            )}
  </div>
    )
}

export default MobileApp;