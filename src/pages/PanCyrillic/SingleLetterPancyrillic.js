import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { contains, getTypes } from './../functions';


const SingleLetterPancyrillic = ({ oneletter, tablemode, textmode }) => {
    const serif = useSelector(state => state.serif);
    const italic = useSelector(state => state.italic);
    const currentLang = useSelector(state => state.currentLang);
    const highlightedSelect = useSelector(state => state.highlightedSelect);
    const selectedLangs = useSelector(state => state.selectedLangs);
    const dispatch = useDispatch();

    const handleMouseOver = () => {
        dispatch({ type: 'switchHighlightedLang', payload: oneletter.languages });
    };

    const handleMouseOut = () => {
        dispatch({ type: 'switchHighlightedLang', payload: null });
    };

    // { languages: null, id: '' }
    const handleClick = () => {
        if (oneletter.id == highlightedSelect.id)
            dispatch({ type: 'selectHighlights', payload: { languages: null, id: '' } })
        else dispatch({ type: 'selectHighlights', payload: { languages: oneletter.languages, id: oneletter.id } })
    };

    const parameters = () => {
        let show = true;
        if ((oneletter.hide == 'straight') && italic) { show = false }
        if ((oneletter.hide == 'italic') && !italic) { show = false }
        let bg = '';
        let mark = '';
        let letter = '';
        let uni = '';
        let langsFiltered = oneletter.languages.map(lang => lang.name);

        if (selectedLangs.length > 0) {
            if (contains(langsFiltered, selectedLangs)) {
                bg = ' selectedsign';
                letter = ' selectedletter';
                uni = ' smalltitle smallunititle';
            } else {
                bg = ' unselectedsign';
                letter = ' unselectedletter';
                uni = ' unselecteduni';
            }
        } else {
            let langid = oneletter.languages.find(lang => lang.name === currentLang);
            let tmp = { color: "", mark: "", show: true };
            if (langid?.types && langid?.types[0]) {
                tmp = getTypes(langid.types, italic);
                if (tmp.color == 'repsign') tmp.color = '';
            }
            mark = (tmp.mark == 'locl') ? 'locl: ' + oneletter.local : tmp.mark;
            bg = ((langid) || (!currentLang)) ? " selectedsign " + tmp.color : ' unselectedsign';
            letter = ((langid) || (!currentLang)) ? " selectedletter" : ' unselectedletter';
            uni = (langid || !currentLang) ? " smalltitle smallunititle" : ' unselecteduni';
        }
        if (oneletter.id == highlightedSelect.id) letter += " highlighted_letter";

        return { bg, mark, letter, show, uni }
    }

    const mainStyle = () => {
        let addstyle = "";
        if (serif && !italic) addstyle = " bigletterserifitalic";
        if (!serif && !italic) addstyle = " bigletteritalic";
        if (serif && italic) addstyle = " bigletterserif";
        return "bigletter" + addstyle; // + parameters().letter
    }

    const showAltmark = () => {
        if (parameters().mark) return (<div className='markplace'><span className='altmark'>{parameters().mark}</span></div>)
        else return (<div className='markplace'>&nbsp;</div>)
    }

    const showUnicode = () => {
        return (<p className={`smalltitle smallunititle${parameters().uni}`}>{oneletter.display_unicode}</p>)
    }

    const showLetter = () => {
        return (String.fromCharCode(`0x${oneletter.unicodes[0]}`))
    }

    if (tablemode && parameters().show) return ((parameters().bg != ' unselectedsign') &&
        <>
            <td className='letterchell'><span lang={oneletter.local}>{showLetter()}</span></td>
            <td className='letterchell'>{oneletter.display_unicode}</td>
            <td className='infochell_pc'>{(!oneletter.display_unicode) ? 'Localized form of ' + oneletter.unicodes : oneletter.description}</td>
        </>
    )
    else if (textmode && parameters().show) return ((parameters().bg != ' unselectedsign') &&
        <p>
            <span lang={oneletter.local}>{showLetter()}</span>
            {String.fromCharCode('0x0009') + oneletter.display_unicode}
            {(!oneletter.display_unicode) ? String.fromCharCode('0x0009') + 'Localized form of ' + oneletter.unicodes : String.fromCharCode('0x0009') + oneletter.description}
            {String.fromCharCode('0x000A')}
        </p>
    )
    else if (parameters().show) return (
        <Tooltip title={oneletter.description} followCursor>
            <div className={"letter " + parameters().bg + parameters().letter} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} onClick={handleClick}>
                {showUnicode()}
                <p className={mainStyle()}><span lang={oneletter.local}>{showLetter()}</span></p>
                {showAltmark()}
            </div>
        </Tooltip >)
};

export default SingleLetterPancyrillic;