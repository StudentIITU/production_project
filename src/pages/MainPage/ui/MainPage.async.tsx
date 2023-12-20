import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    //@ts-ignore
    // Temporary, need to delete this line
    setTimeout(() => resolve(import('./mainPage')), 1500)
}));
