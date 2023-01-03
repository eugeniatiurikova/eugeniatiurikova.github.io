export function isBorderNeeded(letter, italic) {
    let altslength = letter.alts ? letter.alts.length : 0;
    if (altslength > 0) {
        letter.alts.forEach(item => {
            if ((item.types.indexOf('italic') >= 0) && !italic) { altslength -= 1 }
            if ((item.types.indexOf('straight') >= 0) && italic) { altslength -= 1 }
        });
    }
    return (altslength <= 0) ? false : true
}

export function getTypes(types, italic) {
    let color = "";
    let mark = null;
    let show = true;
    let letter = "";
    if (types) {
        if (types.indexOf('localform') >= 0) {
            if ((types.indexOf('italic') >= 0) && italic) { show = false }
            if ((types.indexOf('straight') >= 0) && !italic) { show = false }
        }

        if (types.indexOf('dialect') >= 0) { color = 'dialect' }
        if (types.indexOf('historic') >= 0) { color = 'historic' }
        if (types.indexOf('extended') >= 0) { color = 'extended' }
        if (types.indexOf('digraph') >= 0) { color = 'digraph' }
        if (types.indexOf('consideration') >= 0) { color = 'consider' }
        if (types.indexOf('foreign') >= 0) { color = 'foreign' }

        if (types.indexOf('localform') >= 0) { mark = 'locl' }
        if (types.indexOf('alternatesign') >= 0) { mark = 'equ' }
        if (types.indexOf('equivalentsign') >= 0) { mark = 'equ' }
        if (types.indexOf('replacementsign') >= 0) {
            mark = 'equ';
            color = (color === '') ? ' repsign' : 'rep' + color;
            letter = 'unselectedletter'
        }

        if (italic && (types.indexOf('straight') >= 0) && (types.indexOf('replacementsign') >= 0)) { mark = null; color = '' }
        if (!italic && (types.indexOf('italic') >= 0) && (types.indexOf('replacementsign') >= 0)) { mark = null; color = '' }

    }
    return { color, mark, letter, show }
}

export function getLang() {
    var s = window.location.search.match(new RegExp('language=([^&=]+)'));
    return s ? s[1] : 'Abkhazian';
}

export function getURLstring(ui, lang, pg) {
    let urlstring = '';
    let uilangstr = (ui == 0) ? 'en' : 'ru';
    let tmplang = (lang && (lang !== 'null')) ? 'lang=' + lang + '&' : '';
    urlstring = '?' + tmplang + 'ui=' + uilangstr + '&pg=' + pg;
    return urlstring;
}

export function getParams(name) {
    var s = window.location.search;
    s = s.match(new RegExp(name + '=([^&=]+)'));
    return s ? s[1] : false;
}

export function contains(where, what) {
    for (var i = 0; i < what.length; i++) {
        if (where.indexOf(what[i]) >= 0) return true;
    }
    return false;
}