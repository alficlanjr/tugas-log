let nama =["jika kamu tau rasanya ditinggalkan", "jangan tinggalkan sholat"] ;
let tampil=""
for (let i = 0; i < nama.length; i++){
    tampil += nama[i]+"<br>";
}
document.getElementsById("a").innerHTML = tampil;