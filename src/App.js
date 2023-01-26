import './App.css'
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import NewCorres from './Components/NewCorres';
import Reminder from './Components/Reminder';
import Inbox from './Components/Inbox';
import Outbox from './Components/Outbox';
import Closed from './Components/Closed';
import Draft from './Components/Draft';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Dashboard/>
      <NewCorres/>
      <Reminder/>
      <Inbox/>
      <Outbox/>
      <Closed/>
      <Draft/>
    </div>
  );
}

export default App;
