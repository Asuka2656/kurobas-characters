let array = ['学校'];
let setJson = JSON.stringify(array);
localStorage.setItem('key', 'setJson');
// console.log(array);
var ref = document.referrer;
console.log(ref + 'から訪れました');

// 配列を作る（最初は空）（let array = [];）
// JSONにする（let setJson = JSON.stringify(array);
// 配列をローカルストレージにぶち込む（localStorage.setItem('key', 'setJson');）

// 各ボタンが押された時に、localstorageから配列拾ってくる(let getJson = localStorage.getItem('key');)
// パースする（array = JSON.parse(getJson);)
// 対応する文字列を配列に突っ込む（array.push('学校');）
// 配列の最後の番号を指定する（let number = array.length - 1;）
// 配列の最後の値によって、表示する内容を変える（if(array[number] === '学校'){学校の時の処理}elseif(){}elseif(){}else{};)
// JSONにする（setJson = JSON.stringify(array);)
// もっかいローカルストレージにぶち込む（localstrage.setItem('key', 'setJson');）

$(function () {
    $(function () {
        let number = array.length - 1;
        // console.log(number);
        if (array[number] === '学校') {
            $("#table1").css("display", "block");
            $("#table2").css("display", "none");
            $("#table3").css("display", "none");
            $("#table4").css("display", "none");
            $("#school").css("pointer-events", "none");
            $("#position").css("pointer-events", "auto");
            $("#name").css("pointer-events", "auto");
            $("#grade").css("pointer-events", "auto");
        } else if (array[number] === 'ポジション') {
            $("#table1").css("display", "none");
            $("#table2").css("display", "block");
            $("#table3").css("display", "none");
            $("#table4").css("display", "none");
            $("#school").css("pointer-events", "auto");
            $("#position").css("pointer-events", "none");
            $("#name").css("pointer-events", "auto");
            $("#grade").css("pointer-events", "auto");
        } else if (array[number] === '学年') {
            $("#table1").css("display", "none");
            $("#table2").css("display", "none");
            $("#table3").css("display", "block");
            $("#table4").css("display", "none");
            $("#school").css("pointer-events", "auto");
            $("#position").css("pointer-events", "auto");
            $("#grade").css("pointer-events", "none");
            $("#name").css("pointer-events", "auto");
        } else if (array[number] === '名前') {
            $("#table1").css("display", "none");
            $("#table2").css("display", "none");
            $("#table3").css("display", "none");
            $("#table4").css("display", "block");
            $("#school").css("pointer-events", "auto");
            $("#position").css("pointer-events", "auto");
            $("#grade").css("pointer-events", "auto");
            $("#name").css("pointer-events", "none");
        }
    })
    $("#school").click(function () {
        $("#table1").css("display", "block");
        $("#table2").css("display", "none");
        $("#table3").css("display", "none");
        $("#table4").css("display", "none");
        $("#school").css("pointer-events", "none");
        $("#position").css("pointer-events", "auto");
        $("#name").css("pointer-events", "auto");
        $("#grade").css("pointer-events", "auto");
        let getJson = localStorage.getItem('key');
        array = JSON.parse(getJson);
        array.push('学校');
        setJson = JSON.stringify(array);
        localStorage.setItem('key', 'setJson');
    });
    $("#position").click(function () {
        $("#table1").css("display", "none");
        $("#table2").css("display", "block");
        $("#table3").css("display", "none");
        $("#table4").css("display", "none");
        $("#school").css("pointer-events", "auto");
        $("#position").css("pointer-events", "none");
        $("#name").css("pointer-events", "auto");
        $("#grade").css("pointer-events", "auto");
        let getJson = localStorage.getItem('key');
        array = JSON.parse(getJson);
        array.push('ポジション');
        setJson = JSON.stringify(array);
        localStorage.setItem('key', 'setJson');
    });
    $("#grade").click(function () {
        $("#table1").css("display", "none");
        $("#table2").css("display", "none");
        $("#table3").css("display", "block");
        $("#table4").css("display", "none");
        $("#school").css("pointer-events", "auto");
        $("#position").css("pointer-events", "auto");
        $("#grade").css("pointer-events", "none");
        $("#name").css("pointer-events", "auto");
        let getJson = localStorage.getItem('key');
        array = JSON.parse(getJson);
        array.push('学年');
        setJson = JSON.stringify(array);
        localStorage.setItem('key', 'setJson');
    });
    $("#name").click(function () {
        $("#table1").css("display", "none");
        $("#table2").css("display", "none");
        $("#table3").css("display", "none");
        $("#table4").css("display", "block");
        $("#school").css("pointer-events", "auto");
        $("#position").css("pointer-events", "auto");
        $("#grade").css("pointer-events", "auto");
        $("#name").css("pointer-events", "none");
        let getJson = localStorage.getItem('key');
        array = JSON.parse(getJson);
        array.push('名前');
        setJson = JSON.stringify(array);
        localStorage.setItem('key', 'setJson');
    });
});