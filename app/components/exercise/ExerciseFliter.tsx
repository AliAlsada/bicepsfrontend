import { useState } from "react";
import { Button } from "../ui/buttons/Button"


type ExerciseFilterProps = {
    variationsList: string[];
}

export const ExerciseFilter: React.FC<ExerciseFilterProps> = ({ variationsList }) => {

    const [activeButton, setActiveButton] = useState('ALL'); // Initially set the active button to 'ALL'

    const handleButtonClick = (buttonText: string) => {
        setActiveButton(buttonText);
    };

    const lastIndex = variationsList.length - 1;

    const variationsListButtons = variationsList.map((variation, index) =>

        <Button
            variant={activeButton === variation ? 'active' : 'default'}
            size='default'
            className={!index ? 'rounded-r-none' : index === lastIndex ? 'rounded-l-none' : 'rounded-none'}
            text={variation}
            onClick={() => handleButtonClick(variation)}
            key={index}
        />
    );

    return (

        <div className="flex justify-center join mt-7">
            <ul>{variationsListButtons}</ul>
        </div>

    )
}