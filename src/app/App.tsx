import {Suspense} from 'react';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import Sidebar from "widgets/Sidebar/ui/Sidebar/Sidebar";
import {useTranslation} from "react-i18next";
import { Navbar } from 'widgets/navbar';


const App = () => {
   const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={""}>
                <Navbar />
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter />
                </div>
            </Suspense>

        </div>
    );
};

export default App;
