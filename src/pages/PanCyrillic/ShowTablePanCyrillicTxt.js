import { useSelector } from "react-redux";
import SingleLetterPancyrillic from "./SingleLetterPancyrillic";

const ShowTablePanCyrillicTxt = ({ signsupper, signslower, title }) => {

    const brk = String.fromCharCode('0x000A');
    const italic = useSelector(state => state.italic);

    return (<>
        {title && <p>{brk}{title}{brk}</p>}
        {signsupper[0] && <div><p>{brk}Uppercase {italic ? ' normal' : ' italic'}</p>{brk}
            {signsupper.map(item => {
                return (<SingleLetterPancyrillic oneletter={item} textmode />)
            })}
        </div>}
        {signslower[0] && <div><p>{brk}Lowercase {italic ? ' normal' : ' italic'}</p>{brk}
            {signslower.map(item => {
                return (<SingleLetterPancyrillic oneletter={item} textmode />)
            })}
        </div>}
    </>)

};

export default ShowTablePanCyrillicTxt;
