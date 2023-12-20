import React, {Component, FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_KEY, Theme, ThemeContext} from "./ThemeContext";

const defaultThemeContext = localStorage.getItem(LOCAL_STORAGE_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC = ({children}) => {
    const [theme, setState] = useState<Theme>(defaultThemeContext);



    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setState
    }), [theme])
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;