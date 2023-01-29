import React from 'react';
import { useSelector } from 'react-redux';
import LanglistItem from './LanglistItem';
import { v4 as uuidv4 } from 'uuid';

const LangList = () => {
    const rus = useSelector(state => state.rus);
    const langListNames = useSelector(state => state.langListNames);

    const showLangList = () => {
        if (rus)
            return langListNames.sort((a, b) => a.name_rus > b.name_rus ? 1 : -1);
        else
            return langListNames.sort((a, b) => a.name_eng > b.name_eng ? 1 : -1);
    }

    return (<>
        {
            showLangList().map(item => {
                return (
                    item.enable && <LanglistItem key={uuidv4()} name_eng={item.name_eng} name_rus={item.name_rus} />
                )
            })
        }
    </>);
};

export default LangList;
