"use client"; // This is a client component 👈🏽


import { getExercises } from "@/app/services/api/exercises";
import { useEffect, useState } from "react"
import { Exercise } from "../exercise/exercise"


//useState
type Exercise = {
    name: string;
    muscle: string;
}


export const AddExerciseButton = () => {

    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [close, setClose] = useState<boolean>(false);


    useEffect(() => {
        const exercisesList = async () => {
            const res = await getExercises();
            setExercises(res)
        };
        exercisesList();
    }, [])

    useEffect(() => {
        
    }, [close])

    

    return (<>
        {/* The button to open modal */}
        <label htmlFor="my_modal_6" className="btn rounded-md w-44 ">ADD EXERCISE</label>

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
                        <li className="m-4">{<Exercise name={exercise.name} muscle={exercise.muscle}/>} </li>
                    ))}
                </ul>


                <div className="flex gap-5">
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn" onClick={() => setClose(true)}>Close!</label>
                    </div>

                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn">Add</label>
                    </div>
                </div>
            </div>
        </div>
    </>)
}