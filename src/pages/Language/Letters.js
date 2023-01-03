import React from 'react';
import SingleLetter from './SingleLetter';
import { v4 as uuidv4 } from 'uuid';
import { isBorderNeeded } from '../functions';
import { useSelector } from 'react-redux';

const Letters = ({ alpahabet, title, showUni }) => {
    const italic = useSelector(state => state.italic);
    if (alpahabet[0]) {
        return (<>
            {title ? (<p className='smalltitle'>{title}</p>) : <></>}
            <div className='flexcontainer'>
                {alpahabet.map(item => {
                    if (item.alts && item.alts[0]) {

                        if (isBorderNeeded(item, italic)) {
                            return (
                                <div className='altborder' key={uuidv4()}><div className='altborder_in'>
                                    <SingleLetter oneletter={item} showUni={showUni} />
                                    {item.alts.map(itm => {
                                        return (<SingleLetter oneletter={itm} showUni={showUni} key={uuidv4()} />)
                                    })}
                                </div></div>
                            )
                        } else {
                            return (
                                <div className='altborder_in' key={uuidv4()}>
                                    <SingleLetter oneletter={item} showUni={showUni} />
                                    {item.alts.map(itm => {
                                        return (<SingleLetter oneletter={itm} showUni={showUni} key={uuidv4()} />)
                                    })}
                                </div>
                            )
                        }


                    } else {
                        return (<SingleLetter oneletter={item} showUni={showUni} key={uuidv4()} />)
                    }

                })}
            </div>
        </>)

    }
    else {
        return (<></>)
    }

};

export default Letters;