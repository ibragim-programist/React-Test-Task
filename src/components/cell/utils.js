export const getCellClass = (data) => {
    if (!data) return 'bg-available cursor-pointer hover:bg-green-300';
    if (data.type === 'booked') return 'bg-booked cursor-pointer';
    if (data.type === 'bookedByOther') return 'bg-gray-400 cursor-not-allowed';
    return 'bg-gray-200';
};

export const isLessonStart = (data, timeSlot) => {
    return data && new Date(data.start).getHours() === timeSlot.hour && 
        new Date(data.start).getMinutes() === timeSlot.minute;
}

export const isLessonEnd = (data, timeSlot) => {
    return data && new Date(data.end).getHours() === timeSlot.hour && 
        new Date(data.end).getMinutes() === timeSlot.minute;
}
