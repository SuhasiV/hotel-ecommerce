export const dateRange = (date) => {
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const currentDate = new Date(start);
    const dates = [];

    while (currentDate <= end) {
      dates.push(currentDate.getTime()); // Push timestamp directly
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const alldates = getDatesInRange(date[0]?.startDate, date[0]?.endDate);
  return alldates;
};

export const availableRoom = (alldates, roomNumbers, room) => {
  const availableRoomList = [{}];
  let trueCount = 0;
  roomNumbers?.map((item) => {
    const isFound = item.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
    availableRoomList.push({ [item._id]: !isFound });
    if (!isFound) {
      trueCount++; // Increment count if true is encountered
    }
  });
  const trueCountNum = parseInt(trueCount);
  const trueRoomNum = parseInt(room);
  if (trueCountNum >= trueRoomNum) {
    return { roomsAvailable: true, availableRoomList };
  } else {
    return { roomsAvailable: false };
  }
};
