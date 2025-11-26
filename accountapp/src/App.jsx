import { BrowserRouter, Route, Routes } from "react-router"
import AccountList from "./pages/AccountList"
import AccountWrite from "./pages/AccountWrite"
import AccountEdit from "./pages/AccountEdit"

function App() {

  return (
    <BrowserRouter>
      <div className="w-full h-full bg-[url('/bg.jpg')] bg-no-repeat bg-cover">
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[550px] h-[600px] m-[0_auto] bg-white rounded-[20px]">
          <Routes>
            <Route path="/" element={<AccountList/>}/>
            <Route path="/write" element={<AccountWrite/>}/>
            <Route path="/edit/:id" element={<AccountEdit/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
