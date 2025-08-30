import { useState, useEffect } from "react";
import useDebounce from "../../hooks/useDebounce";

function Settings({ slotDuration, onSlotDurationChange }) {
    const [localDuration, setLocalDuration] = useState(slotDuration);
    const debouncedDuration = useDebounce(localDuration, 400);
    
    useEffect(() => {
        if (debouncedDuration !== slotDuration) {
            onSlotDurationChange(debouncedDuration);
        }
    }, [debouncedDuration, onSlotDurationChange, slotDuration]);
    
    const handleChangeGranularity = (e) => {
        const value = Number(e.target.value);
        if (value >= 5 && value <= 60 && value % 60 === 0) {
            setLocalDuration(value);
        }
    }
    
    return (
        <footer className='bg-gray-300 w-full
            sm:h-[4vh] 
            md:h-[5vh] 
            lg:h-[6vh] 
            xl:h-[7vh] 
            flex flex-col justify-center items-center'
        >
            <h2 className="font-medium mb-1">Длительность слота (минуты)</h2>
            <input
                className="text-center w-20 border rounded"
                type="number"
                min="5"
                max="60"
                step="5"
                value={localDuration}
                onChange={handleChangeGranularity}
            />
        </footer>
    )
}

export default Settings;