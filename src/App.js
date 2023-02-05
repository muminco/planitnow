import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CalendarView from "./components/CalendarView";
import EventDetails from "./components/EventDetails";
import ShareEvent from "./components/ShareEvent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div style={{display: 'flex'}}>
        <CalendarView />
        <EventDetails />
        <ShareEvent />
      </div>
    </div>
  );
}

export default App;
