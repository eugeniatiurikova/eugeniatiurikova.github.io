import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Alphabet from "./Language/Alphabet";
import LangList from "./LangList/LangList";
import NotFound from "./NotFound";
import PanCyrillic from "./PanCyrillic/PanCyrillic";
import About from "./content/About";
import { getURLstring, makeParams } from "../service/functions";
import DefinitionsContent from "./content/DefinitionsContent";
import { JSON_PATH } from "../service/constants";

const ContentField = () => {
    const currentPage = useSelector(state => state.currentPage);
    const rus = useSelector(state => state.rus);
    const currentLang = useSelector(state => state.currentLang);
    const dispatch = useDispatch();

    useEffect(() => {
        let lng = JSON_PATH + 'cyrillic-languages/site/cyrillic_characters_lib.json';
        fetch(lng)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'setAllTable', payload: data });
            })
        let lnglst = JSON_PATH + 'cyrillic-languages/cyrillic_library.json'
        fetch(lnglst)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'setLangListNames', payload: data });
            })
    }, []);

    useEffect(() => {
        if (!currentPage) {
            let params = makeParams();
            dispatch({ type: 'switchPage', payload: params.currentPage });
            if (params.uiLang) {
                dispatch({ type: 'toggleRuEn', payload: params.uiLang });
            };
            if (params.currentLang) {
                dispatch({ type: 'switchCurrentLang', payload: params.currentLang });
            };
        };
        window.history.pushState(null, null, getURLstring(rus, currentLang, currentPage))
    }, [currentPage, rus, currentLang]);


    if (currentPage == 1) return (<>
        <div className='langmenu'><LangList /></div>
        <div className='container'><PanCyrillic /></div>
    </>)
    else if (currentPage == 2) return (<>
        <div className='langmenu'><LangList /></div>
        <div className='container'><Alphabet /></div>
    </>)
    else if (currentPage == 3) return (<>
        <div className='langmenu'>&nbsp;</div>
        <div className='container'><About /></div>
    </>)
    else if (currentPage == 4) return (<>
        <div className='langmenu'>&nbsp;</div>
        <div className='container'><DefinitionsContent /></div>
    </>)
    else return (<NotFound />)

};

export default ContentField;