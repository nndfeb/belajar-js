/**
 * ? Switch Statment
 * Kadang kita hanya butuh menggunakan kodisi sederhana di if statemnt, seperti hanya menggunakan perbadningan ===
 * Switch adalah statemnt percabangan yang sama dengan if namun lebih sederhana cara pembuatannya
 * Kondisi di switch statment hanya untuk perbandingan ===
 */

// let nilai = "Z";
let nilai = "A";
switch (nilai) {
  case "A":
    console.log("anda lulus dengan baik");
    break;
  case "B":
  case "C":
    console.log("Anda lulus");
    break;
  case "D":
    console.log("Tidak lulus");
    break;
  default:
    console.log("anda salah jurusan");
}
// Output : anda lulus dengan baik
