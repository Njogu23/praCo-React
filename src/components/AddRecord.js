import React from "react";

const AddRecord = () => {
    return (
        <div >
            <form>
                <div className="">
                    <input type="date" className="border border-danger bg-info text-dark"></input>
                    <input type="text" placeholder="Add Exercise..." className="border border-danger bg-info text-dark "></input>
                    <input type="text" placeholder="Add Target..." className="border border-danger bg-info text-dark"></input>
                    <input type="text" placeholder="Add Sets..." className="border border-danger bg-info text-dark"></input>
                    <input type="text" placeholder="Add Reps..." className="border border-danger bg-info text-dark"></input>
                    <button className="btn btn-primary mb-1">Add</button>
                </div>
                
            </form>
        </div>
       
    )
}

export default AddRecord;