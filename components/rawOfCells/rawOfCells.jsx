import Cell from "../cell/Cell";
import TimeCell from "../timeCell/TimeCell";
import { ViewType } from '../../utils/types';

function RawOfCells({ timeSlot, days, getCellData, onSlotSelect, view, slotDuration }) {
  return (
    <div className={`grid ${
      view === ViewType.WEEK ? 'grid-cols-8' : 
      view === ViewType.THREE_DAYS ? 'grid-cols-4' : 'grid-cols-2'
    }`}>
      <TimeCell time={timeSlot.label} />
      {days.map((day, dayIndex) => {
        const cellData = getCellData(day, timeSlot);
        return (
          <Cell 
            key={dayIndex} 
            data={cellData}
            timeSlot={timeSlot}
            day={day}
            onSelect={onSlotSelect}
            slotDuration={slotDuration}
          />
        );
      })}
    </div>
  );
}

export default RawOfCells;