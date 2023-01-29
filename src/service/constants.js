export const JSON_PATH = 'https://raw.githubusercontent.com/paratype/paratype.github.io/main/';
// https://raw.githubusercontent.com/typedev/cyrillic_lib/master/

export const MAIN_MENU = {
    logo: ['Cyrillic reference book', 'Справочник языков'],
    about: ['About', 'О проекте'],
    languages: ['Languages', 'Языки'],
    panCyr: ['Pan-Cyrillic', 'Вся кириллица'],
    definitions: ['Definitions', 'Определения'],
    select: ['Select language', 'Выберите язык']
}

export const LANG_TITLES_RED = {
    latinNames: ['Latin names:', 'Латинские названия:'],
    langGroups: ['Language groups:', 'Языковые группы:']
}

export const LEGEND_BTNS = {
    case: ['Upper', 'Upper', 'Lower', 'Lower'],
    serif: ['Serif', 'Serif', 'Sans', 'Sans'],
    italic: ['Normal', 'Normal', 'Italic', 'Italic'],
    sort: ['Pan-Cyr', 'Пан-кир.', 'Unicodes', 'Юникоды'],
    textTable: ['Text table', 'Таблица'],
    parameters: ['Parameters', 'Параметры'],
    sortTitle: ['Sort', 'Сортировка']
};

export const SELECTED = {
    title: ['Selected languages', 'Выбранные языки'],
    reset: ['Reset selection', 'Сброс выбора'],
    none: ['none', 'ничего не выбрано']
}

export const DOWNLOAD = ['Download', 'Скачать'];

export const TABLE = {
    upper: ['Uppercase', 'Прописные'],
    lower: ['Lowercase', 'Строчные'],
    glyph: ['Glyph', 'Символ'],
    description: ['Description', 'Описание'],
    unicodes: ['Unicodes', 'Юникоды'],
    italic: ['italic', 'курсивное начертание'],
    normal: ['normal', 'прямое начертание']
}

export const DEF = {
    alphabet: {
        showInSmallHelp: false,
        title: ['Alphabet', 'Алфавит'],
        text: ['А system of character arrangement standardized for a particular language', 'Стандартный, для конкретного языка, набор знаков, структурированных в определённом порядке']
    },
    dialect: {
        showInSmallHelp: true,
        title: ['Dialect glyph forms', 'Диалектные формы'],
        text: ['Signs included in the dialect alphabets of a particular language', 'Знаки, входящие в алфавиты диалектов определённого языка']
    },
    historic: {
        showInSmallHelp: true,
        title: ['Historical glyph forms', 'Исторические формы'],
        text: ['Historical character forms previously used in the language', 'Исторические формы знаков, ранее использовавшиеся в языке']
    },
    extended: {
        showInSmallHelp: true,
        title: ['Extended Orphographic Notation', 'Дополнительные знаки'],
        text: ['Characters that carry an additional function in the support of a particular language (for more details, see the language description)', 'Знаки, несущие дополнительную функцию при поддержке определённого языка (более подробно смотрите в описании языка)']
    },
    digraph: {
        showInSmallHelp: true,
        title: ['Digraph', 'Диграфы'],
        text: ['Combinations of characters important for the language, not included in the alphabet', 'Важные для языка сочетания знаков, не входящие в алфавит']
    },
    consideration: {
        showInSmallHelp: true,
        title: ['Signs under consideration', 'Обсуждаемые'],
        text: ['The characters that are considered for inclusion to the alphabet', 'Символы, которые рассматриваются для включения в алфавит']
    },
    nonstandart: {
        showInSmallHelp: false,
        title: ['Non-standard Unicode code points', 'Нестандартные значения Unicode'],
        text: ['Unicode values starting from ‘F’ are assigned to characters outside of any standard block. These code points follow an informal convention accepted by several font manufacturers, including Paratype.', 'Значения Unicode, начинающиеся с «F», назначаются символам за пределами любого стандартного блока. Они следуют неофициальному соглашению, принятому несколькими производителями шрифтов, включая Paratype.']
    },
    tags: {
        showInSmallHelp: false,
        title: ['Tags', 'Метки'],
        text: ['An alphabet glyph forms might have several variants of graphical representation. Glyphs within a group of variants are tagged as follows:', 'Глифы алфавита могут иметь несколько вариантов графического представления. Глифы в группе вариантов помечены следующим образом:']
    },
    equivalent: {
        showInSmallHelp: false,
        title: ['Equivalent glyph forms', 'Эквивалентные формы'],
        text: ['', '']
    },
    local: {
        showInSmallHelp: false,
        title: ['Localized form', 'Локальные формы'],
        text: ['', '']
    },
    charset: {
        showInSmallHelp: false,
        title: ['Character set', 'Знаки Языка'],
        text: ['', '']
    },
}

export const DEF_SMALL = () => {
    let tmp = [];
    for (let item in DEF) {
        if (DEF[item].showInSmallHelp)
            tmp.push({ ...DEF[item], type: item })
    };
    return tmp
};

export const DISCLAIMER_TEXT = [
    "*** Important: not all characters are displayed correctly with the system font and may be invisible in this file, so pay attention to unicodes. To correctly display all the characters on the screen, install the necessary fonts (PT Sans Expert - github.com/paratype/paratype.github.io/tree/main/cyrillic-languages/fonts/web).",
    "*** Важно: не все символы корректно отображаются системным шрифтом и могут быть невидимы в этом файле, поэтому обратите внимание на юникоды. Для корректного отображения всех символов на экране установите необходимые шрифты (PT Sans Expert - github.com/paratype/paratype.github.io/tree/main/cyrillic-languages/fonts/web)."
]