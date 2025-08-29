import { ViewType } from "../../utils/types";

function Header({ currentView, onViewChange, currentDate, onDateChange }) {
  const navigate = (direction) => {
    const newDate = new Date(currentDate);
    
    switch (currentView) {
      case ViewType.DAY:
        newDate.setDate(newDate.getDate() + direction);
        break;
      case ViewType.THREE_DAYS:
        newDate.setDate(newDate.getDate() + (direction * 3));
        break;
      case ViewType.WEEK:
        newDate.setDate(newDate.getDate() + (direction * 7));
        break;
    }
    
    onDateChange(newDate);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <header className='bg-gray-300 w-full
      sm:h-[4vh] 
      md:h-[5vh] 
      lg:h-[6vh] 
      xl:h-[7vh] 
      flex justify-between items-center px-4'
    >
      <div className="flex items-center gap-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Календарь</h1>
        <select 
          value={currentView} 
          onChange={(e) => onViewChange(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value={ViewType.DAY}>День</option>
          <option value={ViewType.THREE_DAYS}>3 дня</option>
          <option value={ViewType.WEEK}>Неделя</option>
        </select>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => navigate(-1)}
          className="text-2xl font-bold"
        >
          ←
        </button>
        <span className="font-medium">{formatDate(currentDate)}</span>
        <button 
          onClick={() => navigate(1)}
          className="text-2xl font-bold"
        >
          →
        </button>
      </div>
    </header>
  );
}

export default Header;