import { useDispatch, useSelector } from 'react-redux';

const LanglistItem = ({ name_eng, name_rus }) => {
    const rus = useSelector(state => state.rus);
    const currentLang = useSelector(state => state.currentLang);
    const currentPage = useSelector(state => state.currentPage);
    const highlightedLang = useSelector(state => state.highlightedLang);
    const highlightedSelect = useSelector(state => state.highlightedSelect);
    const selectedLangs = useSelector(state => state.selectedLangs);
    const dispatch = useDispatch();

    const handleChangeCurrentLang = (e) => {
        if (e.shiftKey) {
            if (selectedLangs.length < 1 && currentLang)
                dispatch({ type: 'addSelectedLang', payload: currentLang });
            if (selectedLangs.indexOf(name_eng) < 0) {
                dispatch({ type: 'addSelectedLang', payload: name_eng });
                dispatch({ type: 'switchCurrentLang', payload: name_eng });
            } else {
                if (currentLang == name_eng) {
                    if (selectedLangs.length > 1) {
                        let ind = (selectedLangs.indexOf(name_eng) > 0) ? 0 : selectedLangs.length - 1;
                        dispatch({ type: 'switchCurrentLang', payload: selectedLangs[ind] });
                    } else {
                        dispatch({ type: 'switchCurrentLang', payload: null });
                    }
                }
                dispatch({ type: 'deleteSelectedLang', payload: name_eng });
            }
        } else {
            if (selectedLangs.length > 0)
                dispatch({ type: 'setSelectedLangs', payload: [] });
            (currentLang !== name_eng) ?
                dispatch({ type: 'switchCurrentLang', payload: name_eng }) :
                dispatch({ type: 'switchCurrentLang', payload: null });
        }
        // console.log('Changed lang ', currentLang)
    };

    const buttonStyle = () => {
        let cssString = '';
        if (currentPage === 1) {
            let langid = highlightedLang?.find(
                lang => lang.name === name_eng);
            let langid_s = highlightedSelect?.languages?.find(
                lang => lang.name === name_eng);
            let isActive = false;
            if ((selectedLangs.length > 0) && (selectedLangs.indexOf(name_eng) >= 0)) isActive = true
            else if (currentLang === name_eng) isActive = true

            if ((langid && langid_s) && (!isActive)) cssString = ' listbg_on listborder_on'
            if ((langid_s) && (!isActive)) cssString = ' listbg_on'
            if ((langid) && (!isActive)) cssString = ' listborder_on'
            if (isActive) cssString += ' langlistbuttonactive';
        } else cssString = (currentLang === name_eng) ? ' langlistbuttonactive' : ''
        return cssString
    }

    return (
        <button className={`langlistbutton${buttonStyle()}`} onClick={handleChangeCurrentLang}>{rus ? name_rus : name_eng}</button>
    )
};

export default LanglistItem;