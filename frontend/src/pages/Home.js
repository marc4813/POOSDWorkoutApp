import { useEffect, useState } from "react";
import { useContext } from "react";
import { UpdateContext } from "../context/updateContext.js";
import WorkoutDetails from "../components/WorkoutDetails.js";
import WorkoutForm from "../components/WorkoutForm.js";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    const newData = useContext(UpdateContext);
    
    //localStorage.setItem('username', "Arwin");
    const isLoggedIn = localStorage.getItem("username") ? true : false;

    useEffect(() => {
        const fetchWorkouts = async () => {
        const response = await fetch("/api/workouts");
        const json = await response.json();

        if (response.ok) {
            setWorkouts(json);
        }
        };

        fetchWorkouts();
    }, [newData]);

    return (
        <>
        {isLoggedIn ? (
            <div className="home">
            <div className="workouts">
                {workouts &&
                workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
            </div>
        ) : (
            <div className="login-warning">
            <p>Please log in first to view this page</p>
            </div>
        )}
        </>
    );
};

export default Home;