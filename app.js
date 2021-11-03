$(function () {
    let ref = document.referrer;
    //リファラ情報ゲット

    let page = (null);
    //変数「page」を設定（初期値は空）

    getCSV(); //最初に実行される

    // for (var a = 0; a < chars.length; a++) {
    //     for (let i = 0; i < chars[a].length - 1; i++) {
    //         console.log(chars[a][i]);
    //     };
    // };

    if (ref.includes('/h.middle/s.')) {
        page = ('school');
    } else if (ref.includes('/h.middle/p.')) {
        page = ('position');
    } else if (ref.includes('/h.middle/n.')) {
        page = ('name');
    } else if (ref.includes('/h.middle/g.')) {
        page = ('grade');
    } else if (ref.includes('/index.html')) {
        page = ('top');
    };
    //リファラに含まれる文字列によって変数「page」に文字列を代入

    //console.log(ref + 'から訪れました');
    //デバッグ用。リファラ取れてるかの確認。

    $("#school").on('click', school);
    $("#position").on('click', position);
    $("#grade").on('click', grade);
    $("#name").on('click', name);
    //タブ切り替え式UIの実装。それぞれのIDがクリックされたらそれぞれの関数を呼び出し。

    if (page === 'school') {
        //    console.log('学校ページから来ました');
        school();
    } else if (page === 'position') {
        //    console.log('ポジションページから来ました');
        position();
    } else if (page === 'name') {
        //    console.log('名前ページから来ました');
        name();
    } else if (page === 'grade') {
        //    console.log('学年ページから来ました');
        grade();
    } else if (page === 'top') {
        //   console.log('トップページから来ました');
    } else {
        //   console.log('その他のページから来ました');
    };
    //「page」の内容によってそれぞれの関数を呼び出し。
    //ついでにデバッグ用。「page」の内容が合ってるか確認。


    //CSVファイルを読み込む関数getCSV()の定義
    function getCSV() {
        var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
        req.open("get", "https://satsuki-mito.github.io/kurobas-charactors/array.csv", true); // アクセスするファイルを指定
        req.send(null); // HTTPリクエストの発行

        // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
        req.onload = function () {
            convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
        };
    };

    // 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
    function convertCSVtoArray(str) { // 読み込んだCSVデータが文字列として渡される
        var result = []; // 最終的な二次元配列を入れるための配列
        var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

        // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
        for (var i = 0; i < tmp.length; ++i) {
            result[i] = tmp[i].split(',');
        };

        console.log(result[0][0]);
    };

    function Bg(bg) {
        $("#bgs").css("background-image", "url(./i.backgrounds/" + bg + ".svg")
    };
    //引数bgに入れた値によって背景パターンが変わる

    function profBg(badges) {
        $("#proBg").css("background-image", "url(./i.badges/" + badges + ".svg)");
    };
    //引数badgesに入れた値によってプロフィール部分の背景が変わる

    function school() {
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

    function position() {
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

    function grade() {
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

    function name() {
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
    //関数の定義。
    //①それぞれのタブの可視性を変更
    //②それぞれのタブのクリックイベントの可不可
    //③戻るボタンの可視性を変更
});
