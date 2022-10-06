import React, {useState} from "react";

const AddRecord = () => {
    
    const [record, setRecord] = useState({
        date:"",
        exercise:"",
        target:"",
        sets:"",
        reps:""
    })
    const handleChange = (e) => {
        setRecord([{
            ...record,
            [e.target.name]:e.target.value
        }])


    const handleAdd = (e) => {
        e.preventDefault()
        fetch("http://localhost:3000/records", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(record),
          });
    }     
       
    }

    return (
        <div >
            <form>
                <div className="">
                    <input type="date" className="border border-danger bg-info text-dark" name="date"></input>
                    <input type="text" placeholder="Add Exercise..." className="border border-danger bg-info text-dark " name="exercise"></input>
                    <input type="text" placeholder="Add Target..." className="border border-danger bg-info text-dark" name="target"></input>
                    <input type="text" placeholder="Add Sets..." className="border border-danger bg-info text-dark" name="sets"></input>
                    <input type="text" placeholder="Add Reps..." className="border border-danger bg-info text-dark" name="reps"></input>
                    <button className="btn btn-primary mb-1">Add</button>
                </div>
                
            </form>
        </div>
       
    )
}

export default AddRecord;