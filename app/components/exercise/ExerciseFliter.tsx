import { useState } from "react";
import { Button } from "../ui/buttons/Button"


export const ExerciseFilter = ({ }) => {

    const [activeButton, setActiveButton] = useState('ALL'); // Initially set the active button to 'ALL'

    const handleButtonClick = (buttonText: string) => {
        setActiveButton(buttonText);
    };

    return (
        <div className="flex justify-center join mt-7">
            <Button
                variant={activeButton === 'ALL' ? 'active' : 'default'}
                size='default'
                className='rounded-r-none'
                text="ALL" 
                onClick={()=>handleButtonClick('ALL')}
                />

            <Button
            variant={activeButton === 'BARBELL' ? 'active' : 'default'} 
            size='default' 
            className='rounded-none' 
            text="BARBELL" 
            onClick={()=>handleButtonClick('BARBELL')}
            />
            {/* <Button variant='default' size='default' className='rounded-none' text="DUMBBELS" />
            <Button variant='default' size='default' className='rounded-l-none' text="FREE WEIGHT" /> */}
        </div>
    )

}