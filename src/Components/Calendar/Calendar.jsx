import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
const calendarTemplate = {
  name: "Calendar",
  key: 0,
  bar: (
    <div className="row m-0 content-top-bar">
      <div className="col-auto d-flex align-items-center justify-content-around me-auto">
        <img
          className="content-top-bar-pic me-2"
          src="src/assets/calendar_month_white_24dp.svg"
        />
        <div className="text-white">Calendar</div>
      </div>
    </div>
  ),
  layout: (tab, intoFlow, getDate) => {
    return (
      <div className="content-body">
        <div className="row">
          <div className="col-md-6 pt-4 calendar">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <StaticDatePicker defaultValue={dayjs(getDate())} />
            </LocalizationProvider>
          </div>
          <div className="col-md-6 pt-4 pb-4 border-start border-secondary">
            <div className="d-flex flex-wrap align-items-center justify-content-evenly">
              {tab.content.map((item) => {
                if (item.src !== undefined) {
                  return (
                    <div className="mt-4 px-3 calendar-item" key={item.name}>
                      <div
                        className="calendar-item-pic"
                        onClick={() => intoFlow(tab.key, item.name)}
                      ></div>
                      <div className="d-flex calendar-item-desc">
                        <div className="me-auto">{item.name}</div>
                        <div className="ms-auto">
                          Edited {item.time} hours ago
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className="mt-4 px-3 library-item"
                      key={item.name}
                    ></div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    );
  },
  content: [
    { src: "", name: "Card", time: "1" },
    { src: "", name: "PDF", time: "1" },
    { src: "", name: "Video", time: "2" },
    { src: "", name: "PDF1", time: "2" },
    { src: "", name: "Card1", time: "3" },
    { src: "", name: "Card2", time: "3" },
    { src: "", name: "Card3", time: "4" },
    { src: "", name: "PDF2", time: "4" },
    { src: "", name: "Card4", time: "5" },
  ],
};
export default calendarTemplate;
