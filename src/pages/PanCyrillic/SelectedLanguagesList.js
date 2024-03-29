import { useDispatch, useSelector } from 'react-redux';
import SmallLangButton from './SmallLangButton';
import { v4 as uuidv4 } from 'uuid';
import { SELECTED } from '../../service/constants';

const SelectedLanguagesList = () => {
    const currentLang = useSelector(state => state.currentLang);
    const selectedLangs = useSelector(state => state.selectedLangs);
    const rus = useSelector(state => state.rus);
    const dispatch = useDispatch();

    const showSelectedLangs = () => {
        return selectedLangs ? selectedLangs : [];
    }

    const handleReset = () => {
        dispatch({ type: 'switchCurrentLang', payload: null });
        dispatch({ type: 'selectHighlights', payload: { languages: null, id: '' } });
        dispatch({ type: 'setSelectedLangs', payload: [] });
    };

    const handleRemoveLang = (lngname) => {
        let ind = selectedLangs.length - 1;
        let lngameind = selectedLangs.indexOf(lngname);
        ind = (lngameind < ind) ? lngameind : ind - 1;
        if (currentLang == lngname)
            dispatch({ type: 'switchCurrentLang', payload: showSelectedLangs()[ind] });

        if (selectedLangs.length > 2)
            dispatch({ type: 'deleteSelectedLang', payload: lngname });
        else
            dispatch({ type: 'setSelectedLangs', payload: [] });
    }

    return (
        <p className='smalltitle'>{SELECTED.title[rus]}:
            {(selectedLangs) &&
                selectedLangs.map(item => {
                    return (<><SmallLangButton key={uuidv4()} name_eng={item} onDelete={handleRemoveLang} />|</>)
                })
            }
            {(!selectedLangs[0] && currentLang) &&
                <><SmallLangButton key={uuidv4()} name_eng={currentLang} /><span className='smalltitlebtnleft'>|</span></>
            }
            {currentLang ?
                <button className='smalltitlebtn smalltitlebtnleft redtext' onClick={handleReset}>{SELECTED.reset[rus]}</button> :
                <><span className='smalltitlebtnleft'>{SELECTED.none[rus]}</span></>}
        </p>
    )

};

export default SelectedLanguagesList;