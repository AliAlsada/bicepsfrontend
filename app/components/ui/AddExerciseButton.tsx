"use client"; // This is a client component 👈🏽


import { getExercises } from "@/app/services/api/exercises";
import { useEffect, useState } from "react"
import { Exercise } from "../exercise/exercise"


//useState
type Exercise = {
    id: string;
    name: string;
    muscle: string;
}


export const AddExerciseButton = () => {

    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [clear, setClear] = useState<boolean>(false);

    const clearActiveExercises = (reset:boolean) => {
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

                <div className="flex justify-center join mt-7">
                    <input className="join-item btn" type="radio" name="options" aria-label="All"/>
                    <input className="join-item btn" type="radio" name="options" aria-label="barbell" />
                    <input className="join-item btn" type="radio" name="options" aria-label="dumbbels" />
                    <input className="join-item btn" type="radio" name="options" aria-label="free weight" />
                </div>

                <ul>
                    {exercises.map(exercise => (
                        <li key={exercise.id} className="m-4">{<Exercise name={exercise.name} muscle={exercise.muscle} clear={clear}/>} </li>
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