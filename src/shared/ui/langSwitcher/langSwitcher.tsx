import {classNames} from "shared/lib/classNames/classNames";
import cls from './langSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface langSwitcherProps {
    className?: string;
}

export const langSwitcher = ({className}: langSwitcherProps) => {

    const {t, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
            <Button className={classNames(cls.langSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                    onClick={toggle}>
                {t('Язык')}
            </Button>

    );
};

export default langSwitcher;
