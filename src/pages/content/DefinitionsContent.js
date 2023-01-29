import { useSelector } from "react-redux";
import { DEF, MAIN_MENU } from "../../service/constants";

const DefinitionsContent = () => {
    const rus = useSelector(state => state.rus);

    return (<>
        <p className='langtitle'>{MAIN_MENU.definitions[rus]}</p>
        <div className='definfocontainer' >
            <div className='definfowrap60'>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div className="letter "><p className="bigletter bigletterserif"><span lang="ru">а</span></p><div className="markplace">&nbsp;</div></div>
                    </div>
                    <div>
                        <p className='definfotext deftitle'>{DEF.alphabet.title[rus]}</p>
                        <p className='definfotext'>{DEF.alphabet.text[rus]}</p>
                    </div>
                </div>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div className="letter dialect"><p className="bigletter bigletterserif"><span lang="ru">ҙ</span></p><div className="markplace">&nbsp;</div></div>
                    </div>
                    <div>
                        <p className='definfotext deftitle'>{DEF.dialect.title[rus]}</p>
                        <p className='definfotext'>{DEF.dialect.text[rus]}</p>
                    </div>
                </div>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div className="letter historic"><p className="bigletter bigletterserif"><span lang="ru">ҕ</span></p><div className="markplace">&nbsp;</div></div>
                    </div>
                    <div>
                        <p className='definfotext deftitle'>{DEF.historic.title[rus]}</p>
                        <p className='definfotext'>{DEF.historic.text[rus]}</p>
                    </div>
                </div>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div className="letter extended"><p className="bigletter bigletterserif"><span lang="ru">ў</span></p><div className="markplace">&nbsp;</div></div>
                    </div>
                    <div>
                        <p className='definfotext deftitle'>{DEF.extended.title[rus]}</p>
                        <p className='definfotext'>{DEF.extended.text[rus]}</p>
                    </div>
                </div>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div className="letter digraph"><p className="bigletter bigletterserif"><span lang="ru">дж</span></p><div className="markplace">&nbsp;</div></div>
                    </div>
                    <div>
                        <p className='definfotext deftitle'>{DEF.digraph.title[rus]}</p>
                        <p className='definfotext'>{DEF.digraph.text[rus]}</p>
                    </div>
                </div>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div className="letter consideration"><p className="bigletter bigletterserif"><span lang="ru">ң</span></p><div className="markplace">&nbsp;</div></div>
                    </div>
                    <div>
                        <p className='definfotext deftitle'>{DEF.consideration.title[rus]}</p>
                        <p className='definfotext'>{DEF.consideration.text[rus]}</p>
                    </div>
                </div>
            </div>
            <div className='definfowrap40'>
                <p className='definfotext deftitle'>{DEF.nonstandart.title[rus]}</p>
                <p className='definfotext'>{DEF.nonstandart.text[rus]}</p>
                <p className='definfotext deftitle'>{DEF.tags.title[rus]}</p>
                <p className='definfotext'>{DEF.tags.text[rus]}</p>

                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div className="letter repsign"><p className="bigletter bigletterserif"><span lang="ru">г</span></p><div className="markplace"><span className="altmark">equ</span></div></div>
                    </div>
                    <div>
                        <p className='definfotextnotitle'>{DEF.equivalent.title[rus]}</p>
                    </div>
                </div>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div className="letter"><p className="bigletter bigletterserif"><span lang="bg">ж</span></p><div className="markplace"><span className="altmark">locl: bg</span></div></div>
                    </div>
                    <div>
                        <p className='definfotextnotitle'>{DEF.local.title[rus]} (<a target='top' href="https://helpx.adobe.com/fonts/using/open-type-syntax.html#locl">OpenType feature&nbsp;‘locl’</a>)</p>
                    </div>
                </div>
            </div>
        </div>
        <p className='langinfo'>&nbsp;</p>
    </>)
};

export default DefinitionsContent;