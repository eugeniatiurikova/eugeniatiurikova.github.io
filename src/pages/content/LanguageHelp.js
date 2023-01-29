import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { Dialog, IconButton } from "@mui/material";
import DefinitionsContent from "./DefinitionsContent";
import { MAIN_MENU } from "../../service/constants";
import { useDispatch, useSelector } from "react-redux";

const LanguageHelp = () => {
    const rus = useSelector(state => state.rus);
    const dispatch = useDispatch();

    const handleChangeDefinitions = () => {
        dispatch({ type: 'switchPage', payload: 4 });
    };

    const handleChangePancyrillic = () => {
        dispatch({ type: 'switchPage', payload: 1 });
    };

    if (rus) return (<>
        <p className='langtitle'>Языки</p>
        <p className='langinfo redtext'>Выберите Язык из&nbsp;списка слева.<br />Повторное нажатие отменит выбор.</p>
        <p className='langinfo_next'>На странице Языка находятся знаки, которые поддерживают этот Язык. Кроме алфавита, к&nbsp;ним относятся:
            <li>- знаки диалектов;</li>
            <li>- исторические и локальные формы;</li>
            <li>- эквивалентные альтернативы и&nbsp;другие важные знаки.</li></p>
        <p className='langinfo_next'>Все условные обозначения можно посмотреть в&nbsp;разделе «<span className="aspan" onClick={handleChangeDefinitions}>Определения</span>».</p>
        <p className='langinfo_next'>В блоке «Знаки Языка» есть все глифы, необходимые для&nbsp;поддержки Языка, и&nbsp;юникоды к&nbsp;ним.</p>
        <p className='langinfo_next'><span className='redtext'>Важно: </span>Если&nbsp;вы, находясь на&nbsp;странице Языка, перейдёте в&nbsp;раздел «<span className="aspan" onClick={handleChangePancyrillic}>Вся&nbsp;кириллица</span>», в&nbsp;таблице подсветятся глифы, поддерживающие этот Язык.</p>
        <p className='langtitle_next'>Дополнительно</p>
        <p className='langinfo_next'>Выбрать регистр, тип шрифта (антиква или&nbsp;гротеск), прямое или&nbsp;курсивное начертание можно на&nbsp;панели настроек на&nbsp;странице Языка.</p>
        <p className='langinfo_next'>Там&nbsp;же находится опция «Таблица». В&nbsp;ней представлены знаки поддержки Языка (символы и&nbsp;их&nbsp;юникоды) и&nbsp;другая полезная информация. Таблицу можно скачать в&nbsp;виде текстового файла.</p>
        <p className='langinfo'>&nbsp;</p>
    </>)

    else return (<>
        <p className='langtitle'>Languages</p>
        <p className='langinfo redtext'>Select a&nbsp;Language from the&nbsp;list on&nbsp;the&nbsp;left. Clicking again will cancel the&nbsp;selection.</p>
        <p className='langinfo_next'>The characters that support the&nbsp;Languages in&nbsp;the&nbsp;list include:
            <li>- alphabet letters;</li>
            <li>- characters of the Languages’ dialects;</li>
            <li>- historical and&nbsp;localized forms;</li>
            <li>- equivalent alternatives and&nbsp;other necessary symbols.</li></p>
        <p className='langinfo_next'>See the&nbsp;<span className="aspan" onClick={handleChangeDefinitions}>Definitions</span> section for&nbsp;more information about the&nbsp;terminology and&nbsp;legend keys&nbsp;used.</p>
        <p className='langinfo_next'>The "Character set" block on&nbsp;a&nbsp;Language page contains all the&nbsp;unique glyphs required to&nbsp;support a&nbsp;language, along with their respective unicodes.</p>
        <p className='langinfo_next'><span className='redtext'>Note: </span>If you go&nbsp;the&nbsp;“Pan-Cyrillic character set” menu section when browsing a&nbsp;Language page, the&nbsp;glyphs supporting that Language will be highlighted in&nbsp;the&nbsp;table.</p>
        <p className='langtitle_next'>In addition</p>
        <p className='langinfo_next'>On a&nbsp;Language page, you can select the&nbsp;case, font type (serif or&nbsp;sans-serif), and&nbsp;upright or&nbsp;italic styles in&nbsp;the&nbsp;"Parameters" settings panel.</p>
        <p className='langinfo_next'>Click on&nbsp;the&nbsp;"Text Table" option to&nbsp;see a&nbsp;summary table with the Language support signs. It&nbsp;includes characters, their unicodes, and&nbsp;other useful information. You can download the&nbsp;table as&nbsp;a&nbsp;text file.</p>
        <p className='langinfo'>&nbsp;</p>
    </>)
};
export default LanguageHelp;


// const [opendialog, setOpenDialog] = useState(false);

// const handleClickOpen = () => {
//     setOpenDialog(!opendialog);
// };

// <Dialog open={opendialog} onClose={handleClickOpen} scroll='paper' maxWidth='xl' >
// <div className='tableheader'><p className='tablestitle'><span className="langtitle">{MAIN_MENU.definitions[rus]}</span></p><IconButton onClick={handleClickOpen} size="small"><ClearIcon /></IconButton></div>
// <div className="tablecontainer">
//     <div className="tablecontainer">
//         <DefinitionsContent /></div>
// </div>
// </Dialog>