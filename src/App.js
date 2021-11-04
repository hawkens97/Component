import ProfilePhoto from "./component/profile/ProfilePhoto";
import logo from "./logo.svg";
import "./App.css";
import FullName from "./component/profile/FullName.js";
import Address from "./component/profile/Address";

function App() {
  return (
    <div>
      <FullName />

      <ProfilePhoto />

      <Address />
    </div>
  );
}

export default App;
