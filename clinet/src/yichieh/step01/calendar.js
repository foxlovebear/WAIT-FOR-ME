import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
function DatePicker() {
    const [date, setDate] = useState(new Date());
    let year = date.getFullYear() + '年';
    let month = date.getMonth() + 1 + '月';
    let day = date.getDate() + '日';
    let DateToLocal = [year, month, day].join(' ');
    return (
        <div>
            <Calendar minDate={new Date()} maxDate={new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 13)} onChange={setDate} value={date} />
            <label>訂位日期</label>{" "}<input type="text" readonly="readOnly" value={DateToLocal} />
        </div>

    );
}
export default DatePicker;