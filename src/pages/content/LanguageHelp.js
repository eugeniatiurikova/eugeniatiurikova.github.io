import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import { Dialog, IconButton } from "@mui/material";
import DefinitionsContent from "./DefinitionsContent";

const LanguageHelp = () => {
    const [opendialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(!opendialog);
    };

    return (<>
        <p className='langtitle'>Languages</p>
        <p className='langinfo redtext'>Select a&nbsp;Language from the&nbsp;list on&nbsp;the&nbsp;left. Clicking again will cancel the&nbsp;selection.</p>
        <p className='langinfo_next'>The characters that support the&nbsp;Languages in&nbsp;the&nbsp;list include:
            <li>- <span className="redtext">alphabet</span> letters;</li>
            <li>- characters of the Languages’ <span className="redtext"></span>dialects;</li>
            <li>- <span className="redtext">historical</span> and&nbsp;<span className="redtext">localized</span> forms;</li>
            <li>- <span className="redtext">equivalent alternatives</span> and&nbsp;other necessary symbols.</li>
            See the&nbsp;<span className="aspan" onClick={handleClickOpen}>Definitions</span> section for&nbsp;more information about the&nbsp;terminology and&nbsp;legend keys&nbsp;used.</p>
        <p className='langinfo_next'>The "Character set" block on&nbsp;a&nbsp;Language page contains all the&nbsp;unique glyphs required to&nbsp;support a&nbsp;language, along with their respective unicodes.</p>
        <p className='langinfo_next'><span className='redtext'>Note: </span>If you go&nbsp;the&nbsp;“Pan-Cyrillic character set” menu section when browsing a&nbsp;Language page, the&nbsp;glyphs supporting that Language will be highlighted in&nbsp;the&nbsp;table.</p>
        <p className='langtitle_next'>In addition</p>
        <p className='langinfo_next'>On a&nbsp;Language page, you can select the&nbsp;case, font type (serif or&nbsp;sans-serif), and&nbsp;upright or&nbsp;italic styles in&nbsp;the&nbsp;"Parameters" settings panel.</p>
        <p className='langinfo_next'>Click on&nbsp;the&nbsp;"Text Table" option to&nbsp;see a&nbsp;summary table with the Language support signs. It&nbsp;includes characters, their unicodes, and&nbsp;other useful information. You can download the&nbsp;table as&nbsp;a&nbsp;text file.</p>
        <p className='langinfo'>&nbsp;</p>

        <Dialog open={opendialog} onClose={handleClickOpen} scroll='paper' maxWidth='xl' >
            <div className='tableheader'><p className='tablestitle'><span className="langtitle">Definitions</span></p><IconButton onClick={handleClickOpen} size="small"><ClearIcon /></IconButton></div>
            <div className="tablecontainer">
                <div className="tablecontainer">
                    <DefinitionsContent /></div>
            </div>
        </Dialog>
    </>)
};
export default LanguageHelp;