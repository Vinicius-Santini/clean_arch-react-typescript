import { BrowserRouter, Routes, Route } from "react-router-dom"
import makeGameList from "../factories/pages/game-list-factory"
import makeGameDetails from "../factories/pages/game-details-factory"

function Router() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={makeGameList} />
                <Route path="/game/:id" Component={makeGameDetails} />
            </Routes>
        </BrowserRouter>
     );
}

export default Router;