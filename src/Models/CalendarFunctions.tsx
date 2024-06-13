import { format,
     addMonths,
      subMonths,
       startOfMonth,
        endOfMonth, 
        eachDayOfInterval, 
        isSameMonth, 
        formatDate,
        startOfWeek,
        endOfWeek,
        addDays} from 'date-fns';
import React from 'react';

        export const addMonthsToDate = (date: Date,
            months: number) =>  {
            return addMonths(date, months);
        }
     export const substractMonthsFromDate = (date: Date,
            months: number) =>  {
            return subMonths(date, months);
        }
   
        export const startOfCurrentMonth = (date: Date) => {
            return startOfMonth(date)
        }
        export const endOfCurrentMonth = (date: Date) => {
            return endOfMonth(date)
        }
        export const eachDayOfMonthOfInterval = (date: Date): Date[] => {
            const monthStart = startOfMonth(date);
            const monthEnd = endOfMonth(date);
            return eachDayOfInterval({ start: monthStart, end: monthEnd });
        }
        export const formattedDate = (date: Date): string => {
            return format(date, 'MMMM yyyy')
        }
        // Function to check if given day is from the current month
        export const isDayOfSameMonth = (date: Date, currentMonth: Date) => {
            return isSameMonth(date, currentMonth)
        }
// Function to generate calendar data for a given month
export const generateCalendar = (date: Date): Date[][] => {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday is the first day of the week
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 }); // Sunday is the first day of the week

    const calendar: Date[][] = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
        const week: Date[] = [];
        for (let i = 0; i < 7; i++) {
            week.push(currentDate);
            currentDate = addDays(currentDate, 1);
        }
        calendar.push(week);
    }

    return calendar;
};
// Function to format calendar data
export const formatCalendar = (calendar: Date[][]): string[][] => {
    return calendar.map((week) => week.map((day) => format(day, 'd')));
};