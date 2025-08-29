export const mockData = [
    {
      id: 1,
      type: 'booked',
      start: new Date(2025, 7, 29, 10, 0),
      end: new Date(2025, 7, 29, 11, 0), // 1 час
      student: 'Иван Иванов'
    },
    {
      id: 2,
      type: 'bookedByOther',
      start: new Date(2025, 7, 30, 14, 0),
      end: new Date(2025, 7, 30, 15, 0), // 1 час
      student: 'Петр Петров'
    },
    {
      id: 3,
      type: 'booked',
      start: new Date(2025, 7, 28, 10, 0),
      end: new Date(2025, 7, 28, 11, 30), // 1.5 часа
      student: 'Николай Петров'
    },
    {
      id: 4,
      type: 'bookedByOther',
      start: new Date(2025, 7, 31, 14, 0),
      end: new Date(2025, 7, 31, 15, 30), // 1.5 часа
      student: 'Ибрагим Рабаданов'
    },
    {
      id: 5,
      type: 'bookedByOther',
      start: new Date(2025, 7, 27, 14, 0),
      end: new Date(2025, 7, 27, 16, 0), // 2 часа
      student: 'Денис Борисов'
    }
];