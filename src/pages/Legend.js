import { Dialog, IconButton } from '@mui/material';
import React, { createRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlphabetTable from './Language/AlphabetTable';
import ToggleButtons from './Language/ToggleButtons';
import ClearIcon from '@mui/icons-material/Clear';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import DefinitionsSmallHelp from './content/DefinitionsSmallHelp';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import PanCyrillicTable from './PanCyrillic/PanCyrillicTable';

export const Brk = () => { return (String.fromCharCode('0x000A')) };

export const FontDisclaimer = () => {
    const language = useSelector(state => state.language);
    const cpage = useSelector(state => state.currentPage);

    return (<>
        {(cpage == 2) && <><p>{language?.name_eng}</p><Brk /><Brk /></>}
        <p>***Important: not all characters are displayed correctly with the system font and may be invisible in this file, so pay attention to unicodes. To correctly display all the characters on the screen, install the necessary fonts (PT Sans Expert - github.com/paratype/paratype.github.io/tree/main/cyrillic-languages/fonts/web). </p><Brk /><Brk />
        {(cpage == 2) && <><p>Latin names: {language?.alt_names_eng?.join(', ')}</p><Brk />
            <p>Language groups: {language?.language_group_eng?.join(', ')}</p><Brk /><Brk />
            <p>{language?.description_eng}</p></>}
    </>)
};

const Legend = ({ showtable, showhelp, showSort }) => {
    const panCyrSort = useSelector(state => state.panCyrSort);
    const cpage = useSelector(state => state.currentPage);
    const upcase = useSelector(state => state.upcase);
    const serif = useSelector(state => state.serif);
    const italic = useSelector(state => state.italic);
    const language = useSelector(state => state.language);
    const alltable = useSelector(state => state.alltable);
    const currentLang = useSelector(state => state.currentLang);
    const selectedLangs = useSelector(state => state.selectedLangs);


    const LightTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#ebf2f3',
            color: 'rgba(0, 0, 0, 0.87)',
            boxShadow: theme.shadows[1],
            fontSize: '14px',
        },
    }));

    const dispatch = useDispatch();

    const handleChangeCase = () => {
        dispatch({ type: 'toggleCase' });
        console.log('dispatch case');
    };

    const handleChangeSerif = () => {
        dispatch({ type: 'toggleSerif' });
        console.log('dispatch serif');
    };

    const handleChangeItalic = () => {
        dispatch({ type: 'toggleItalic' });
    };

    const handleChangeSort = () => {
        dispatch({ type: 'switchPanCyrSort' });
    };

    const subtitles = {
        titlebtnCase: ['Upper', 'Прописные', 'Lower', 'Строчные'],
        titlebtnSerif: ['Serif', 'Антиква', 'Sans', 'Гротеск'],
        titlebtnItalic: ['Normal', 'Прямой', 'Italic', 'Курсив'],
        titlebtnSort: ['Pan-Cyrillic', 'Пан-кириллическая', 'Unicodes', 'Юникоды']
    };

    // const [openinfo, setOpenInfo] = useState(false);
    // const handleInfoOpen = () => {
    //     setOpenInfo(!openinfo);
    // };

    const [opendialog, setOpenDialog] = useState(false);
    const handleClickOpen = () => {
        setOpenDialog(!opendialog);
    };

    const [openfilters, setOpenFilters] = useState(true);
    const handleClickOpenFilters = () => {
        setOpenFilters(!openfilters);
    };

    const textfields = createRef();

    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([textfields.current.textContent], {
            type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        let prefix = (cpage == 1) ? '_charset' : '_alphabet';
        let name = (cpage == 1) ? ((selectedLangs.length != 0) ? selectedLangs.join('_') : currentLang) : currentLang;
        element.download = name + prefix;
        document.body.appendChild(element);
        element.click();
    };

    return (<>
        <div className='legendbg'>
            <div className={`filterswrap${openfilters ? '' : ' hidden'}`}>
                <div className='legenbtnswrap'>
                    <div className='legenbtns legenbtnsright'>
                        <p className='togglebtnstitle'>Parameters: </p><ToggleButtons titles={subtitles.titlebtnSerif} switcher={serif} handleClick={handleChangeSerif} />
                    </div>
                    <div className='legenbtns legenbtnsright'><ToggleButtons titles={subtitles.titlebtnCase} switcher={upcase} handleClick={handleChangeCase} /></div>
                    <div className='legenbtns'><ToggleButtons titles={subtitles.titlebtnItalic} switcher={italic} handleClick={handleChangeItalic} /></div>
                </div>
                <div className='legenbtnswrap'>
                    {showSort &&
                        <><hr className='legenddiv' /><div className='legenbtns'><p className='togglebtnstitle'>Sort: </p><ToggleButtons titles={subtitles.titlebtnSort} switcher={panCyrSort} handleClick={handleChangeSort} /></div>
                        </>
                    }
                    {showtable &&
                        <><hr className='legenddiv' /><div className='legenbtns'>
                            <button className='togglebtns' onClick={handleClickOpen}>Text table</button></div></>
                    }
                    {showhelp &&
                        <div className='legenbtns legenbtnsright'>
                            <hr className='legenddiv' /><LightTooltip title={<DefinitionsSmallHelp />}><button className='togglebtns' >?</button></LightTooltip>
                        </div>
                    }
                </div>
            </div>
            {/* {openfilters ? <hr className='legenddiv' /> : <p className='togglebtnstitle_on'>Parameters</p>}
                <IconButton onClick={handleClickOpenFilters} sx={{ m: '0 -5px 0 -5px' }} size="small">
                    {openfilters ?
                        <KeyboardArrowLeftIcon fontSize="small" /> : <KeyboardArrowRightIcon fontSize="small" />}
                </IconButton> */}
        </div>
        <Dialog open={opendialog} onClose={handleClickOpen} scroll='paper' maxWidth='xl' >
            {(cpage == 1) &&
                <><div className='tableheader'><p className="tablestitle">Pan-Cyrillic character set<button className='copytablebtn' onClick={downloadTxtFile}>Download txt file</button></p><IconButton onClick={handleClickOpen} size="small"><ClearIcon /></IconButton></div>
                    <div className="tablecontainer">
                        <PanCyrillicTable />
                        <div className="copyarea invisible" ref={textfields}>
                            <FontDisclaimer />
                            <PanCyrillicTable simple />
                        </div>
                    </div></>}
            {(cpage == 2) &&
                <><div className='tableheader'><p className="tablestitle">{`${language?.name_eng} (normal)`}<button className='copytablebtn' onClick={downloadTxtFile}>Download txt file</button></p><IconButton onClick={handleClickOpen} size="small"><ClearIcon /></IconButton></div>
                    <div className="tablecontainer">
                        <AlphabetTable />
                        <div className="copyarea invisible" ref={textfields}>
                            <FontDisclaimer />
                            <AlphabetTable simple />
                        </div>
                    </div></>}
        </Dialog>
    </>);
};

export default Legend;