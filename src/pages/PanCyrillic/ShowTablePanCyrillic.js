import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import SingleLetterPancyrillic from "./SingleLetterPancyrillic";

const ShowTablePanCyrillic = ({ signsupper, signslower, title, showUni }) => {

    const italic = useSelector(state => state.italic);

    return (<>
        {title && <p className="tablestitle">{title}</p>}
        <table><thead>
            <tr>
                <th colSpan='3'><p className="tableinnertitle">Uppercase {italic ? ' normal' : ' italic'}</p></th>
            </tr>
            <tr>
                <td className="letterchell">Glyph</td>
                <td className='letterchell'>Unicodes</td>
                <td className='infochell_pc'>Description</td>
            </tr>
        </thead>
            <tbody>{signsupper.map(item => {
                return (<tr><SingleLetterPancyrillic oneletter={item} showUni={showUni} key={uuidv4()} tablemode={true} /></tr>)
            })}</tbody>
        </table>
        <table><thead>
            <tr>
                <th colSpan='3'><p className="tableinnertitle">Lowercase {italic ? ' normal' : ' italic'}</p></th>
            </tr>
            <tr>
                <td className="letterchell">Glyph</td>
                <td className='letterchell'>Unicodes</td>
                <td className='infochell_pc'>Description</td>
            </tr>
        </thead>
            <tbody>{signslower.map(item => {
                return (<tr><SingleLetterPancyrillic oneletter={item} showUni={showUni} key={uuidv4()} tablemode={true} /></tr>)
            })}</tbody>
        </table>
    </>)
};

export default ShowTablePanCyrillic;