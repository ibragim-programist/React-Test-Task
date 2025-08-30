import { useState } from "react";
import Calendar from "./components/calendar/Calendar";
import Header from "./components/header/Header";
import Settings from "./components/settings/Settings";
import { ViewType } from "./utils/types";
import { mockData } from "./utils/getMockData";

const App = () => {
  const [currentView, setCurrentView] = useState(ViewType.WEEK);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [slotDuration, setSlotDuration] = useState(30);

  const [lessons, SetLessons] = useState(mockData);

  const handleSlotSelect = (slot) => {
    console.log('Selected slot:', slot);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header 
        currentView={currentView} 
        onViewChange={setCurrentView}
        currentDate={currentDate}
        onDateChange={setCurrentDate}
      />
      <Calendar 
        view={currentView}
        startDate={currentDate}
        lessons={lessons}
        slotDuration={slotDuration}
        onSlotSelect={handleSlotSelect}
      />
      <Settings 
        slotDuration={slotDuration}
        onSlotDurationChange={setSlotDuration}
      />
    </div>
  );
};

export default App;