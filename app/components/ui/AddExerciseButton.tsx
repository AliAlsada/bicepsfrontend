"use client"; // This is a client component 👈🏽


import { getExercises } from "@/app/services/api/exercises";
import { useEffect, useState } from "react"
import { Exercise } from "../exercise/Exercise"
import { ExerciseFilter } from "../exercise/ExerciseFliter";


//useState
type Exercise = {
    id: string;
    name: string;
    muscle: string;
}

//the list of the exercises variations
const variationsList = ["ALL", "BARBELL", "DUMBBELS", "FREE WEIGHT"];


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
        <label htmlFor="my_modal_6" className="btn rounded-md w-full" onClick={() => clearActiveExercises(false)}>ADD EXERCISE</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />

        <div className="modal">

            <div className="relative modal-box h-4/6">

                <div className="fixed top-0 left-0 right-2">
                    <div className="modal-action">
                        <label
                            htmlFor="my_modal_6"
                            className="btn btn-sm btn-circle btn-ghost"
                            onClick={() => clearActiveExercises(true)}>
                            x
                        </label>
                    </div>

                </div>

                <h3 className="font-bold text-lg text-center">Exercises</h3>

                <ExerciseFilter variationsList={variationsList} />


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