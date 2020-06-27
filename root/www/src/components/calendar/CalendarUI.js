import React from 'react'
import CalendarToast from 'tui-calendar'
import "tui-calendar/dist/tui-calendar.css";
// Do i need these? - These are extra components. finish the calendar first
// import 'tui-date-picker/dist/tui-date-picker.css';
// import 'tui-time-picker/dist/tui-time-picker.css';

const CalendarUI = () => {
      // TOAST UI
      const calendarUI = new CalendarToast('#calendarui', {
        defaultView: 'month',
        taskView: true,
        template: {
          monthDayname: function(dayname) {
            return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
          }
        }
      })
    return (
        <div>Hello</div>
    );
};

export default CalendarUI;