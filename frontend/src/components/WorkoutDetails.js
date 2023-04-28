import { useState, } from "react"
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

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load(kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <button onClick={handleDelete}>Delete Workout</button>
        </div>
    )
}

export default WorkoutDetails