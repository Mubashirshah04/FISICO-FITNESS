import { WEEKLY_SCHEDULE, DaySchedule } from '../types';

export interface CurrentStatus {
  isOpen: boolean;
  statusText: string;
  nextEventText: string;
  currentDayIndex: number;
  localTimeFormatted: string;
}

/**
 * Returns gym status calculated against Pakistan Standard Time (PKT, UTC+5).
 */
export function getGymCurrentStatus(): CurrentStatus {
  // Get time in UTC+5 (Pakistan Standard Time)
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const pktDate = new Date(utc + 3600000 * 5);

  const dayIndex = pktDate.getDay(); // 0 is Sun, 1 is Mon...
  const currentHours = pktDate.getHours();
  const currentMinutes = pktDate.getMinutes();
  const currentTotalMinutes = currentHours * 60 + currentMinutes;

  const hours12 = currentHours % 12 || 12;
  const ampm = currentHours >= 12 ? 'PM' : 'AM';
  const minutesFormatted = currentMinutes.toString().padStart(2, '0');
  const localTimeFormatted = `${hours12}:${minutesFormatted} ${ampm} PKT`;

  const todaySchedule = WEEKLY_SCHEDULE.find((s) => s.dayIndex === dayIndex);

  if (!todaySchedule || todaySchedule.isClosed || todaySchedule.sessions.length === 0) {
    return {
      isOpen: false,
      statusText: 'Closed Today',
      nextEventText: 'Opens Monday at 8:00 AM',
      currentDayIndex: dayIndex,
      localTimeFormatted,
    };
  }

  // Check today's sessions
  for (const session of todaySchedule.sessions) {
    const [openH, openM] = session.open.split(':').map(Number);
    const [closeH, closeM] = session.close.split(':').map(Number);
    const openTotal = openH * 60 + openM;
    const closeTotal = closeH * 60 + closeM;

    if (currentTotalMinutes >= openTotal && currentTotalMinutes < closeTotal) {
      return {
        isOpen: true,
        statusText: 'Open Now',
        nextEventText: `Session ends at ${session.closeDisplay}`,
        currentDayIndex: dayIndex,
        localTimeFormatted,
      };
    }
  }

  // If before first session today
  const firstSession = todaySchedule.sessions[0];
  const [firstH, firstM] = firstSession.open.split(':').map(Number);
  if (currentTotalMinutes < firstH * 60 + firstM) {
    return {
      isOpen: false,
      statusText: 'Currently Closed',
      nextEventText: `Opens today at ${firstSession.openDisplay}`,
      currentDayIndex: dayIndex,
      localTimeFormatted,
    };
  }

  // If in afternoon break between morning and evening sessions
  if (todaySchedule.sessions.length > 1) {
    const secondSession = todaySchedule.sessions[1];
    const [secondH, secondM] = secondSession.open.split(':').map(Number);
    const [firstCloseH, firstCloseM] = firstSession.close.split(':').map(Number);
    const firstCloseTotal = firstCloseH * 60 + firstCloseM;
    const secondOpenTotal = secondH * 60 + secondM;

    if (currentTotalMinutes >= firstCloseTotal && currentTotalMinutes < secondOpenTotal) {
      return {
        isOpen: false,
        statusText: 'Afternoon Intermission',
        nextEventText: `Evening session opens at ${secondSession.openDisplay}`,
        currentDayIndex: dayIndex,
        localTimeFormatted,
      };
    }
  }

  // If after last session today
  const nextDayIndex = (dayIndex + 1) % 7;
  const nextDay = WEEKLY_SCHEDULE.find((s) => s.dayIndex === nextDayIndex);
  const nextOpening =
    nextDay && !nextDay.isClosed && nextDay.sessions.length > 0
      ? `Opens ${nextDay.dayName} at ${nextDay.sessions[0].openDisplay}`
      : 'Opens Monday at 8:00 AM';

  return {
    isOpen: false,
    statusText: 'Closed for the Night',
    nextEventText: nextOpening,
    currentDayIndex: dayIndex,
    localTimeFormatted,
  };
}
