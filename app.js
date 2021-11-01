// let array = ['学校'];
// let setJson = JSON.stringify(array);
// localStorage.setItem('key', 'setJson');
// console.log(array);
let ref = document.referrer;
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
    // $(function () {
    //     let number = array.length - 1;
    //     // console.log(number);
    //     if (array[number] === '学校') {
    //         $("#table1").css("display", "block");
    //         $("#table2").css("display", "none");
    //         $("#table3").css("display", "none");
    //         $("#table4").css("display", "none");
    //         $("#school").css("pointer-events", "none");
    //         $("#position").css("pointer-events", "auto");
    //         $("#name").css("pointer-events", "auto");
    //         $("#grade").css("pointer-events", "auto");
    //     } else if (array[number] === 'ポジション') {
    //         $("#table1").css("display", "none");
    //         $("#table2").css("display", "block");
    //         $("#table3").css("display", "none");
    //         $("#table4").css("display", "none");
    //         $("#school").css("pointer-events", "auto");
    //         $("#position").css("pointer-events", "none");
    //         $("#name").css("pointer-events", "auto");
    //         $("#grade").css("pointer-events", "auto");
    //     } else if (array[number] === '学年') {
    //         $("#table1").css("display", "none");
    //         $("#table2").css("display", "none");
    //         $("#table3").css("display", "block");
    //         $("#table4").css("display", "none");
    //         $("#school").css("pointer-events", "auto");
    //         $("#position").css("pointer-events", "auto");
    //         $("#grade").css("pointer-events", "none");
    //         $("#name").css("pointer-events", "auto");
    //     } else if (array[number] === '名前') {
    //         $("#table1").css("display", "none");
    //         $("#table2").css("display", "none");
    //         $("#table3").css("display", "none");
    //         $("#table4").css("display", "block");
    //         $("#school").css("pointer-events", "auto");
    //         $("#position").css("pointer-events", "auto");
    //         $("#grade").css("pointer-events", "auto");
    //         $("#name").css("pointer-events", "none");
    //     }
    // });
    
    // $("#school").click(function () {
    //     $("#table1").css("display", "block");
    //     $("#table2").css("display", "none");
    //     $("#table3").css("display", "none");
    //     $("#table4").css("display", "none");
    //     $("#school").css("pointer-events", "none");
    //     $("#position").css("pointer-events", "auto");
    //     $("#name").css("pointer-events", "auto");
    //     $("#grade").css("pointer-events", "auto");
    //     // let getJson = localStorage.getItem('key');
    //     // array = JSON.parse(getJson);
    //     // array.push('学校');
    //     // setJson = JSON.stringify(array);
    //     // localStorage.setItem('key', 'setJson');
    // });
    // $("#position").click(function () {
    //     $("#table1").css("display", "none");
    //     $("#table2").css("display", "block");
    //     $("#table3").css("display", "none");
    //     $("#table4").css("display", "none");
    //     $("#school").css("pointer-events", "auto");
    //     $("#position").css("pointer-events", "none");
    //     $("#name").css("pointer-events", "auto");
    //     $("#grade").css("pointer-events", "auto");
    //     // let getJson = localStorage.getItem('key');
    //     // array = JSON.parse(getJson);
    //     // array.push('ポジション');
    //     // setJson = JSON.stringify(array);
    //     // localStorage.setItem('key', 'setJson');
    // });
    // $("#grade").click(function () {
    //     $("#table1").css("display", "none");
    //     $("#table2").css("display", "none");
    //     $("#table3").css("display", "block");
    //     $("#table4").css("display", "none");
    //     $("#school").css("pointer-events", "auto");
    //     $("#position").css("pointer-events", "auto");
    //     $("#grade").css("pointer-events", "none");
    //     $("#name").css("pointer-events", "auto");
    //     // let getJson = localStorage.getItem('key');
    //     // array = JSON.parse(getJson);
    //     // array.push('学年');
    //     // setJson = JSON.stringify(array);
    //     // localStorage.setItem('key', 'setJson');
    // });
    // $("#name").click(function () {
    //     $("#table1").css("display", "none");
    //     $("#table2").css("display", "none");
    //     $("#table3").css("display", "none");
    //     $("#table4").css("display", "block");
    //     $("#school").css("pointer-events", "auto");
    //     $("#position").css("pointer-events", "auto");
    //     $("#grade").css("pointer-events", "auto");
    //     $("#name").css("pointer-events", "none");
    //     // let getJson = localStorage.getItem('key');
    //     // array = JSON.parse(getJson);
    //     // array.push('名前');
    //     // setJson = JSON.stringify(array);
    //     // localStorage.setItem('key', 'setJson');
    // });

    $("#school").on('click', school);
    $("#position").on('click', position);
    $("#grade").on('click', grade);
    $("#name").on('click', name);

    if(ref.includes('https://satsuki-mito.github.io/kurobas-charactors/h.middle/s.')){
        alert('学校ページから来ました');
        school();
    } else if(ref.includes('https://satsuki-mito.github.io/kurobas-charactors/h.middle/p.')){
        alert('ポジションページから来ました');
        position();
    } else if(ref.includes('https://satsuki-mito.github.io/kurobas-charactors/h.middle/n.')){
        alert('名前ページから来ました');
        name();
    } else if(ref.includes('https://satsuki-mito.github.io/kurobas-charactors/h.middle/g.')){
        alert('学年ページから来ました');
        grade();
    }

    function school () {
        $("#table1").css("display", "block");
        $("#table2").css("display", "none");
        $("#table3").css("display", "none");
        $("#table4").css("display", "none");

        $("#school").css("pointer-events", "none");
        $("#position").css("pointer-events", "auto");
        $("#name").css("pointer-events", "auto");
        $("#grade").css("pointer-events", "auto");

        $(".forSchool").css("display", "block");
        $(".forPosition").css("display", "none");
        $(".forGrade").css("display", "none");
        $(".forName").css("display", "none");
    }

    function position () {
        $("#table1").css("display", "none");
        $("#table2").css("display", "block");
        $("#table3").css("display", "none");
        $("#table4").css("display", "none");

        $("#school").css("pointer-events", "auto");
        $("#position").css("pointer-events", "none");
        $("#name").css("pointer-events", "auto");
        $("#grade").css("pointer-events", "auto");

        $(".forSchool").css("display", "none");
        $(".forPosition").css("display", "block");
        $(".forGrade").css("display", "none");
        $(".forName").css("display", "none");
    }

    function grade () {
        $("#table1").css("display", "none");
        $("#table2").css("display", "none");
        $("#table3").css("display", "block");
        $("#table4").css("display", "none");

        $("#school").css("pointer-events", "auto");
        $("#position").css("pointer-events", "auto");
        $("#grade").css("pointer-events", "none");
        $("#name").css("pointer-events", "auto");

        $(".forSchool").css("display", "none");
        $(".forPosition").css("display", "none");
        $(".forGrade").css("display", "block");
        $(".forName").css("display", "none");
    }

    function name () {
        $("#table1").css("display", "none");
        $("#table2").css("display", "none");
        $("#table3").css("display", "none");
        $("#table4").css("display", "block");

        $("#school").css("pointer-events", "auto");
        $("#position").css("pointer-events", "auto");
        $("#grade").css("pointer-events", "auto");
        $("#name").css("pointer-events", "none");

        $(".forSchool").css("display", "none");
        $(".forPosition").css("display", "none");
        $(".forGrade").css("display", "none");
        $(".forName").css("display", "block");
    }
});
