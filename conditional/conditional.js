let CEO = "CEO maka tugas saya adalah pemimpin perusahaan."
let CTO = "CTO maka tugas saya adalah memastikan bahwasannya setiap teknologi"
" yang sedang digunakan mampu menunjang kebutuhan perusahaan"
let HR = "HRD maka tugas saya adalah bertanggung jawab dalam pengelolaan SDM"
let Programmer = "CTO maka tugas saya adalah mengembangkan sebuah aplikasi"



if (CEO){
    console.log("Jika saya seorang " + CEO);
}else if(CTO){
    console.log("Jika saya seorang " + CTO);
}else if(HR){
    console.log("Jika saya seorang " + HR);
}else if (Programmer){
    console.log("Jika saya seorang " + Programmer);

}

let a = 20
let b = 20

if (a > b){
    console.log("nilai a lebih besar dari nilai b");
} else if(a < b){
    console.log("nilai a lebih kecil dari nilai b");
} else if(a=b) {
    console.log("nilai a sama besar dengan nilai b");
}

let day = 1
switch (day) {
    case 1:
      console.log("Minggu");
      break;
    case 2:
      console.log("Senin");
      break;
    case 3:
      console.log("Selasa");;
      break;
    case 4:
      console.log("Rabu");;
      break;
    case 5:
      console.log("Kamis");;
      break;
    case 6:
      console.log("Jumat");;
      break;
    case 7:
      console.log("Sabtu");;
  }

  let move = "LEFT"
  switch (move){
      case "UP":
          console.log("Karakter berjalan ke atas dan mencapai langit");
          break;
      case "DOWN":
          console.log("Karakter berjalan ke bawah dan mencapai perut bumi");
          break;
      case "RIGHT":
          console.log("Karakter berjalan ke kanan dan menemukan kebaikan");
      case "LEFT":
          console.log("Karakter berjalan ke kiri dan menemukan ??");
  }