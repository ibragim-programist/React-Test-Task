import { useMemo } from 'react';
import DayHeader from "../dayHeader/dayHeader";
import RawOfCells from "../rawOfCells/rawOfCells";
import { ViewType } from '../../utils/types';

const Calendar = ({ view, startDate, lessons, slotDuration, onSlotSelect }) => {
  const daysInView = useMemo(() => {
    switch (view) {
      case ViewType.DAY: return 1;
      case ViewType.THREE_DAYS: return 3;
      case ViewType.WEEK: return 7;
      default: return 7;
    }
  }, [view]);

  const timeSlots = useMemo(() => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += slotDuration) {
        slots.push({
          hour,
          minute,
          label: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
        });
      }
    }
    return slots;
  }, [slotDuration]);

  const days = useMemo(() => {
    return Array.from({ length: daysInView }, (_, i) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      return date;
    });
  }, [startDate, daysInView]);

  const getCellData = (day, timeSlot) => {
    const slotStart = new Date(day);
    slotStart.setHours(timeSlot.hour, timeSlot.minute, 0, 0);
    
    const slotEnd = new Date(slotStart);
    slotEnd.setMinutes(slotStart.getMinutes() + slotDuration);

    const lesson = lessons.find(l => {
      const lessonStart = new Date(l.start);
      const lessonEnd = new Date(l.end);
      
      return (
        (slotStart >= lessonStart && slotStart < lessonEnd) ||
        (slotEnd > lessonStart && slotEnd <= lessonEnd) ||
        (slotStart <= lessonStart && slotEnd >= lessonEnd)
      );
    });

    return lesson || null;
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="grid grid-cols-1 min-w-max">
        <div className={`grid ${
          view === ViewType.WEEK ? 'grid-cols-8' : 
          view === ViewType.THREE_DAYS ? 'grid-cols-4' : 'grid-cols-2'
        } sticky top-0 z-10 bg-white`}>
          <div className="border border-gray-300 p-2 font-bold text-center">Время</div>
          {days.map((day, index) => (
            <DayHeader 
              key={index} 
              day={day.toLocaleDateString('ru-RU', { 
                weekday: 'short', 
                day: 'numeric' 
              })}
            />
          ))}
        </div>

        {timeSlots.map((timeSlot, timeIndex) => (
          <RawOfCells
            key={timeIndex}
            timeSlot={timeSlot}
            days={days}
            getCellData={getCellData}
            onSlotSelect={onSlotSelect}
            view={view}
            slotDuration={slotDuration}
          />
        ))}
      </div>
    </div>
  );
};

export default Calendar;