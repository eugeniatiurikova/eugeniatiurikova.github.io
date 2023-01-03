const DefinitionsSmallHelp = () => {
    return (<>
        <li className='legenditem'><div className="altmarkinfo"><div className="altmark dialect">&nbsp;</div></div>
            <div className="altmarkinfotext">Dialect glyph forms</div>
        </li>
        <li className='legenditem'><div className="altmarkinfo"><div className="altmark historic">&nbsp;</div></div>
            <div className="altmarkinfotext">Historical glyph forms</div>
        </li>
        <li className='legenditem'><div className="altmarkinfo"><div className="altmark extended">&nbsp;</div></div>
            <div className="altmarkinfotext">Extended Orphographic Notation</div>
        </li>

        <li className='legenditem'><div className="altmarkinfo"><div className="altmark digraph">&nbsp;</div></div>
            <div className="altmarkinfotext">Digraph</div>
        </li>

        <li className='legenditem'><div className="altmarkinfo"><div className="altmark consideration">&nbsp;</div></div>
            <div className="altmarkinfotext">Signs under consideration</div>
        </li>

        <li className='legenditem'><div className="altmarkinfo"><div className="altmark">equ</div></div><div className="altmarkinfotext">Equivalent glyph form</div></li>

        <li className='legenditem'><div className="altmarkinfo"><div className="altmark">locl</div></div>
            <div className="altmarkinfotext">Localized form</div></li>
    </>)
};

export default DefinitionsSmallHelp;