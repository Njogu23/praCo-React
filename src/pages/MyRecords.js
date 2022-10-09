import React, {useEffect, useState} from "react";
import AddRecord from "../components/AddRecord";

const MyRecords = () => {
    const [data, setData] = useState([])
    const [record, setRecord] = useState({
        date:"",
        exercise:"",
        target:"",
        sets:"",
        reps:""
    })


    const handleChange = (e) => {
        e.preventDefault()
        setRecord({
            ...record,
            [e.target.name]:e.target.value
        })}
        console.log()

        const handleSubmit = (e) => {
            e.preventDefault()
            fetch("https://praco-api.herokuapp.com/records", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(record)
              });

              setRecord({
                date:"",
                exercise:"",
                target:"",
                sets:"",
                reps:""
            })
               
        }

    useEffect(()=> {
        fetch("https://praco-api.herokuapp.com/records")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error(err))
    },[record])

    console.log(data)

    const tableData = data.map((item)=> {
        return(
            <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.exercise}</td>
                <td>{item.target}</td>
                <td>{item.sets}</td>
                <td>{item.reps}</td>
            </tr>
        )
    })


    return (
        <div className="bg-secondary">
            <AddRecord handleChange={handleChange} handleSubmit={handleSubmit} record={record}/>
            <table className="table table-bordered table-striped table-light">
            <thead>
                <tr>
                    <th >
                        <h4 >Date</h4>
                    </th>
                    <th >
                        <h4>Exercise</h4>
                    </th>
                    <th >
                        <h4>Target</h4>
                    </th>
                    <th >
                        <h4>Sets</h4>
                    </th>
                    <th >
                        <h4>Reps</h4>
                    </th>
                </tr>
            </thead>
            <tbody>
                {tableData}
            </tbody>
            </table>
        </div>
        
    )
}

export default MyRecords;