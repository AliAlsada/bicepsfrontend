"use client"; // This is a client component 👈🏽


import { getExercises } from "@/app/services/api/exercises";
import { useEffect, useState } from "react"
import { Exercise } from "../exercise/exercise"
import { Button } from "./buttons/Button";
import { ExerciseFilter } from "../exercise/ExerciseFliter";


//useState
type Exercise = {
    id: string;
    name: string;
    muscle: string;
}


export const AddExerciseButton = () => {

    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [clear, setClear] = useState<boolean>(false);

    /**
     * this method job is to uncheck the chosen exercises after the user closes the exercises list tap
     * by changing the state of the "clear" when the user clicks on "close"
     * also it will change the state to false, when the user tryies to add an exercise to his workout
     */
    const clearActiveExercises = (reset: boolean) => {
        setClear(reset);
    };

    useEffect(() => {
        const exercisesList = async () => {
            const res = await getExercises();
            setExercises(res)
        };
        exercisesList();
    }, [])


    return (<>
        {/* The button to open modal */}
        <label htmlFor="my_modal_6" className="btn rounded-md w-44" onClick={() => clearActiveExercises(false)}>ADD EXERCISE</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-center">Exercises</h3>


                {/* give this component a list of the items that we want to filter */}
                <ExerciseFilter />

                <ul>
                    {exercises.map(exercise => (
                        <li key={exercise.id} className="m-4">{<Exercise name={exercise.name} muscle={exercise.muscle} clear={clear} />} </li>
                    ))}
                </ul>


                <div className="flex gap-5">
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn" onClick={() => clearActiveExercises(true)}>Close!</label>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn" onClick={() => clearActiveExercises(true)}>Add</label>
                    </div>

                </div>
            </div>
        </div>
    </>)
}