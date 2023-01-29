import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";

const PanCyrillicHelp = () => {
    const rus = useSelector(state => state.rus);

    if (rus) return (<>
        <p className='langtitle'>Пан-кириллический набор&nbsp;знаков</p>
        <p className='langinfo redtext'>На этой странице мы&nbsp;собрали суммарный кириллический алфавит, который поддерживает все&nbsp;Языки, представленные в&nbsp;проекте.</p>
        <p className='langinfo_next'>Знаки в&nbsp;таблице можно отсортировать по&nbsp;алфавиту или&nbsp;по&nbsp;юникоду. На&nbsp;панели настроек ниже можно выбрать регистр, тип&nbsp;шрифта (антикву или&nbsp;гротеск), прямое или&nbsp;курсивное начертание.</p>
        <p className='langinfo_next'>Там&nbsp;же есть кнопка «Таблица». Она&nbsp;покажет знаки поддержки одного или&nbsp;нескольких выбранных Языков в&nbsp;виде сводной таблицы. Там&nbsp;будут символы, их&nbsp;юникоды и&nbsp;другая полезная информация. Таблицу можно скачать в&nbsp;виде текстового файла.</p>
        <div className='tooltips_wrap'>
            <div className='tooltip_container'>
                <Avatar sx={{ bgcolor: "#dbe7ea", color: "#688A93" }}><span className="ptexpert">{String.fromCharCode('0x2190')}</span></Avatar><p className='tooltips_info'>Выберите Язык из&nbsp;списка слева, и&nbsp;в&nbsp;таблице подсветятся знаки, поддерживающие этот Язык. Нажмите ещё&nbsp;раз, чтобы отменить выбор.<br /><br />Чтобы посмотреть, какие символы поддерживают сразу несколько Языков, зажмите клавишу Shift (Shift+click) при&nbsp;выборе каждого следующего Языка.</p>
            </div>
            <div className='tooltip_container'>
                <Avatar sx={{ bgcolor: "#dbe7ea", color: "#688A93" }}><span className="ptexpert">{String.fromCharCode('0x2193')}</span></Avatar><p className='tooltips_info'>Выберите символ, чтобы узнать, в&nbsp;какие алфавиты он&nbsp;входит. Названия Языков подстветятся в&nbsp;списке слева. Повторное нажатие отменит выбор.</p>
            </div>
        </div>
    </>)
    else return (<>
        <p className='langtitle'>Pan-Cyrillic Character&nbsp;set</p>
        <p className='langinfo redtext'>An&nbsp;aggregated Cyrillic alphabet that supports all&nbsp;Languages represented in&nbsp;this project.</p>
        <p className='langinfo_next'>In the&nbsp;table below, you&nbsp;can sort out the&nbsp;characters alphabetically or&nbsp;by&nbsp;their unicodes. You&nbsp;can also select the&nbsp;case, font type (serif or&nbsp;sans-serif), and&nbsp;upright or&nbsp;italic styles in&nbsp;the&nbsp;"Parameters" settings panel.</p>
        <p className='langinfo_next'>Click on&nbsp;the&nbsp;"Text Table" button in&nbsp;the&nbsp;panel to&nbsp;see a&nbsp;summary table with the supported characters for&nbsp;one or&nbsp;several selected languages. The&nbsp;table includes characters, their unicodes, and&nbsp;other useful information. You&nbsp;can download the&nbsp;table as&nbsp;a&nbsp;text file.</p>
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