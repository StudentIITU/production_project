import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import AppLink, {AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (

        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}></div>
            <AppLink theme ={AppLinkTheme.secondary} to={'/'} className={cls.mainLink}>Main</AppLink>
            <AppLink theme ={AppLinkTheme.secondary} to={'/about'} className={cls.AboutLink}>About</AppLink>
        </div>

    );
};

export default Navbar;


