var css = document.createElement('style');
css.type = 'text/css';

css.innerHTML = '@font-face{font-family:boobs;src:url(data:application/x-font-woff;charset=utf-8;base64,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) format(\'woff\');font-weight:400;font-style:normal}i.boob{font-family:boobs!important;position:relative!important;color:#f9e1c7!important;font-size:200%!important;font-style:normal;line-height:1em!important}i.boob:before{content:\'p\'!important;position:absolute!important;left:0!important;top:0!important;color:#ffbdb5!important}i.boob:after{content:\'q\'!important;position:absolute!important;left:0!important;top:0!important;color:#eab0a5!important}';


document.body.appendChild(css);

var elems = [];
elems = elems.concat(toArray(document.getElementsByTagName('p')));

elems = elems.concat(toArray(document.getElementsByTagName('h1')));

elems = elems.concat(toArray(document.getElementsByTagName('h2')));

elems = elems.concat(toArray(document.getElementsByTagName('h3')));

elems = elems.concat(toArray(document.getElementsByTagName('h4')));

elems = elems.concat(toArray(document.getElementsByTagName('h5')));

elems = elems.concat(toArray(document.getElementsByTagName('h6')));

elems = elems.concat(toArray(document.getElementsByTagName('span')));

elems = elems.concat(toArray(document.getElementsByTagName('a')));

elems = elems.concat(toArray(document.getElementsByTagName('quote')));

elems = elems.concat(toArray(document.getElementsByTagName('article')));

elems = elems.concat(toArray(document.getElementsByTagName('em')));

elems = elems.concat(toArray(document.getElementsByTagName('pre')));

elems.forEach(function(elem){
    console.log(elem);
    var str = elem.innerHTML;
    if(str.indexOf('<a') != -1) return false;
    if(str.indexOf('<img') != -1) return false;
    if(str.indexOf('<input') != -1) return false;
    if(str.indexOf('<textarea') != -1) return false;
    if(str.indexOf('<button') != -1) return false;
    str = str.replace( /[o]/g , '<i class=\'boob\'>o</i>');
    elem.innerHTML = str;
});

function toArray(obj) {
    var array = [];
    for (var i = obj.length >>> 0; i--;) {
        array[i] = obj[i];
    }
    return array;
}