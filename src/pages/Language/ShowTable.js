import SingleLetter from "./SingleLetter";
import { v4 as uuidv4 } from 'uuid';
import { TABLE } from "../../service/constants";
import { useSelector } from "react-redux";

const ShowTable = ({ signsupper, signslower, title, showUni }) => {
    const rus = useSelector(state => state.rus);

    const singleLetterMap = (array) => {
        return (
            array.map(itm => {
                return (<tr><SingleLetter key={uuidv4()} oneletter={itm} showUni={showUni} tablemode={true} /></tr>)
            })
        )
    }

    if (signsupper[0] && signslower[0]) {
        let signsall = [];
        for (let i = 0; i < signsupper.length; i++) {
            let tmpup = signsupper[i] ? signsupper[i] : null;
            let tmplo = signslower[i] ? signslower[i] : null;
            signsall[i] = { upper: tmpup, lower: tmplo }
        }
        // console.log('All ', signsall);
        return (<>
            {title ? <p className="tablestitle">{title}</p> : <></>}
            <div className="tablewrap">
                <table><thead>
                    <tr>
                        <th colSpan={showUni ? 3 : 2}><p className="tableinnertitle">{TABLE.upper[rus]}</p></th>
                        <th colSpan={showUni ? 3 : 2}><p className="tableinnertitle">{TABLE.lower[rus]}</p></th>
                    </tr>
                    <tr>
                        <td className="letterchell">{TABLE.glyph[rus]}</td>
                        <td className={`${showUni ? 'letterchell' : 'infochell'}`}>{TABLE.unicodes[rus]}</td>
                        {showUni ? (<td>{TABLE.description[rus]}</td>) : ''}
                        <td className="letterchell">{TABLE.glyph[rus]}</td>
                        <td className={`${showUni ? 'letterchell' : 'infochell'}`}>{TABLE.unicodes[rus]}</td>
                        {showUni ? (<td>{TABLE.description[rus]}</td>) : ''}
                    </tr>
                </thead>
                    <tbody>{signsall.map(item => {
                        if ((item.upper?.alts && item.upper?.alts[0]) &&
                            (item.lower?.alts && item.lower?.alts[0])) {
                            return (
                                <tr>
                                    <td colSpan={2} className="containerrow">
                                        <table className="tablerow"><tbody>
                                            <tr>
                                                <SingleLetter key={uuidv4()} oneletter={item.upper} showUni={showUni} tablemode={true} />
                                            </tr>
                                            {singleLetterMap(item.upper.alts)}
                                        </tbody></table>
                                    </td>
                                    <td colSpan={2} className="containerrow">
                                        <table className="tablerow"><tbody>
                                            <tr>
                                                <SingleLetter key={uuidv4()} oneletter={item.lower} showUni={showUni} tablemode={true} />
                                            </tr>
                                            {singleLetterMap(item.lower.alts)}
                                        </tbody></table>
                                    </td>
                                </tr>
                            )
                        }
                        else if ((item.upper?.alts && item.upper?.alts[0]) &&
                            !(item.lower?.alts && item.lower?.alts[0])) {
                            return (
                                <tr>
                                    <td colSpan={2} className="containerrow">
                                        <table className="tablerow"><tbody>
                                            <tr>
                                                <SingleLetter key={uuidv4()} oneletter={item.upper} showUni={showUni} tablemode={true} />
                                            </tr>
                                            {singleLetterMap(item.upper.alts)}
                                        </tbody></table>
                                    </td>
                                    <SingleLetter key={uuidv4()} oneletter={item.lower} showUni={showUni} tablemode={true} />
                                </tr>
                            )
                        }
                        else if (!(item.upper?.alts && item.upper?.alts[0]) &&
                            (item.lower?.alts && item.lower?.alts[0])) {
                            return (
                                <tr>
                                    <SingleLetter key={uuidv4()} oneletter={item.upper} showUni={showUni} tablemode={true} />
                                    <td colSpan={2} className="containerrow">
                                        <table className="tablerow"><tbody>
                                            <tr>
                                                <SingleLetter key={uuidv4()} oneletter={item.lower} showUni={showUni} tablemode={true} />
                                            </tr>
                                            {singleLetterMap(item.lower.alts)}
                                        </tbody></table>
                                    </td>
                                </tr>
                            )
                        }
                        else {
                            return (<tr>
                                {item.upper ? <SingleLetter oneletter={item.upper} showUni={showUni} key={uuidv4()} tablemode={true} /> : <></>}
                                {item.lower ? <SingleLetter oneletter={item.lower} showUni={showUni} key={uuidv4()} tablemode={true} /> : <></>}
                            </tr>)
                        };
                    })}</tbody>
                </table>
            </div>
        </>)
    }
    else return (<></>)
};

export default ShowTable;
