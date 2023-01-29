import { useSelector } from "react-redux";

const ToggleButtons = ({ titles, switcher, handleClick }) => {
    const rus = useSelector(state => state.rus);

    return (<div className="togglebtnswrap">
        <button className={`togglebtns fullwidth${switcher ? ' togglebtnsactive' : ''}`} onClick={handleClick}>{titles[rus]}</button>
        <button className={`togglebtns fullwidth${switcher ? '' : ' togglebtnsactive'}`} onClick={handleClick}>{titles[rus + 2]}</button>
    </div>)

};

export default ToggleButtons;