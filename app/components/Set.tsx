import { CheckButton } from "./ui/CheckButton"
import { SetType } from "./ui/SetType"
import { WeightAndRepsInputs } from "./ui/WeightAndRepsInput"

export const Set = () => {
    return(
        <div className="flex gap-5">
            <SetType/>
            <WeightAndRepsInputs/>
            <WeightAndRepsInputs/>
            <CheckButton/>     
        </div>      
    )
}