import { useSelector } from "react-redux";
import { TABLE } from "../../service/constants";
import SingleLetterPancyrillic from "./SingleLetterPancyrillic";

const ShowTablePanCyrillicTxt = ({ signsupper, signslower, title }) => {
    const rus = useSelector(state => state.rus);
    const brk = String.fromCharCode('0x000A');
    const italic = useSelector(state => state.italic);

    return (<>
        {title && <p>{brk}{title}{brk}</p>}
        {signsupper[0] && <div><p>{brk}{TABLE.upper[rus]}{!italic && ', ' + TABLE.italic[rus]}</p>{brk}
            {signsupper.map(item => {
                return (<SingleLetterPancyrillic oneletter={item} textmode />)
            })}
        </div>}
        {signslower[0] && <div><p>{brk}{TABLE.lower[rus]}{!italic && ', ' + TABLE.italic[rus]}</p>{brk}
            {signslower.map(item => {
                return (<SingleLetterPancyrillic oneletter={item} textmode />)
            })}
        </div>}
    </>)

};

export default ShowTablePanCyrillicTxt;
