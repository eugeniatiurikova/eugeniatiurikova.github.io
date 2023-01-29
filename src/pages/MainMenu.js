import { Accordion, AccordionDetails, AccordionSummary, Dialog, IconButton } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefinitionsContent from "./content/DefinitionsContent";
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import Langlist from "./LangList/LangList";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { MAIN_MENU } from "../service/constants";

const ButtonRuEn = () => {
    const rus = useSelector(state => state.rus);
    const dispatch = useDispatch();

    const handleChangeUILanguage = () => {
        dispatch({ type: 'toggleRuEn', payload: (rus === 0) ? 1 : 0 });
    }

    return (
        <button className='mainmenubtn mainmenuruen' onClick={handleChangeUILanguage}>
            <span className={rus ? 'mainmenubtnactive' : ''}>RU</span>&nbsp;|&nbsp;<span className={rus ? '' : 'mainmenubtnactive'}>EN</span></button>
    )
}

const MainMenu = () => {
    const currentPage = useSelector(state => state.currentPage);
    const rus = useSelector(state => state.rus);
    const dispatch = useDispatch();

    const handleChangePancyrillic = () => {
        dispatch({ type: 'switchPage', payload: 1 });
    };

    const handleChangeLanguages = () => {
        dispatch({ type: 'switchPage', payload: 2 });
    };

    const handleChangeAbout = () => {
        dispatch({ type: 'switchPage', payload: 3 });
    };

    const handleChangeDefinitions = () => {
        dispatch({ type: 'switchPage', payload: 4 });
    };

    return (<>
        <div className='wrap_topmenu'>
            <p className='top_name'>{MAIN_MENU.logo[rus]}</p>
            <nav className='top_menu'>
                <p><button className={`mainmenubtn${currentPage == 3 ? ' mainmenubtnactive' : ''}`} onClick={handleChangeAbout}>{MAIN_MENU.about[rus]}</button></p>
                <p><button className={`mainmenubtn${currentPage == 2 ? ' mainmenubtnactive' : ''}`} onClick={handleChangeLanguages}>{MAIN_MENU.languages[rus]}</button></p>
                <p><button className={`mainmenubtn${currentPage == 1 ? ' mainmenubtnactive' : ''}`} onClick={handleChangePancyrillic}>{MAIN_MENU.panCyr[rus]}</button></p>
                <p><button className='mainmenubtn' onClick={handleChangeDefinitions}>{MAIN_MENU.definitions[rus]}</button></p>
                <p><ButtonRuEn /></p>
            </nav>
        </div>
        <div className='wrap_mobmenu'>
            <Accordion sx={{ boxShadow: 0, p: 0, borderRadius: 0 }}>
                <AccordionSummary expandIcon={<MenuIcon sx={{ color: '#ffffff' }} />}
                    sx={{ p: 0, bgcolor: '#243235' }}>
                    <p className="top_name_mobmenu"><span>{MAIN_MENU.logo[rus]}</span><ButtonRuEn /></p>
                </AccordionSummary>
                <AccordionDetails sx={{ p: '0 0 20px 0', bgcolor: '#243235' }}>
                    <p><button className={`mobmenubtn${currentPage == 3 ? ' mobmenubtnactive' : ''}`} onClick={handleChangeAbout}>{MAIN_MENU.about[rus]}</button></p>
                    <p><button className={`mobmenubtn${currentPage == 2 ? ' mobmenubtnactive' : ''}`} onClick={handleChangeLanguages}>{MAIN_MENU.languages[rus]}</button></p>
                    <p><button className={`mobmenubtn${currentPage == 1 ? ' mobmenubtnactive' : ''}`} onClick={handleChangePancyrillic}>{MAIN_MENU.panCyr[rus]}</button></p>
                    <p><button className='mainmenubtn' onClick={handleChangeDefinitions}>{MAIN_MENU.definitions[rus]}</button></p>
                </AccordionDetails>
            </Accordion>
        </div>
        {currentPage !== 3 && <>
            <div className="mobcsswrap">
                <div className='mobilemenuwrapwhite'>
                    <Accordion sx={{ boxShadow: 0, p: 0, borderRadius: 0 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0, borderRadius: 0 }}>
                            <p className="mobmenutitle">{MAIN_MENU.select[rus]}</p>
                        </AccordionSummary>
                        <AccordionDetails sx={{ p: 0 }}>
                            <Langlist />
                        </AccordionDetails>
                    </Accordion>
                    <hr className="legenddivhoriz" />
                </div>
            </div>
        </>}
    </>)
};

export default MainMenu;