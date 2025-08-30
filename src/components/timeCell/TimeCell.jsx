
function TimeCell({ time }) {
  return (
    <div className="flex items-center justify-center border border-gray-300 p-2 font-medium bg-gray-100 text-sm">
      {time}
    </div>
  );
}

export default TimeCell;