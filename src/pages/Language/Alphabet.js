import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Language from './Language';
import LanguageHelp from './../content/LanguageHelp';
import Legend from '../Legend';
import Letters from './Letters';
import { v4 as uuidv4 } from 'uuid';


const Alphabet = () => {
    const upcase = useSelector(state => state.upcase);
    const currentLang = useSelector(state => state.currentLang);
    const allsigns = useSelector(state => state.allsigns);
    const jsonsPath = useSelector(state => state.jsonsPath);


    const dispatch = useDispatch();

    useEffect(() => {

        let curlng = currentLang ? currentLang : null
        if (curlng) {
            fetch(jsonsPath + 'cyrillic-languages/site/baselib/' + curlng + '.json')
                .then(res => res.json())
                .then(data => {
                    dispatch({ type: 'setAllSigns', payload: data });
                })

            fetch(jsonsPath + 'cyrillic-languages/library/' + curlng + '.json')
                .then(res => res.json())
                .then(data => {
                    dispatch({ type: 'setLanguage', payload: data });
                    dispatch({ type: 'switchLang', payload: data.local });
                })
        }
    }, [currentLang]);


    if (currentLang)
        return (<>
            <Language />
            <Legend showtable showhelp />

            <div className={`lettersblock${upcase ? '' : ' hidden'}`}>
                {allsigns?.glyphs_list?.map(set => {
                    return (<Letters alpahabet={set.uppercase} title={set.title} showUni={set.show_unicodes} key={uuidv4()} />)
                })}
            </div>

            <div className={`lettersblock${upcase ? ' hidden' : ''}`}>
                {allsigns?.glyphs_list?.map(set => {
                    return (<Letters alpahabet={set.lowercase} title={set.title} showUni={set.show_unicodes} key={uuidv4()} />)
                })}
            </div>
        </>);
    else return (<LanguageHelp />)
};
export default Alphabet;


