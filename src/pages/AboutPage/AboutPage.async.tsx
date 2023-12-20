import {lazy} from "react";


export const AboutPageAsync = lazy(() => new Promise(resolve => {
    //@ts-ignore
    // Temporary, need to delete this line
    setTimeout(() => resolve(import('./AboutPage')), 1500)
}));
