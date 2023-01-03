import { Avatar } from "@mui/material";

const PanCyrillicHelp = () => {
    return (<>
        <p className='langtitle'>Pan-Cyrillic Character set</p>
        <p className='langinfo redtext'>An aggregated Cyrillic alphabet that supports all Languages represented in this project.</p>
        <p className='langinfo_next'>In the table below, you can sort out the characters alphabetically or by their unicodes. You can also select the case, font type (serif or sans-serif), and upright or italic styles in the "Parameters" settings panel.</p>
        <p className='langinfo_next'>Click on the "Text Table" button in the panel to see a summary table with the supported characters for one or several selected languages. The table includes characters, their unicodes, and other useful information. You can download the table as a text file.</p>
        <div className='tooltips_wrap'>
            <div className='tooltip_container'>
                <Avatar sx={{ bgcolor: "#dbe7ea", color: "#688A93" }}><span className="ptexpert">{String.fromCharCode('0x2190')}</span></Avatar><p className='tooltips_info'>Select a Language from the list on the left, and the characters that support the Language will be highlighted in the table. Clicking again will cancel the selection.<br /><br />To find out which character set supports several Languages, use the Shift key (Shift+click) when selecting each next Language.</p>
            </div>
            <div className='tooltip_container'>
                <Avatar sx={{ bgcolor: "#dbe7ea", color: "#688A93" }}><span className="ptexpert">{String.fromCharCode('0x2193')}</span></Avatar><p className='tooltips_info'>Click on a single character to find out which alphabets it is part of. The names of the Languages will appear in the menu on the left. Clicking again will cancel the selection.</p>
            </div>
        </div>
    </>)
};
export default PanCyrillicHelp;