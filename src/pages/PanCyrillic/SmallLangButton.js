import { useDispatch } from 'react-redux';

const SmallLangButton = ({ name_eng, onDelete }) => {
    const dispatch = useDispatch();

    const handleChangePage = () => {
        dispatch({ type: 'switchCurrentLang', payload: name_eng });
        dispatch({ type: 'switchPage', payload: 2 });
    };

    const handleDelete = () => {
        onDelete(name_eng);
    };
    // &#215;
    // <HighlightOffIcon sx={{ width: "12px", height: "12px", marginBottom: "-2px" }} /> 
    return (<>
        <button className='smalltitlebtn smalltitlebtnleft' onClick={handleChangePage}>{name_eng}</button>
        {onDelete ?
            <button className='smalltitlebtnclose' onClick={handleDelete} >{String.fromCharCode('0x2612')}</button> :
            <></>}
    </>)

};

export default SmallLangButton;