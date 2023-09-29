import { CheckButton } from "../../ui/CheckButton"
import { SetType } from "./SetType"
import { WeightAndRepsInputs } from "../../ui/WeightAndRepsInput"


export const ExerciseSet = () => {
    return(
        <div className="flex gap-5">
            <SetType/>
            <WeightAndRepsInputs/>
            <WeightAndRepsInputs/>
            <CheckButton/>     
        </div>      
    )
}