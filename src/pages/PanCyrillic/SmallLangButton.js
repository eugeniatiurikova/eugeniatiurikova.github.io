import { useDispatch, useSelector } from 'react-redux';

const SmallLangButton = ({ name_eng, onDelete }) => {
    const dispatch = useDispatch();
    const langListNames = useSelector(state => state.langListNames);
    const rus = useSelector(state => state.rus);

    const handleChangePage = () => {
        dispatch({ type: 'switchCurrentLang', payload: name_eng });
        dispatch({ type: 'switchPage', payload: 2 });
    };

    const handleDelete = () => {
        onDelete(name_eng);
    };

    const getRuName = () => {
        let name_rus = '';
        langListNames.forEach(item => {
            if (item.name_eng === name_eng) name_rus = item.name_rus;
        });
        return name_rus;
    }

    return (<>
        <button className='smalltitlebtn smalltitlebtnleft' onClick={handleChangePage}>{rus ? getRuName() : name_eng}</button>
        {onDelete &&
            <button className='smalltitlebtnclose' onClick={handleDelete} >{String.fromCharCode('0x2612')}</button>}
    </>)

};

export default SmallLangButton;