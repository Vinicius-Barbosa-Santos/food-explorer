import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from '../routes/appRoutes'
import { AuthRoutes } from '../routes/authRoutes'

export const Routes = () => {
    return (
        <BrowserRouter>
            <AppRoutes /> 
        </BrowserRouter>
    )
}