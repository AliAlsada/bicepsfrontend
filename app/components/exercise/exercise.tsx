import { useState } from "react";

type ExerciseProps = {
    name: string,
    muscle: string,
}



export const Exercise: React.FC<ExerciseProps> = ({name, muscle}) => {

    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    };


    return(
        <div className={`rounded-xl ${ isActive ? 'bg-violet-700 hover:bg-violet-800' : 'bg-gray-700 hover:bg-gray-800'}`}
        onClick={toggleActive}>
            <div className="ml-5 p-2">
                <p className="font-bold pt-1">{name}</p>
                <p className="font-extralight">{muscle}</p>
            </div>
        </div>
    )
}