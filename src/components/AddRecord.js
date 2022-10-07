import React from "react";

const AddRecord = ({handleChange, handleSubmit, record}) => {


    return (
        <div >
            <form onSubmit={handleSubmit}>
                    <input type="date" className="border border-danger bg-info text-dark" name="date" value={record.date} onChange={handleChange}/>
                    <input type="text" placeholder="Add Exercise..." className="border border-danger bg-info text-dark " name="exercise" value={record.exercise} onChange={handleChange}/>
                    <input type="text" placeholder="Add Target..." className="border border-danger bg-info text-dark" name="target" value={record.target} onChange={handleChange}/>
                    <input type="text" placeholder="Add Sets..." className="border border-danger bg-info text-dark" name="sets" value={record.sets} onChange={handleChange}/>
                    <input type="text" placeholder="Add Reps..." className="border border-danger bg-info text-dark" name="reps" value={record.reps} onChange={handleChange}/>
                    <button className="btn btn-primary mb-1" type="submit">Add</button>
            </form>
        </div>
       
    )
}

export default AddRecord;