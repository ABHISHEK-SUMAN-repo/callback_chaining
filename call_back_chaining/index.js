function lc(str,rmw1)
{
    const str1 = str.toLowerCase()
    console.log(str1)
    rmw1(str1,wnd)
}

function rmw(str1,wnd1)
{
    const str2 = str1.replace(/\s/g,'')
    console.log(str2)
    wnd1(str2,cnt_pallindrome)
}


function wnd(str2,cnt_pallindrome1)
{
    //const str3 = str2.toLowerCase()
    const str3 = str2.replace(/[0-9]/g, '');
    console.log(str3)
    console.log(cnt_pallindrome1(str3))
}

function cnt_pallindrome(str3) {
    let subStrings = [];

    for (let i = 0; i < str3.length; i++) {
      for(let j = 0; j < str3.length - i; j++) {
        let subString = str3.substring(j, j+i+1);
        if(subString === subString.split('').reverse().join('') && !subStrings.includes(subString)) {
          subStrings.push(subString);
        }
      }
    }
    return subStrings.length;
}





const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`write the sentence`, name => {
    //console.log(`Hi ${name}!`)
    lc(`${name}`,rmw)
    readline.close()
  })
// function callfunction(str,callback1,callback2)
// {
//     let store = str.callback1;
//     console.log(store);
//     callback2(str,callback1,callback2);
// }


// function lc(str,toLowerCase,wsp)
// {
    
// }