import { Calendar } from "primereact/calendar";
<Calendar
  value={date}
  onChange={(e) => setDate(e.value)}
  numberOfMonths={2}
  selectionMode="range"
/>;
