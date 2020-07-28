function dcbt(x){
    if (x === 0){
        document.getElementById('decode').hidden = true;
        document.getElementById('encode').hidden = false;
        document.getElementById('ecbt').innerHTML = "<u>Encode</u>";
        document.getElementById('dcbt').innerHTML = "Decode";
    }else if (x === 1){
        document.getElementById('decode').hidden = false;
        document.getElementById('encode').hidden = true;
        document.getElementById('ecbt').innerHTML = "Encode";
        document.getElementById('dcbt').innerHTML = "<u>Decode</u>";
    }
}
function encode(){
    // used character: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.+-*/\¥=:;_^~|!?&#$%@'`"()[]{} 
    var l = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', '.', '+', '-', '*', '/', '\\', "¥", '=', ':', ';', '_', '^', "~", "|", '!', '?', '&', '#', '$', '%', "@", "'", '`', '"', '(', ')', '[', ']', '{', '}', ' '];
    tb = [];
    for (i=0;i<l.length;i++){//for i in range(len(l)):
        if (i > 0){
            var tl = l.slice(i);
            tl = tl.concat(l.slice(-(l.length), -(l.length)+i));
            tb.push(tl);
        }else{
            tb.push(l);
        }
    }
    // console.log(tb);
    var cipher = [];
    var txt = document.getElementById('txt-e').value;
    var key = document.getElementById('key-e').value;
    if (txt.length === 0 || key.length === 0){
        window.alert("please enter key or text...");
    }else{
        for (i=0;i<txt.length;i++){
            var k0 = tb[0].indexOf(txt[i]);
            var k1 = tb[0].indexOf(key[i%key.length]);
            cipher.push(tb[k1][k0]);
        }
        document.getElementById('ans-e').innerHTML = cipher.join("");
        document.getElementById('ans-ed').hidden = false;
        console.log(cipher);
    }
}
function decode(){
    // used character: abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.+-*/\¥=:;_^~|!?&#$%@'`"()[]{} 
    var l = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', '.', '+', '-', '*', '/', '\\', "¥", '=', ':', ';', '_', '^', "~", "|", '!', '?', '&', '#', '$', '%', "@", "'", '`', '"', '(', ')', '[', ']', '{', '}', ' '];
    tb = [];
    for (i=0;i<l.length;i++){//for i in range(len(l)):
        if (i > 0){
            var tl = l.slice(i);
            tl = tl.concat(l.slice(-(l.length), -(l.length)+i));
            tb.push(tl);
        }else{
            tb.push(l);
        }
    }
    // console.log(tb);
    var text = [];
    var cipher = document.getElementById('txt-d').value;
    var key = document.getElementById('key-d').value;
    if (cipher.length === 0 || key.length === 0){
        window.alert("please enter key or text...");
    }else{
        // console.log(cipher);
        // console.log(key);
        // console.log(cipher.length);
        // console.log(key.length);
        for (i=0;i<cipher.length;i++){
            // console.log(i%key.length);
            var k0 = tb[0].indexOf(key[i%key.length]);
            // console.log(k0 + " " + key[i%key.length] + " " + cipher[i] + " " + i);
            // console.log(tb[k0]);
            var k1 = tb[k0].indexOf(cipher[i]);
            text.push(tb[0][k1]);
        }
        document.getElementById('ans-d').innerHTML = text.join("");
        document.getElementById('ans-dd').hidden = false;
        console.log(text);
    }
}
