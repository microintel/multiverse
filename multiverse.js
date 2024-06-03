let arr={
"abcd":[" xFRZDkqshvWJoyVwtpKeTYSPzuNIAdrcjXnQmfLlUEBMbGHCgiaO"],
"alpha":[` £%©<®™✓[>xDIUT7F]@#$_&- +AqOcP9fiywuR3p0vs8ZthnHWVL1CJ4Se5(/)*:;!?~|•√π÷6NmBG2KXMErQloYgk×§∆}\={°^¥€¢dbzaj`],
"spc":[" ]@#$_&-+(/)*:;!?~`|•√π÷×§∆}\={°^¥€¢£%©<®™✓[>"],
"kalpha":[` x×§∆}\={°^¥€¢ಪP0ಅಃvmC5tSZಘದfBಖ]@#$_&-+Iಶ9TನFJಛರಬಙAUHಋwlಮಠಫXಅಂಎh(/)*:;!?~|•√π÷ಏzಒKಢ2oicಕಆಗaಔqr7eಚತವNnಭ£%©<®™✓[>ಥಲಯW4pಉಳskgಇdೠಐGಅyMಞಣVuLDಧಈQಟ68bಜಓOಝ3RಸಊE1Yjಹಷಡ`],
"telpha":[` ప×§∆}\={°^¥€¢lద]@#$_&-+xkIpGoఈUgdbKభఊ2TనDJగXOAsurvMఏచfఢణఛ£%©<®™✓[>6qశఐమజYటసQహ31తఫEఅఃy5బఖఝఇwHఓ8(/)*:;!?~|•√π÷Vౠ9tషఔnFరఎjmWఅంఞPఉఙఅథళhలZయiఋ4R0NzఠL7ధBకCeఆవఘడcSaఒ`],
"galpha":[` z8×§∆}\={°^¥€¢μ4XΙ56ωθ7osHhFKεΟqSjΣκγ0PΡGρΛΖ]@#$_&-+νπyDΕτaΠΤψEΞZΑΔx2CV£%©<®™✓[>αΝηΗwδdiλοkfvpe(/)*:;!?~|•√π÷rtΚN9ΘβuIΓ1RnΥΦΩlφξJζWAυ3cLMΒmσιbΨYΧTχgQUOΜB`],
"talpha":[` rLC×§∆}\={°^¥€¢ணஷஹ1]@#$_&-+sJஐl௬SQI௨ஃச7HU6ளஓcxX8௭ஏyஎdZ£%©<®™✓[>௫V2ழgehWஇ45உFNqvகஞfநaரலzjயAஒ௦Yo0௪Mடbnங3௯i௧pKஸDkஜTEஈuனவறத௮(/)*:;!?~|•√π÷GஊஅBtமஔஆRm௩wறO9Pப`],
"malpha":[` E3×§∆}\={°^¥€¢KVഔgഉrഊഢUഷൠഓo(/)*:;!?~|•√π÷NQkjzYണരnഅഃHstpRbലബ9ഗxദശ6]@#$_&-+fയ7iഎഘDധങകആCവM8mഫഛh2uസ0wഇq5ഥWഋJG£%©<®™✓[>തFച4ഏdcഅംTഭഈaഝXLZഠമഒvജyഐപA1ഞPeഡനOഖIടSBഅl`],
"nalpha":[` jHo×§∆}\={°^¥€¢छओठ]@#$_&-+zaAYधUऊफ8ञTVSऎnगiOवजचलअं9Cअःयऍvईहङxघ36lp(/)*:;!?~|•√π÷wKrXदmsFB0प5भgeNfEGबसझनथd4एQIMऐख7yLhअt£%©<®™✓[>uऒ1RbJमषcडऑशइआरऌऔ2टऋkणZउWPDतढqक`],
"allpha":[` एSv×§∆}\={°^¥€¢ऌoஅऔगവఫఙपऒರమಹಇणത]@#$_&-+ఆछശXಧवஈಟമडZళഒബఅంx௭ఊఉyఓఅങಮयభരಷUഝనಔடഅഹపPಕஹಒ௧फत(/)*:;!?~|•√π÷ടಲLஃब3ഥषளകsదഈஙಈసఔಊഢEಯNGeW£%©<®™✓[>ಅഠಠఠथಫഘఢವअகईचಓഖரഭமmశउಝಆTಜ௫जwअःఝङഛആऑಳദനಥபஓയzआచAಛഉD8ಋऎఖഷOऍഡBஷकஆइದnq௪வൠலఐగఛrఎಞహअंदಏളಬमഓఘಉटJहऊணஊషಢറಡdसஉಗല0డఋaణखற௩Qஐधധಚಐ5भघಭழఈಅಂ6ഏऋ9gണഔഞ2ೠఞಖరഇlవఅఃVഅംRCஜ௦ऐKథജஇलஏनYuഫश௨ஒఒతk7క4ढఇசMఏഅഃചౠ௬ओஸञಪhഋठtಣHறfpனഐjதಸబഗಘಅಃయഊధIरನಎFలbஎஞഎiಶ1టcజझಙயസநഴஔತപ`]
 };
 
function ed(inpu,ed,keyy,typee) {
   let val=String(typee);
   
   let a=String(arr[val]);
   let vall=a.length-10;
    const input = String(inpu);
    const key = parseInt(keyy);
    const b = a.substr(key) + a.substr(0, key);
    const sele = String(ed);

    if (key < 2 || key > vall) {
        return "Invalid key value. Please choose a key between 1 and "+vall;
    }

    if (sele === "e") {
       return en(input, key, a, b);
    } else if (sele === "d") {
       return de(input, a, b);
    } else {
        return "Invalid operation";
    }
}

function en(input, key, a, b) {
    let enc = "";
    for (let x of input) {
        enc += b[a.indexOf(x)];
    }
    let xc = b.substr(key, 8);
    let xz = a.substr(key, 8);
    let en = xc.substr(0, 4) + xz.substr(0, 4) + enc + xc.substr(4) + xz.substr(4);
    return en;
}

function de(input, a, b) {
    let dec = "";
    let xf = input.slice(8, -8);
    for (let x of xf) {
        dec += a[b.indexOf(x)];
    }
    return dec;
}
