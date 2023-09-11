import { useState } from "react"
import { NoteInput } from "../components/ui/NoteInput"
import { AddExerciseButton } from "../components/ui/AddExerciseButton"




export default function Workout() {

    return (
        <>
            <div className="h-screen flex justify-center items-center">
                <div className="flex flex-col gap-5">
                    <NoteInput/>
                    <AddExerciseButton/>
                    <button className="btn btn-sm w-44">CANCEL WORKOUT</button>
                </div>
            </div>
        </>
    )
}