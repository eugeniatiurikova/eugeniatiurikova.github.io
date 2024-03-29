import { useDispatch, useSelector } from "react-redux";

const About = () => {
    const dispatch = useDispatch();
    const rus = useSelector(state => state.rus);

    const handleChangePancyrillic = () => {
        dispatch({ type: 'switchPage', payload: 1 });
    };

    if (rus) return (<>
        <p className='langtitle'>О проекте</p>
        <p className='langinfo_next redtext'><br />Мы создали эту базу знаний, когда разрабатывали шрифты с&nbsp;расширенной кириллицей. В&nbsp;ней около&nbsp;80&nbsp;языков.</p>
        <p className='langinfo_next'>База знаний содержит как&nbsp;действующие алфавиты, так&nbsp;и&nbsp;их исторические варианты, которые использовались для&nbsp;некоторых языков в&nbsp;недалёком прошлом.</p>
        <p className='langinfo_next'>При&nbsp;разработке шрифтов мы&nbsp;ориентируемся, мы&nbsp;ориентируемся не&nbsp;только на&nbsp;официальные алфавиты, но&nbsp;и на&nbsp;другие важные для&nbsp;Языка знаки. Поэтому на&nbsp;страницах с&nbsp;языками вы&nbsp;найдёте и&nbsp;алфавит, и&nbsp;группы дополнительных знаков. Последние могут пригодиться в&nbsp;исторических книгах, учебниках и&nbsp;справочниках.</p>
        <p className='langinfo_next'>Информация о&nbsp;знаках, которые поддерживают языки, дублируется на&nbsp;странице «<span className="aspan" onClick={handleChangePancyrillic}>Вся кириллица</span>». Там&nbsp;представлен суммарный кириллический алфавит, поддерживающий все&nbsp;языки, представленные в&nbsp;этом проекте. </p>
        <p className='langinfo_next'>На&nbsp;странице какого-либо Языка можно выбрать интересующий тип шрифта (гротеск или&nbsp;антикву), регистр (набор прописными или&nbsp;строчными) и&nbsp;начертание (прямое или&nbsp;курсивное).</p>
        <p className='langinfo_next'>Проект будет полезен дизайнерам шрифта и&nbsp;всем интересующимся кириллицей в качестве справочного материала.</p>
        <p className='langinfo_next'>В проекте мы&nbsp;использовали специальную версию шрифтов <a href="https://github.com/paratype/paratype.github.io/tree/main/cyrillic-languages/fonts/web" target='top'>PT&nbsp;Sans&nbsp;Expert и&nbsp;PT&nbsp;Serif&nbsp;Expert</a> (Paratype, 2022, OFL).</p>
        <p className='langinfo_next'>Будем рады вашим <a href="mailto:fonts@paratype.com">комментариям</a>. Они помогут проекту развиваться.</p>
        <p className='langinfo'>&nbsp;</p>
    </>)

    else return (<>
        <p className='langtitle'>About the project</p>
        <p className='langinfo_next redtext'><br />This is a&nbsp;knowledge base that contains about 80&nbsp;Languages.<br />We created it when developing fonts with extended Cyrillic.</p>
        <p className='langinfo_next'>The knowledge base includes current alphabets and&nbsp;historical variants used in&nbsp;the&nbsp;recent past for some&nbsp;Languages.</p>
        <p className='langinfo_next'>When developing fonts, we&nbsp;focus not&nbsp;only on&nbsp;official alphabets but also on&nbsp;other characters required to&nbsp;support a Language. That's why, for&nbsp;each Language, you'll find both the&nbsp;alphabet and&nbsp;the&nbsp;groups of&nbsp;additional characters. The&nbsp;latter may come useful in&nbsp;historical books, textbooks, and&nbsp;reference books.</p>
        <p className='langinfo_next'>Information about the&nbsp;characters supporting each of&nbsp;the&nbsp;Languages is&nbsp;also on&nbsp;a&nbsp;separate page&nbsp;— the&nbsp;<span className="aspan" onClick={handleChangePancyrillic}>Pan-Cyrillic Character set</span>. It&nbsp;contains a&nbsp;full Pan-Cyrillic alphabet that supports all&nbsp;of&nbsp;the&nbsp;languages represented in&nbsp;this project.</p>
        <p className='langinfo_next'>When browsing a&nbsp;Language, you can&nbsp;choose the&nbsp;desired font type (serif or&nbsp;sans-serif), case (set of&nbsp;uppercase or&nbsp;lowercase characters), and&nbsp;font style (upright or&nbsp;italic).</p>
        <p className='langinfo_next'>As a&nbsp;reference material, this project can be&nbsp;useful for font designers and anyone interested in&nbsp;Cyrillic.</p>
        <p className='langinfo_next'>The project uses a&nbsp;special version of the fonts <a href="https://github.com/paratype/paratype.github.io/tree/main/cyrillic-languages/fonts/web" target='top'>PT Sans Expert and PT Serif Expert</a> (Paratype, 2022, OFL).</p>
        <p className='langinfo_next'>We’ll be&nbsp;grateful <a href="mailto:fonts@paratype.com">for your comments, suggestions, and&nbsp;advice</a> that will help us&nbsp;make the&nbsp;project better.</p>
        <p className='langinfo'>&nbsp;</p>
    </>)
};

export default About;