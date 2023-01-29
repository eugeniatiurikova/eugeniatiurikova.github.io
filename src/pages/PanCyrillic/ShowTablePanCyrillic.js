import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TABLE } from '../../service/constants';
import SingleLetterPancyrillic from "./SingleLetterPancyrillic";

const ShowTablePanCyrillic = ({ signsupper, signslower, title, showUni }) => {
    const rus = useSelector(state => state.rus);
    const italic = useSelector(state => state.italic);

    return (<>
        {title && <p className="tablestitle">{title}</p>}
        <table><thead>
            <tr>
                <th colSpan='3'><p className="tableinnertitle">{TABLE.upper[rus]}{!italic && ', ' + TABLE.italic[rus]}</p></th>
            </tr>
            <tr>
                <td className="letterchell">{TABLE.glyph[rus]}</td>
                <td className='letterchell'>{TABLE.unicodes[rus]}</td>
                <td className='infochell_pc'>{TABLE.description[rus]}</td>
            </tr>
        </thead>
            <tbody>{signsupper.map(item => {
                return (<tr><SingleLetterPancyrillic oneletter={item} showUni={showUni} key={uuidv4()} tablemode={true} /></tr>)
            })}</tbody>
        </table>
        <table><thead>
            <tr>
                <th colSpan='3'><p className="tableinnertitle">{TABLE.lower[rus]}{!italic && ', ' + TABLE.italic[rus]}</p></th>
            </tr>
            <tr>
                <td className="letterchell">{TABLE.glyph[rus]}</td>
                <td className='letterchell'>{TABLE.unicodes[rus]}</td>
                <td className='infochell_pc'>{TABLE.description[rus]}</td>
            </tr>
        </thead>
            <tbody>{signslower.map(item => {
                return (<tr><SingleLetterPancyrillic oneletter={item} showUni={showUni} key={uuidv4()} tablemode={true} /></tr>)
            })}</tbody>
        </table>
    </>)
};

export default ShowTablePanCyrillic;