// ==UserScript==
// @name	UW Crscat Autolink
// @namespace	http://students.washington.edu/f/
// @description	Autolinks to the UW course catalog
// @include	http://*.washington.edu/*
// @include	https://*.washington.edu/*
// ==/UserScript==

(function () {
    const urlRegex = /\b([A-Z][A-Z &]{1,4}[A-Z])(?:&nbsp;)* +([0-9]{3})\b/g;

    const urls = {"ENVIR": "envst","Q SCI": "quantsci","ARCH": "archit","CAUP": "caup","CEP": "commenv","URBDP": "urbdes","CM": "constmgmt","L ARCH": "landscape","AFRAM": "afamst","AES": "aes","AAS": "asamst","CHSTU": "chist","AIS": "ais","ANTH": "anthro","ARCHY": "archeo","BIO A": "bioanth","AMATH": "appmath","ART": "art","ART H": "arthis","ASIAN": "asianll","CHIN": "chinese","HINDI": "hindi","INDN": "indian","INDON": "indones","JAPAN": "japanese","KOREAN": "korean","SNKRT": "sanskrit","THAI": "thai","TIB": "tibetan","VIET": "viet","ASTR": "astro","ATM S": "atmos","BIOL": "biology","BIOL": "biology","HUM": "centhum","CHEM": "chem","CL AR": "clarch","CL LI": "cling","CLAS": "clas","GREEK": "greek","LATIN": "latin","COM": "com","CHID": "chid","C LIT": "complit","DANCE": "dance","DRAMA": "drama","ECON": "econ","ENGL": "engl","GEN ST": "genst","GEOG": "geog","GERMAN": "germ","HSTAM": "ancmedh","HIST": "hist","HSTAS": "histasia","HSTAA": "histam","HSTEU": "modeuro","H A&S": "honors","EURO": "euro","SIS": "intl","SISAF": "intlafr","SISA": "intlasian","SISCA": "intlcan","RELIG": "religion","SISEA": "intleas","SISJE": "intljewish","SISLA": "intllatam","SISME": "intlmide","SISRE": "russeeuca","SISSA": "intlsoa","SISSE": "intlsea","FRLING": "frling","LING": "ling","ROLING": "romling","SPLING": "spanlin","MATH": "math","MUSIC": "music","MUSAP": "appmus","MUSED": "mused","MUSEN": "musensem","MUHST": "mushist","ARAB": "arabic","HEBR": "hebrew","NEAR E": "neareast","PRSAN": "persian","TKIC": "turkic","TKISH": "turkish","NBIO": "nbio","PHIL": "phil","PHYS": "phys","POL S": "polisci","PSYCH": "psych","FRENCH": "french","ITAL": "italian","PORT": "port","ROMAN": "romance","ROLING": "romling","RMN": "romanianr","SPAN": "spanish","DANISH": "danish","ESTO": "eston","FINN": "finnish","LATV": "latvian","LITH": "lith","NORW": "norweg","SCAND": "scand","SWED": "swedish","BCS": "bcs","BULGR": "bulgar","CZECH": "czech","POLSH": "polish","ROMN": "romanian","RUSS": "russian","SLAV": "slavic","SLAVIC": "slav","UKR": "ukrain","SOC": "soc","SPHSC": "sphsc","STAT": "stat","WOMEN": "women","BIOL": "biology","ACCTG": "acctg","ADMIN": "admin","B A": "ba","BA RM": "barm","B CMU": "buscomm","B ECON": "busecon","B POL": "bpol","FIN": "finance","HRMOB": "hrmob","I S": "infosys","I BUS": "intlbus","MKTG": "mktg","OPMGT": "opmgmt","O E": "orgenv","QMETH": "qmeth","ST MGT": "stratm","D HYG": "denthy","DPHS": "dphs","DENT": "dent","O S": "os","PEDO": "pedodon","ENDO": "endo","ORALB": "oralbio","ORALM": "oralm","ORTHO": "orthod","PERIO": "perio","PROS": "pros","RES D": "restor","EDC&": "edciamp;I","EDUC": "indsrf","EDTEP": "teached","EDLPS": "edlp","EDPSY": "edpsy","EDSPE": "sped","A A": "aa","CHEM E": "cheng","CSE": "cse","E E": "ee","ENGR": "engr","NUC E": "nuceng","IND E": "inde","MS E": "mse","M E": "meche","MEIE": "meie","T C": "techc","CFR": "forr","PSE": "paper","LIS": "lis","BMSD": "bmsd","GRDSCH": "grad","GTTL": "gttl","IPHD": "iphd","MCB": "mcb","MUSEUM": "museo","N&MES": "nearmide","NEUBEH": "neurobio","NUTR": "nutrit","QERM": "quante","QUAT": "qrc","BIOEN": "bioeng","UCONJ": "uconjoint","LAW": "law","LAW T": "lawt","LAW A": "lawa","LAW B": "lawb","LAW E": "lawe","ANEST": "anest","BIOC": "bioch","B STR": "biostruct","C MED": "compmed","S": "conjee School of Medicine","FAMED": "famed","HUBIO": "humbio","IMMUN": "immun","LAB M": "labmed","MEBI": "mebi","MHE": "medhist","MICROM": "microbio","NEUR S": "neurosurg","NEURL": "neurl","OB GYN": "obgyn","OPHTH": "ophthal","ORTHP": "orthop","OTOHN": "otol","PATH": "patho","PEDS": "pediat","PHCOL": "pharma","P BIO": "physiolbio","PBSCI": "psychbehav","R ONC": "radonc","RADGY": "radiol","REHAB": "rehab","CONJ": "conj","MED": "medicine","SURG": "surg","UROL": "uro","NSG": "nsg","NURS": "nursing","NCLIN": "nursingcl","NMETH": "nursingmeth","FISH": "fish","SMA": "marine","OCEAN": "ocean","MEDCH": "medchem","PCEUT": "pharmceu","PHARM": "pharmacy","PB AF": "pubaff","BIOST": "biostat","ENV H": "envh","EPI": "epidem","PHG": "phg","HSERV": "hlthsvcs","HSMGMT": "hsmgmt","PABIO": "pathobio","A S": "aerosci","M SCI": "milsci","N SCI": "navsci","SOC WF": "socwlbasw","SOC WL": "socwl","SOC W": "socwk"};
    
    function genlink(sec, nr)
    {
	    if (urls[sec] == undefined)
		    return "undefined";
	    return "http://www.washington.edu/students/timeschd/AUT2006/" + urls[sec] + ".html#" + sec.toLowerCase().replace(/\W/, '') + nr;
    }

    // tags we will scan looking for un-hyperlinked text
    var allowedParents = [
        "abbr", "acronym", "address", "applet", "b", "bdo", "big", "blockquote", "body", 
        "caption", "center", "cite", "code", "dd", "del", "div", "dfn", "dt", "em", 
        "fieldset", "font", "form", "h1", "h2", "h3", "h4", "h5", "h6", "i", "iframe",
        "ins", "kdb", "li", "object", "pre", "p", "q", "samp", "small", "span", "strike", 
        "s", "strong", "sub", "sup", "td", "th", "tt", "u", "var"
        ];

    var xpath = "//text()[(parent::" + allowedParents.join(" or parent::") + ")]";

    var candidates = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    for (var cand = null, i = 0; (cand = candidates.snapshotItem(i)); i++) {
        if (urlRegex.test(cand.nodeValue)) {
            var span = document.createElement("span");
            var source = cand.nodeValue;

            cand.parentNode.replaceChild(span, cand);

            urlRegex.lastIndex = 0;
            for (var match = null, lastLastIndex = 0; (match = urlRegex.exec(source)); ) {
		var url;
		url = genlink(match[1], match[2]);
		if (url == "undefined")
			continue;
                span.appendChild(document.createTextNode(source.substring(lastLastIndex, match.index)));

                var a = document.createElement("a");
                a.setAttribute("href", url);
                a.appendChild(document.createTextNode(match[0]));
                span.appendChild(a);

                lastLastIndex = urlRegex.lastIndex;
            }

            span.appendChild(document.createTextNode(source.substring(lastLastIndex)));
            span.normalize();
        }
    }

})();


