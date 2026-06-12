import { useState } from "react";

const AvailabilityCalendar = ({ unavailableDates }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startDayIndex = firstDayOfMonth.getDay();
  const totalDays = lastDayOfMonth.getDate();

  const days = [];

  for (let i = 0; i < startDayIndex; i++) {
    days.push(null);
  }

  for (let day = 1; day <= totalDays; day++) {
    days.push(new Date(year, month, day));
  }

  const normalizeDate = (date) =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

  const isUnavailable = (date) => {
    if (!date) return false;

    const calendarDate = normalizeDate(date);

    return unavailableDates.some(({ startDate, endDate }) => {
      const start = normalizeDate(new Date(startDate));
      const end = normalizeDate(new Date(endDate));

      return calendarDate >= start && calendarDate <= end;
    });
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  return (
    <div className="calendarContainer">
      <h3 style={{ marginBottom: 8, fontSize: 16 }}>
        Availability calendar
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <button className="moveButton" onClick={goToPreviousMonth}>◀</button>

        <strong className="monthYear" style={{ fontSize: 14 }}>
          {currentMonth.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </strong>

        <button className="moveButton" onClick={goToNextMonth}>▶</button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          marginBottom: 5,
        }}
      >
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div
            key={d}
            style={{
              textAlign: "center",
              fontSize: 11,
              color: "#666",
              fontWeight: 500,
            }}
          >
            {d}
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 6,
        }}
      >
        {days.map((date, index) => {
          const unavailable = isUnavailable(date);

          return (
            <div
              key={index}
              style={{
                height: 40,
                border: "1px solid #ddd",
                backgroundColor: !date
                  ? "transparent"
                  : unavailable
                  ? "#ffcccc"
                  : "#f9f9f9",
                color: unavailable ? "#999" : "#000",
                textAlign: "center",
                lineHeight: "40px",
                cursor: unavailable ? "not-allowed" : "pointer",
              }}
            >
              {date ? date.getDate() : ""}
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 10, fontSize: 12, color: "#555" }}>
        <span style={{ color: "#ff4d4d", marginRight: 6 }}>■</span>
        Unavailable dates
      </div>

      <style>{`
        .calendarContainer h3, .calendarContainer .monthYear{
          font-weight: 500;
          color: #111827;
        }
        
        .moveButton{
          padding: 6px 10px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
        }
      `}</style>

    </div>
  );
};

export default AvailabilityCalendar;