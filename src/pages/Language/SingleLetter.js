import React from 'react';
import Tooltip from '@mui/material/Tooltip';
import { useSelector } from 'react-redux';
import { getTypes } from '../../service/functions';

const SingleLetter = ({ oneletter, showUni, tablemode }) => {
    const serif = useSelector(state => state.serif);
    const italic = useSelector(state => state.italic);
    const types = getTypes(oneletter.types, italic);

    const mainStyle = () => {
        let addstyle = ""; //italic это straight
        if (serif && !italic) addstyle = " bigletterserifitalic";
        if (!serif && !italic) addstyle = " bigletteritalic";
        if (serif && italic) addstyle = " bigletterserif";
        return "bigletter" + addstyle;
    }

    const showAltmark = () => {
        if (types.mark) return (<div className='markplace'><span className='altmark'>{(types.mark == 'locl') ? 'locl: ' + oneletter.local : types.mark}</span></div>)
        else return (<div className='markplace'>&nbsp;</div>)
    }

    const showUnicode = () => {
        let tmpunitxt = showUni ? oneletter.display_unicode : oneletter.description;
        return (<>
            {showUni ? (<p className='smalltitle smallunititle'>{tmpunitxt}</p>) : ""}
        </>)
    }
    // String(types.show)
    const letterTitle = oneletter.description;

    const showLetter = () => {
        return (
            oneletter.unicodes.map(alt => { return (String.fromCharCode(`0x${alt}`)) })
        )
    }

    if (tablemode) return (<>
        <td className='letterchell'><span lang={oneletter.local}>{showLetter()}</span></td>
        {showUni ? (<td className='letterchell'>{oneletter.display_unicode}</td>) : ""}
        <td className='infochell'>{letterTitle}</td>
    </>
    )
    // + ' ' + types.letter
    else if (types.show) return (<>
        <Tooltip title={letterTitle} followCursor>
            <div className={"letter " + types.color}>
                {showUnicode()}
                <p className={mainStyle()}><span lang={oneletter.local}>{showLetter()}</span></p>
                {showAltmark()}
            </div>
        </Tooltip >
    </>)
};

export default SingleLetter;
