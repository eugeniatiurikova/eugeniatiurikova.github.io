import React from 'react';
import { useSelector } from 'react-redux';
import { LANG_TITLES_RED } from '../../service/constants';


const Language = () => {
    const rus = useSelector(state => state.rus);
    const language = useSelector(state => state.language);
    const langnames = useSelector(state => state.language.alt_names_eng);

    return (<>
        <p className='langtitle'>{rus ? language.name_rus : language.name_eng}</p>
        <div className='innercontainer'>
            <table className='langparams'><tbody>
                <tr>
                    <td className='langlist langlisttitle'>{LANG_TITLES_RED.latinNames[rus]}</td>
                    <td className='langlist'>{langnames?.join(', ')}</td>
                </tr>
                <tr>
                    <td className='langlist langlisttitle tablenoborder'>{LANG_TITLES_RED.langGroups[rus]}</td>
                    <td className='langlist tablenoborder'>
                        {rus ?
                            language?.language_group_rus?.join(', ') :
                            language?.language_group_eng?.join(', ')}
                    </td>
                </tr>
            </tbody></table>
            <p className='langinfo'>{rus ? language.description_rus : language.description_eng}</p>
        </div>
    </>);
};

export default Language;