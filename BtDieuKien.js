// bài 3 tính giá xem phim theo độ tuổi
let giavetreem = 15000;
let giavenguoilon = 45000;
let giavenguoicaotuoi = 35000
function banve(){
    let sotuoi = document.getElementById('age').value
    if(sotuoi<0){
        alert('so tuoi khong hop le');
    }else if (sotuoi<=12){
        alert(giavetreem);
    }else if (sotuoi<=60){
        alert(giavenguoilon);
    }else if (sotuoi>60){
        alert(giavenguoicaotuoi);
    }else {
        alert(giavenguoicaotuoi);
    }
}
// bài 2 phân loại độ tuổi
function dotuoi(){
    let sotuoi = document.getElementById('dotuoi').value
    if (sotuoi<0){
        alert('so tuoi khong hop le');
    }else if (sotuoi<=10){
        alert('tre em');
    }else if (sotuoi<=23){
        alert('thieu nien');
    }else if (sotuoi<=35){
        alert('truong thanh');
    }else if (sotuoi<=60){
        alert('trung nien')
    }else if (sotuoi<85){
        alert('nguoi từng trẻ')
    }else {
        alert("đi họp")
    }
}

// bài 1 hiển thị ngày trong tháng
function sothnag(){
    let month = document.getElementById('thang').value
    if (month==2){
        alert('28 hoac 29 ngay')
    }else if (month==4 && month==6 && month==9 && month==11){
        alert('30ngay')
    }else if (month==1 && month==3 && month==5 && month==7 && month==8 && month==10 && month==12){
        alert('31ngay')
    }else {
        alert('31 ngay')
    }
}

//bài 4 chọn chay thịt hải sản
function showFood() {

    let foodDecide = document.querySelector('input[name="foodType"]:checked').value;

    if (foodDecide === "vegetable") {
        alert("xà lách");
    }
    else if (foodDecide === "meat") {
        alert("thịt ba chỉ ");
    }
    else {
        alert("tôm hùm ");
    }
}
// bài 5 Phân loại Mùa trong Năm:
// Dựa trên tháng được nhập vào, chương trình sẽ phân loại mùa hiện tại (Xuân, Hạ, Thu, Đông).
function checkSeason() {
    let a = document.getElementById("inputA").value;

    switch (a) {
        case '1':
        case '2':
        case '3':
            alert("Sprint");
            break;
        case'4':
        case'5':
        case'6':
            alert("Summer");
            break;
        case'7':
        case'8':
        case'9':
            alert("Autumn");
            break;
        case'10':
        case'11':
        case'12':
            alert("Winter");
            break;
        default:
            alert("Invaild Month");
    }
}
// bài 6 :
// tính điểm thưởng
function checkPoint() {

    let a = document.getElementById("inputA").value

    if (a > 0 && a < 50) {
        alert("ít ");
    }
    else if (a >= 50 && a < 500) {
        alert("vừa ")
    }
    else if (a >= 500 && a < 1000) {
        alert("khá")

    }
    else {
        alert("nhiều")
    }



}
// bài 7 Chương trình Đánh giá Điều kiện Thời tiết:
//     Người dùng nhập vào nhiệt độ hiện tại, và chương trình sẽ đánh giá thời tiết là lạnh, mát mẻ, ấm áp, hay nóng.
function checkThoiTiet() {

    let a = document.getElementById("inputA").value;

    if (a >= 30) {
        alert("trời nóng lắm");
    }
    else if (a >= 20 && a < 30) {
        alert("trời đẹp đỏ ");
    }
    else {
        alert("trời lạnh");
    }
}