import React, { useState } from "react";
import "./App.css";

function App() {
    const [courseOne, setCourseOne] = useState("");
    const [courseTwo, setCourseTwo] = useState("");
    const [courseThree, setCourseThree] = useState("");

    const handleCourseOne = (e) => {
        setCourseOne(e.target.value);
    };

    const handleCourseTwo = (e) => {
        setCourseTwo(e.target.value);
    };
    const handleCourseThree = (e) => {
        setCourseThree(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (courseOne.toLowerCase() === "calculus" ||
            courseTwo.toLowerCase() === "calculus" ||
            courseThree.toLowerCase() === "calculus") {
            console.log("looks good")
        } else {
            alert("You are required to take Calculus")
        }
        const userData = {
            courseOne: courseOne,
            courseTwo: courseTwo,
            courseThree: courseThree,
        };

        try{
            const add = await fetch("http://localhost:5000/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            console.log(add)
        }catch(err){
            console.error()
        }
    };

    return (
        <div className="Heading">
            <h1>Canoe University</h1>
            <div className="App">
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Course 1"
                        type="text"
                        onChange={handleCourseOne}
                    />
                    <input
                        placeholder=" Course 2"
                        type="text"
                        onChange={handleCourseTwo}
                    />
                    <input
                        placeholder=" Course 3"
                        type="text"
                        onChange={handleCourseThree}
                    />
                    <button type="submit" className="btn">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
