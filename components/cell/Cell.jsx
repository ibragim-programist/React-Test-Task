import { getCellClass, isLessonEnd, isLessonStart } from "./utils";

function Cell({ data, timeSlot, day, onSelect, slotDuration }) {
  
  const handleClick = () => {
    if (!data || data.type === 'booked') {
      const slotStart = new Date(day);
      slotStart.setHours(timeSlot.hour, timeSlot.minute, 0, 0);
      
      const slotEnd = new Date(slotStart);
      slotEnd.setMinutes(slotStart.getMinutes() + slotDuration);

      onSelect?.({ start: slotStart, end: slotEnd });
    }
  };

  const isStart = isLessonStart(data, timeSlot);
  const isEnd = isLessonEnd(data, timeSlot);

  return (
    <div 
      className={`${getCellClass(data)} flex items-center justify-center border border-gray-300 p-1 text-xs
        min-h-[40px] min-w-[80px] relative
        ${data ? 'border-t-2 border-b-2' : ''}
        ${isStart ? 'border-t-4 border-t-blue-500 rounded-t-md' : ''}
        ${isEnd ? 'border-b-4 border-b-blue-500 rounded-b-md' : ''}
        ${data && !isStart && !isEnd ? 'border-t-0 border-b-0' : ''}
      `}
      onClick={handleClick}
      title={data?.student || 'Свободно'}
    >
      {data && isStart ? (
        <div className="text-center">
          <p className="font-medium text-[10px] leading-tight">{data.student}</p>
          <p className="text-[9px] opacity-75 leading-tight">
            {new Date(data.start).toLocaleTimeString('ru-RU', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })} - {new Date(data.end).toLocaleTimeString('ru-RU', { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </p>
        </div>
      ) : data ? (
        <div className="w-full h-full bg-inherit" />
      ) : (
        <p className="text-xs">Свободно</p>
      )}
    </div>
  );
}

export default Cell;