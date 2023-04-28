import { useState, } from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const WorkoutDetails = ({workout}) => {

    const [visible, setVisible] = useState(true);

    const handleDelete = async (e) => {
        e.preventDefault()
        // Delete Workout
        const response = await fetch('api/workouts', {
            method: 'DELETE',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok)
        {
            console.log("Cannot Delete.")
        }

        // Set state for updated data
        else
        {
            console.log("Delete Successful. Reloading Components...")
            setVisible((prev) => !prev);
        }
    }
    
    const handleUpdate = async (e) => {

        console.log("we here")
        const response = await fetch('api/workouts', {
            method: 'PATCH',
            body: {
                "_id" : workout._id,
                "title" : e.target.title,
                "load" : e.target.load,
                "reps" : e.target.reps
            },
            headers: {
                'Content-Type' : 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok)
        {
            console.log("Cannot Update.")
        }

        // Set state for updated data
        else
        {
            console.log("Update Successful. Reloading Components...")
            setVisible((prev) => !prev);
        }
    }

    return (
        
        <div className="workout-details">
            
            {visible && (<h4>{workout.title}</h4>)}
            {visible && (<p><strong>Load(kg): </strong>{workout.load}</p>)}
            {visible && (<p><strong>Reps: </strong>{workout.reps}</p>)}
            {visible && (<p>{workout.createdAt}</p>)}
            {visible && (<button onClick={handleDelete}>Delete Workout</button>)}
            {visible && (<Popup trigger= {<button>Edit Workout</button>} position="top center">
                <div>
                    <form className="update" onSubmit={handleUpdate}>
                        <h3>Update Workout</h3>
                        <label>Exercise Title: </label>
                        <input type="text" id="title" defaultValue={workout.title}/>
                        <label>Load(in kg): </label>
                        <input type="number" id="load" defaultValue={workout.load}/>
                        <label>Reps: </label>
                        <input type="number" id="reps" defaultValue={workout.reps}/>
                        <button type="submit">Update Workout</button>
                    </form>
                </div>
            </Popup>)}
        </div>
    )
}

export default WorkoutDetails
