const DefinitionsContent = () => {
    return (<>
        <div className='legendinfocontainer' >
            <div className='legendinfowrap60'>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div className="letter "><p className="bigletter bigletterserif"><span lang="ru">а</span></p><div class="markplace">&nbsp;</div></div>
                    </div>
                    <div>
                        <p className='legendinfotext legengtitle'>Alphabet</p><p className='legendinfotext'>А system of character arrangement standardized for a particular language.</p>
                    </div>
                </div>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div class="letter dialect"><p class="bigletter bigletterserif"><span lang="ru">ҙ</span></p><div class="markplace">&nbsp;</div></div>
                    </div>
                    <div>
                        <p className='legendinfotext legengtitle'>Dialect glyph forms</p><p className='legendinfotext'>Signs included in the dialect alphabets of a particular language.</p>
                    </div>
                </div>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div class="letter historic"><p class="bigletter bigletterserif"><span lang="ru">ҕ</span></p><div class="markplace">&nbsp;</div></div>
                    </div>
                    <div>
                        <p className='legendinfotext legengtitle'>Historical glyph forms</p><p className='legendinfotext'>Historical character forms previously used in the language</p>
                    </div>
                </div>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div class="letter extended"><p class="bigletter bigletterserif"><span lang="ru">ў</span></p><div class="markplace">&nbsp;</div></div>
                    </div>
                    <div>
                        <p className='legendinfotext legengtitle'>Extended Orphographic Notation</p><p className='legendinfotext'>Characters that carry an additional function in the support of a particular language (for more details, see the language description)</p>
                    </div>
                </div>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div class="letter digraph"><p class="bigletter bigletterserif"><span lang="ru">дж</span></p><div class="markplace">&nbsp;</div></div>
                    </div>
                    <div>
                        <p className='legendinfotext legengtitle'>Digraph</p><p className='legendinfotext'>
                            Combinations of characters important for the language, not included in the alphabet</p>
                    </div>
                </div>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div class="letter consideration"><p class="bigletter bigletterserif"><span lang="ru">ң</span></p><div class="markplace">&nbsp;</div></div>
                    </div>
                    <div>
                        <p className='legendinfotext legengtitle'>Signs under consideration</p><p className='legendinfotext'>
                            The characters that are considered for inclusion to the alphabet</p>
                    </div>
                </div>
            </div>
            <div className='legendinfowrap40'>
                <p className='legendinfotext legengtitle'>Non-standard Unicode code points</p><p className='legendinfotext'>
                    Unicode values starting from ‘F’ are assigned to characters outside of any standard block. These code points follow an informal convention accepted by several font manufacturers, including Paratype.</p>
                <p className='legendinfotext legengtitle'>Tags</p><p className='legendinfotext'>
                    An alphabet glyph forms might have several variants of graphical representation. Glyphs within a group of variants are tagged as follows:</p>

                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div class="letter repsign"><p class="bigletter bigletterserif"><span lang="ru">г</span></p><div class="markplace"><span class="altmark">equ</span></div></div>
                    </div>
                    <div>
                        <p className='legendinfotextnotitle'>Equivalent glyph forms</p>
                    </div>
                </div>
                <div className="defcontainer">
                    <div className="defletterwrap">
                        <div class="letter"><p class="bigletter bigletterserif"><span lang="bg">ж</span></p><div class="markplace"><span class="altmark">locl: bg</span></div></div>
                    </div>
                    <div>
                        <p className='legendinfotextnotitle'>Localized form (<a target='top' href="https://helpx.adobe.com/fonts/using/open-type-syntax.html#locl">OpenType feature&nbsp;‘locl’</a>)</p>
                    </div>
                </div>
            </div>
        </div>

    </>)
};

export default DefinitionsContent;