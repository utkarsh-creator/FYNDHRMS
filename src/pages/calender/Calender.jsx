import React, { useState, useEffect, useRef } from "react";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarWidth, setCalendarWidth] = useState(0);
  const [eventsWidth, setEventsWidth] = useState(300); // Initial width of the events section
  const [sidebarOpen, setSidebarOpen] = useState(false); // State for sidebar visibility
  const eventsRef = useRef(null);

  // Sample events data with different types
  const events = {
    7: [
      { type: 'birthday', name: 'Jay Sawant', company: 'FYND - IT', ea: 'Divya Shah' },
      { type: 'wedding', name: 'Parth Sawant', company: 'FYND - IT', ea: 'Komal Rao' },
      { type: 'work', name: 'Soham Dev', company: 'FYND - IT', ea: 'Roma Shaikh' },
      { type: 'birthday', name: 'Jay Sawant', company: 'FYND - IT', ea: 'Divya Shah' },
      { type: 'wedding', name: 'Parth Sawant', company: 'FYND - IT', ea: 'Komal Rao' },
      { type: 'work', name: 'Soham Dev', company: 'FYND - IT', ea: 'Roma Shaikh' },
      { type: 'birthday', name: 'Jay Sawant', company: 'FYND - IT', ea: 'Divya Shah' },
      { type: 'wedding', name: 'Parth Sawant', company: 'FYND - IT', ea: 'Komal Rao' },
      { type: 'work', name: 'Soham Dev', company: 'FYND - IT', ea: 'Roma Shaikh' },
    ],
    8: [
      { type: 'wedding', name: 'Parth Sawant', company: 'FYND - IT', ea: 'Komal Rao' },
    ],
    9: [
      { type: 'work', name: 'Soham Dev', company: 'FYND - IT', ea: 'Roma Shaikh' },
    ],
    // Add more events here
  };

  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const handleResize = () => setCalendarWidth(document.querySelector("#calendar").offsetWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const handlePrevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  const handleDateClick = (day) => {
    setSelectedDate(day);
    setSidebarOpen(true); // Open sidebar when a date is selected
  };

  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const startWidth = eventsRef.current.offsetWidth;

    const onMouseMove = (e) => {
      const newWidth = startWidth + (e.clientX - startX);
      setEventsWidth(newWidth);
    };

    const onMouseUp = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen); // Toggle sidebar visibility
  };

  const days = [];
  for (let i = 0; i < firstDayIndex; i++) {
    days.push(<div style={styles.empty} key={"empty" + i}></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const isSelected = i === selectedDate;
    const hasEvent = events[i];
    const uniqueEventTypes = hasEvent ? [...new Set(hasEvent.map(e => e.type))] : [];

    days.push(
      <div
        style={{
          ...styles.day,
          ...(isSelected ? styles.selectedDay : {}),
          height: `${calendarWidth / 9.5}px`,
        }}
        key={i}
        onClick={() => handleDateClick(i)}
      >
        <span style={isSelected ? styles.selectedText : {}}>{i}</span>
        <div style={styles.iconsContainer}>
          {uniqueEventTypes.map((type, index) => (
            <div key={index} style={styles.icon}>
              {type === 'birthday' && '🎂'}
              {type === 'wedding' && '💍'}
              {type === 'work' && '🎉'}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const renderEvents = () => {
    if (!selectedDate || !events[selectedDate]) return null;

    return (
      <div
        ref={eventsRef}
        style={{
          ...styles.eventsContainer,
          width: `${eventsWidth}px`,
          display: sidebarOpen ? "flex" : "none",
        }}
      >
        <div style={styles.eventsContent}>
          {events[selectedDate].map((event, index) => (
            <div key={index} style={styles.eventCard}>
              <div style={styles.eventHeader}>
                <div style={styles.eventIcon}>
                  {event.type === 'birthday' && '🎂'}
                  {event.type === 'wedding' && '💍'}
                  {event.type === 'work' && '🎉'}
                </div>
                <div><strong>{event.name}</strong></div>
              </div>
              <div><strong>Company:</strong> {event.company}</div>
              <div><strong>EA:</strong> {event.ea}</div>
            </div>
          ))}
        </div>
        <div
          style={styles.resizeHandle}
          onMouseDown={handleMouseDown}
        ></div>
        <button
          style={styles.closeButton}
          onClick={handleSidebarToggle}
        >
          {sidebarOpen ? "X" : "O"}
        </button>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.calendarContainer}>
        <header style={styles.header}>
          <button onClick={handlePrevMonth} style={styles.arrowButton}>&lt;</button>
          <h2>{months[date.getMonth()]} {date.getFullYear()}</h2>
          <button onClick={handleNextMonth} style={styles.arrowButton}>&gt;</button>
        </header>
        <div style={styles.calendar} id="calendar">
          <div style={styles.weekdays}>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
            <div>Sun</div>
          </div>
          <div style={styles.days}>{days}</div>
        </div>
      </div>
      {renderEvents()}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    maxWidth: "100vw",
    maxHeight: "100vh",
    overflow: "hidden",
  },
  calendarContainer: {
    flex: "1",
    padding: "10px",
    backgroundColor: "#f9f9f9",
    overflow: "auto",
    position: "relative",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  arrowButton: {
    backgroundColor: "#6200ea",
    color: "#fff",
    border: "none",
    padding: "8px",
    cursor: "pointer",
    borderRadius: "5px",
    fontSize: "16px",
  },
  calendar: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    maxHeight: "calc(100vh - 150px)", // Adjust height here
  },
  weekdays: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: "5px",
    fontSize: "14px",
    color: "#333",
  },
  days: {
    display: "grid",
    gridTemplateColumns: "repeat(7, 1fr)",
    gap: "2px",
  },
  day: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    textAlign: "center",
    cursor: "pointer",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    color: "#333",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    minHeight: "40px",
  },
  selectedDay: {
    backgroundColor: "#6200ea",
    color: "#fff",
    borderRadius: "5px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
  },
  selectedText: {
    color: "#fff",
  },
  iconsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "5px",
  },
  icon: {
    fontSize: "14px",
  },
  empty: {
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    minHeight: "40px",
  },
  eventsContainer: {
    backgroundColor: "#e3f2fd",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    padding: "10px",
    marginLeft: "10px",
    overflow: "auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.3s ease",
  },
  eventsContent: {
    maxHeight: "calc(100vh - 80px)", // Adjust this value if needed
    overflowY: "auto",
  },
  eventCard: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    marginBottom: "10px",
  },
  eventHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
  },
  eventIcon: {
    marginRight: "10px",
    fontSize: "16px",
  },
 
  closeButton: {
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "#6200ea",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    alignSelf: "flex-start",
    fontSize: "14px",
  },
};

export default Calender;
