import { Dialog, IconButton } from '@mui/material';
import React, { createRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AlphabetTable from '../Language/AlphabetTable';
import ToggleButtons from './ToggleButtons';
import ClearIcon from '@mui/icons-material/Clear';
import DefinitionsSmallHelp from '../content/DefinitionsSmallHelp';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import PanCyrillicTable from '../PanCyrillic/PanCyrillicTable';
import { DISCLAIMER_TEXT, DOWNLOAD, LANG_TITLES_RED, LEGEND_BTNS, MAIN_MENU, TABLE } from '../../service/constants';

export const Brk = () => { return (String.fromCharCode('0x000A')) };

export const FontDisclaimer = () => {
    const language = useSelector(state => state.language);
    const cpage = useSelector(state => state.currentPage);
    const rus = useSelector(state => state.rus);
    const italic = useSelector(state => state.italic);

    return (<><p>{DISCLAIMER_TEXT[rus]}</p><Brk /><Brk />
        {(cpage == 2) && <>
            <p>
                {rus ? language?.name_rus : language?.name_eng}
                {!italic && ', ' + TABLE.italic[rus]}
            </p><Brk /><Brk />
            <p>
                {LANG_TITLES_RED.latinNames[rus]} {language?.alt_names_eng?.join(', ')}
            </p><Brk />
            <p>
                {LANG_TITLES_RED.langGroups[rus]} {rus ?
                    language?.language_group_rus?.join(', ') : language?.language_group_eng?.join(', ')}
            </p><Brk /><Brk />
            <p>{rus ? language?.description_rus : language?.description_eng}</p>
        </>}
    </>)
};

const Legend = ({ showtable, showhelp, showSort }) => {
    const panCyrSort = useSelector(state => state.panCyrSort);
    const cpage = useSelector(state => state.currentPage);
    const upcase = useSelector(state => state.upcase);
    const serif = useSelector(state => state.serif);
    const italic = useSelector(state => state.italic);
    const language = useSelector(state => state.language);
    const currentLang = useSelector(state => state.currentLang);
    const selectedLangs = useSelector(state => state.selectedLangs);
    const rus = useSelector(state => state.rus);
    const dispatch = useDispatch();


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

    const [opendialog, setOpenDialog] = useState(false);
    const handleClickOpen = () => {
        setOpenDialog(!opendialog);
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
            <div className='legendpartwrap'>
                <p className='togglebtnstitle'>{LEGEND_BTNS.parameters[rus]}</p>
                <div className='legendbtncontainer'>
                    <ToggleButtons titles={LEGEND_BTNS.serif} switcher={serif} handleClick={handleChangeSerif} />
                    <ToggleButtons titles={LEGEND_BTNS.case} switcher={upcase} handleClick={handleChangeCase} />
                    <ToggleButtons titles={LEGEND_BTNS.italic} switcher={italic} handleClick={handleChangeItalic} />
                </div>
            </div>

            {showSort &&
                <><hr className='legenddiv' />
                    <div className='legendpartwrap'>
                        <p className='togglebtnstitle'>{LEGEND_BTNS.sortTitle[rus]}</p>
                        <ToggleButtons titles={LEGEND_BTNS.sort} switcher={panCyrSort} handleClick={handleChangeSort} />
                    </div>
                </>
            }
            {showtable && <hr className='legenddiv' />}
            <div className='legendlastpartwrap'>
                {showtable && <>
                    <button className='togglebtns' onClick={handleClickOpen}>{LEGEND_BTNS.textTable[rus]}</button>
                </>}
                {showhelp && <>
                    <hr className='legenddiv legenddivlast' />
                    <LightTooltip title={<DefinitionsSmallHelp />}><button className='togglebtns' >?</button></LightTooltip>

                </>}
            </div>
        </div>
        <Dialog open={opendialog} onClose={handleClickOpen} scroll='paper' maxWidth='xl' >
            {(cpage == 1) &&
                <><div className='tableheader'><p className="tablestitle">{MAIN_MENU.panCyr[rus]}<button className='copytablebtn' onClick={downloadTxtFile}>{DOWNLOAD[rus]}</button></p><IconButton onClick={handleClickOpen} size="small"><ClearIcon /></IconButton></div>
                    <div className="tablecontainer">
                        <PanCyrillicTable />
                        <div className="copyarea invisible" ref={textfields}>
                            <FontDisclaimer />
                            <PanCyrillicTable simple />
                        </div>
                    </div></>}
            {(cpage == 2) &&
                <><div className='tableheader'>
                    <p className="tablestitle">
                        {`${rus ? language?.name_rus : language?.name_eng}${!italic ? ', ' + TABLE.italic[rus] : ""}`}
                        <button className='copytablebtn' onClick={downloadTxtFile}>{DOWNLOAD[rus]}</button>
                    </p><IconButton onClick={handleClickOpen} size="small"><ClearIcon /></IconButton></div>
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