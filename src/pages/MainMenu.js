import { Accordion, AccordionDetails, AccordionSummary, Dialog, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParams, getURLstring } from "./functions";
import DefinitionsContent from "./content/DefinitionsContent";
import ClearIcon from '@mui/icons-material/Clear';
import MenuIcon from '@mui/icons-material/Menu';
import Langlist from "./LangList/LangList";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const MainMenu = () => {
    const currentPage = useSelector(state => state.currentPage);
    const rus = useSelector(state => state.rus);
    const currentLang = useSelector(state => state.currentLang);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentPage) {
            let cpage = getParams('pg') ? Number(getParams('pg')) : 2;
            if ((cpage !== 1) && (cpage !== 2) && (cpage !== 3)) cpage = 2;
            let uilang = rus ? rus : 0;
            if (getParams('ui') == 'ru') uilang = 1
            else if (getParams('ui') == 'en') uilang = 0

            let curlng = getParams('lang');

            dispatch({ type: 'switchPage', payload: cpage });
            if (uilang) {
                dispatch({ type: 'toggleRuEn', payload: uilang });
            };
            if (curlng !== 'null') {
                dispatch({ type: 'switchLang', payload: curlng });
            };
        };
        window.history.pushState(null, null, getURLstring(rus, currentLang, currentPage))
    }, [currentPage, rus, currentLang]);


    const [opendialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(!opendialog);
    };

    const handleChangePancyrillic = () => {
        dispatch({ type: 'switchPage', payload: 1 });
    };

    const handleChangeLanguages = () => {
        dispatch({ type: 'switchPage', payload: 2 });
    };

    const handleChangeAbout = () => {
        dispatch({ type: 'switchPage', payload: 3 });
    };

    return (<>
        <div className='wrap_topmenu'>
            <p className='top_name'>Cyrillic reference book</p>
            <nav className='top_menu'>
                <p><button className={`mainmenubtn${currentPage == 3 ? ' mainmenubtnactive' : ''}`} onClick={handleChangeAbout}>About</button></p>
                <p><button className={`mainmenubtn${currentPage == 2 ? ' mainmenubtnactive' : ''}`} onClick={handleChangeLanguages}>Languages</button></p>
                <p><button className={`mainmenubtn${currentPage == 1 ? ' mainmenubtnactive' : ''}`} onClick={handleChangePancyrillic}>Pan-Cyrillic character set</button></p>
                <p><button className='mainmenubtn' onClick={handleClickOpen}>Definitions</button></p>
            </nav>
        </div>
        <div className='wrap_mobmenu'>
            <Accordion sx={{ boxShadow: 0, p: 0, borderRadius: 0 }}>
                <AccordionSummary expandIcon={<MenuIcon sx={{ color: '#ffffff' }} />}
                    sx={{ p: 0, bgcolor: '#243235' }}>
                    <p className="top_name">Cyrillic reference book</p>
                </AccordionSummary>
                <AccordionDetails sx={{ p: '0 0 20px 0', bgcolor: '#243235' }}>
                    <p><button className={`mobmenubtn${currentPage == 3 ? ' mobmenubtnactive' : ''}`} onClick={handleChangeAbout}>About</button></p>
                    <p><button className={`mobmenubtn${currentPage == 2 ? ' mobmenubtnactive' : ''}`} onClick={handleChangeLanguages}>Languages</button></p>
                    <p><button className={`mobmenubtn${currentPage == 1 ? ' mobmenubtnactive' : ''}`} onClick={handleChangePancyrillic}>Pan-Cyrillic character set</button></p>
                    <p><button className='mainmenubtn' onClick={handleClickOpen}>Definitions</button></p>
                </AccordionDetails>
            </Accordion>
        </div>
        {currentPage !== 3 && <>
            <div className="mobcsswrap">
                <div className='mobilemenuwrapwhite'>
                    <Accordion sx={{ boxShadow: 0, p: 0, borderRadius: 0 }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ p: 0, borderRadius: 0 }}>
                            <p className="mobmenutitle">Select language</p>
                        </AccordionSummary>
                        <AccordionDetails sx={{ p: 0 }}>
                            <Langlist />
                        </AccordionDetails>
                    </Accordion>
                    <hr className="legenddivhoriz" />
                </div>
            </div>
        </>}
        <Dialog open={opendialog} onClose={handleClickOpen} scroll='paper' maxWidth='xl' >
            <div className='tableheader'><p className='tablestitle'><span className="langtitle">Definitions</span></p><IconButton onClick={handleClickOpen} size="small"><ClearIcon /></IconButton></div>
            <div className="tablecontainer">
                <div className="tablecontainer">
                    <DefinitionsContent /></div>
            </div>
        </Dialog>
    </>)
};

export default MainMenu;