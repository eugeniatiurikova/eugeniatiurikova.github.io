import { useSelector } from "react-redux";
import { DEF, DEF_SMALL } from "../../service/constants";

const DefinitionsSmallHelp = () => {
    const rus = useSelector(state => state.rus);

    return (<>
        {DEF_SMALL().map(item => {
            return <li key={item.type} className='legenditem'><div className="legendmarkinfo"><div className={`altmark ${item.type}`}>&nbsp;</div></div>
                <div className="legendmarkinfotext">{item.title[rus]}</div>
            </li>
        })}

        <li className='legenditem'><div className="legendmarkinfo"><div className="altmark">equ</div></div><div className="legendmarkinfotext">{DEF.equivalent.title[rus]}</div></li>

        <li className='legenditem'><div className="legendmarkinfo"><div className="altmark">locl</div></div>
            <div className="legendmarkinfotext">{DEF.local.title[rus]}</div></li>
    </>)
};

export default DefinitionsSmallHelp;