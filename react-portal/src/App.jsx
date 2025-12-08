import { Outlet } from "react-router-dom";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Header />
      <main className="py-4 px-6">
<Outlet/>
      </main>
     
    </>
  );
}

export default App;
