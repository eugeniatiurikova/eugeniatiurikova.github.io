import { useSelector } from "react-redux";
import { TABLE } from "../../service/constants";

const ShowTableTxt = ({ signsupper, signslower, title, showUni }) => {
    const rus = useSelector(state => state.rus);

    const singleLetterMap = (array) => {
        return (
            array.map(itm => {
                return (<p>
                    <span lang={itm.local}>{itm.unicodes.map(alt => {
                        return (String.fromCharCode(`0x${alt}`))
                    }
                    )}</span>
                    {showUni && String.fromCharCode('0x0009') + itm.display_unicode}
                    {(showUni && !itm.display_unicode) ? String.fromCharCode('0x0009') + 'Localized form of ' + itm.unicodes : String.fromCharCode('0x0009') + itm.description}
                    {/* {String.fromCharCode('0x0009') + itm.description} */}
                    {String.fromCharCode('0x000A')}
                </p>)
            })
        )
    }

    const singleLetter = (itm) => {
        return (<p>
            <span lang={itm.local}>{itm.unicodes.map(alt => {
                return (String.fromCharCode(`0x${alt}`))
            }
            )}</span>
            {showUni && String.fromCharCode('0x0009') + itm.display_unicode}
            {(showUni && !itm.display_unicode) ? String.fromCharCode('0x0009') + 'Localized form of ' + itm.unicodes : String.fromCharCode('0x0009') + itm.description}
            {/* {String.fromCharCode('0x0009') + itm.description} */}
            {String.fromCharCode('0x000A')}
        </p>)
    }

    return (<>
        {title && <p>{String.fromCharCode('0x000A')}{title}{String.fromCharCode('0x000A')}</p>}
        {signsupper[0] && <div><p>{String.fromCharCode('0x000A')}{TABLE.upper[rus]}</p>{String.fromCharCode('0x000A')}
            {signsupper.map(item => {
                if (item.alts && item.alts[0]) {
                    return (<>{singleLetter(item)}{singleLetterMap(item.alts)}</>)
                } else {
                    return (<>{singleLetter(item)}</>)
                }
            })}
        </div>}
        {signslower[0] && <div><p>{String.fromCharCode('0x000A')}{TABLE.lower[rus]}</p>{String.fromCharCode('0x000A')}
            {signslower.map(item => {
                if (item.alts && item.alts[0]) {
                    return (<>{singleLetter(item)}{singleLetterMap(item.alts)}</>)
                } else {
                    return (<>{singleLetter(item)}</>)
                }
            })}
        </div>}
    </>)

};

export default ShowTableTxt;
