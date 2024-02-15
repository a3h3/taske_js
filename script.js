// problem ===> (1)

function str(text) {
    let text_all = text.split("").reverse().join("");
    console.log(text_all);
}
str("ahmed");
// ===========================================================

// problem ===> (2)

function text(str1, str2) {
    let text1 = str1.toLocaleLowerCase().includes("mohamed");
    let text2 = str2.toLocaleLowerCase().includes("mohamed");

    if (text1 === text2) {
        console.log(true);
    }else{
        console.log(false);
    }
}
text("mohamed", "MohAmeD")
// ===========================================================

// problem ===> (3)

function Upper(str) {

    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === str.charAt([i]).toLocaleUpperCase()) {
            console.log(true);
        }else{
            console.log(false);
        }
    }
}
Upper('AHMED')
// ===========================================================

// problem ===> (4)

function data() {
    let text = 'moamen';
    console.log(text.slice(1, 5));
}
data()
// ===========================================================

// problem ===> (5)

function user(name1, name2, name3) {
    let all_name = name1.concat(` ${name2}`, ` ${name3}`);
    console.log(all_name);
}
user("ahmed", "yasser", "hashem")
// ===========================================================

// problem ===> (6)


// ===========================================================

// problem ===> (7)

function x() {
    let text = '         ahmed          ';
    console.log(text.trim());
}
x()
// ===========================================================

// problem ===> (8)

function url(text) {
    let re = /(\bwww.|.com\b)/ig
    console.log(re.test(text));
}
url("www.ahmed.com")
// ===========================================================

// problem ===> (9)


// ===========================================================

// problem ===> (10)
















