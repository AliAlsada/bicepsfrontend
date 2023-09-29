import { useState } from "react"
import { NoteInput } from "../components/ui/NoteInput"
import { AddExerciseButton } from "../components/ui/AddExerciseButton"
import {ExerciseSet} from "../components/exercise/set/ExerciseSet"



export default function Workout() {

    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="flex flex-col gap-5">
                    <NoteInput/>

                    <ExerciseSet/>

                    <AddExerciseButton/>
                    <button className="btn btn-sm w-full">CANCEL WORKOUT</button>
                </div>
            </div>
        </>
    )
}