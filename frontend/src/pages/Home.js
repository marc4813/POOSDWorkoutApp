import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails.js";
import WorkoutForm from "../components/WorkoutForm.js";
import { useContext } from "react";
import { UpdateContext } from "../context/updateContext.js";

const Home = () => {
    const [workouts, setWorkouts] = useState(null);
    const newData = useContext(UpdateContext);
    const [title, setTitle] = useState("");
    const isLoggedIn = localStorage.getItem("username") ? true : false;
    const username = localStorage.getItem('username');

    
    useEffect(() => {
        const fetchWorkouts = async () => {
        const response = await fetch(`/api/workouts?username=${username}&title=${title}`);
        const json = await response.json();

        if (response.ok) {
            setWorkouts(json);
        }
        };

        fetchWorkouts();
    }, [newData, title, username]);

    const handleSearch = (event) => {
        setTitle(event.target.value);
    };

    return (
        <>
        {isLoggedIn ? (
            <div className="home">
            <div className="search-bar">
                <WorkoutForm />
                <br />
                <input type="text" placeholder="Search" value={title} onChange={handleSearch} />
            </div>
            
            <div className="workouts">
                {workouts &&
                workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
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