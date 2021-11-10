$(function () {
    var char = [];
    var middle = [];
    getCSVMiddle();
    getCSVChar();
    firstPrepare();

    $("#tab1").on('click', { num: 1 }, tab);
    $("#tab2").on('click', { num: 2 }, tab);
    $("#tab3").on('click', { num: 3 }, tab);
    $("#tab4").on('click', { num: 4 }, tab);
    $("#forMiddle1").on('click', { numM: 1 }, callMiddle);
    $("#forMiddle1").on('click', { numP: 2 }, page);

    function Bg(str) {
        $("#bgs").css("background-image", "url(./i.backgrounds/" + str + ".svg")
    };
    //引数bgに入れた値によって背景パターンが変わる

    function tab(event) {
        $("#table" + event.data.num).css("display", "block");  //選択されたタブを表示
        $("#table1, #table2, #table3, #table4").not("#table" + event.data.num).css("display", "none");  //選択された以外のタブを非表示
        $("#tab" + event.data.num).css("pointer-events", "none");  //選択されたタブのホバーイベントを停止
        $("#tab1, #tab2, #tab3, #tab4").not("#tab" + event.data.num).css("pointer-events", "auto");  //選択された以外のタブのホバーイベントを開始
        $("#backFor" + event.data.num).css("display", "block");  //選択されたタブのバックリンクを表示
        $("#backFor1, #backFor2, #backFor3, #backFor4").not("#backFor" + event.data.num).css("display", "none");  //選択された以外のタブのバックリンクを非表示
        console.log("tab(" + event.data.num + ")が呼び出されました");  //デバッグ用。くりっくされたよ〜。
    };

    function callMiddle(event) {
        for (let i = 2; i < middle[event.data.numM].length; i++) {
            if (middle[event.data.numM][i] === null) {
                break;
            } else {
                $("#famNameChi" + i).text(char[middle[event.data.numM][i]][1]);
                $("#famNameHir" + i).text(char[middle[event.data.numM][i]][2]);
                $("#firNameChi" + i).text(char[middle[event.data.numM][i]][3]);
                $("#firNameHir" + i).text(char[middle[event.data.numM][i]][4]);
                $("#icon" + i).attr({
                    'src': "./i.icons/" + char[middle[event.data.numM][i]][8] + ".png",
                    'alt': char[middle[event.data.numM][i]][1] + "アイコン"
                });
            };
        };
    };

    function callChar(event) {
        $("#char1").attr({
            'src': "./i.names/n." + char[event.data.num][7] + ".svg",
            'alt': char[event.data.num][1] + "アイコン"
        });
        $("#char2").css("background-image", "url(./i.badges/" + char[event.data.num][5] + ".svg)")
        $("#char3").text(char[event.data.num][9]);
        $("#char4").text(char[event.data.num][10]);
        $("#char5").text(char[event.data.num][11]);
        $("#char6").text(char[event.data.num][12]);
        $("#char7").text(char[event.data.num][13]);
        $("#char8").text(char[event.data.num][14] + "月" + char[event.data.num][15] + "日");
        $("#char9").text(char[event.data.num][16]);
        $("#char10").text(char[event.data.num][17]);
        $("#char11").text(char[event.data.num][18]);
        $("#char12").text(char[event.data.num][19]);
        $("#char13").text(char[event.data.num][20]);
        $("#char14").text(char[event.data.num][21]);
        $("#char15").attr({
            'src': "./i.chars/" + char[event.data.num][0] + ".png",
            'alt': char[event.data.num][1] + char[event.data.num][3]
        });
        $("#char16").text(char[event.data.num][22] + "<br>" + char[event.data.num][23]);
        $("#char17").text(char[event.data.num][24]);
        $("#char18").text(char[event.data.num][1] + char[event.data.num][3] + "と関係の深いキャラクター");

        for (let i = 1; i <= 4; i++) {
            if (char[num][24 + i] === null) {
                break;
            } else {
                $("#iconR" + i).attr({
                    'src': "./i.icons/" + char[char[num][24 + i]][7] + ".png",
                    'alt': char[char[num][24 + i]][1] + "アイコン"
                });
                $("#famNameChiR" + i).text(char[char[num][24 + i]][1]);
                $("#famNameHirR" + i).text(char[char[num][24 + i]][2]);
                $("#firNameHirR" + i).text(char[char[num][24 + i]][3]);
                $("#firNameHirR" + i).text(char[char[num][24 + i]][4]);
            };
        };
    };

    function page(event) {
        $("#page" + event.data.numP).css("display", "block");
        $("#page1, #page2, #page3, #page4").not("#page" + event.data.numP).css("display", "none");
        if (event.data.numP === 0) {
            $("#page1, #page2, #page3, #page4, #back").css("display", "block");
        } else if (event.data.numP > 3) {
            console.log("無効な引数です");
        };
    };

    function firstPrepare() {
        $("#page1").css("display", "block");
        $("#page2, #page3, #page4").css("display", "none");
        $("#back").css("display", "none");
        Bg('ball.goal');
    };

    // char.csvの準備1
    function getCSVChar() {
        var reqChar = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
        reqChar.open("get", "https://satsuki-mito.github.io/kurobas-characters/char.csv", true); // アクセスするファイルを指定
        reqChar.send(null); // HTTPリクエストの発行

        // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
        reqChar.onload = function () {
            convertCSVtoArrayChar(reqChar.responseText); // 渡されるのは読み込んだCSVデータ
        };
    };

    // char.csvの準備2
    function convertCSVtoArrayChar(str) { // 読み込んだCSVデータが文字列として渡される
        var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

        // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
        for (var i = 0; i < tmp.length; ++i) {
            char[i] = tmp[i].split(',');
            // for (var i2 = 0; i2 < res[i].length; i2++) {
            //     //数字の場合は「"」を削除
            //     if (res[i][i2].match(/\-?\d+(.\d+)?(e[\+\-]d+)?/)) {
            //         res[i][i2] = parseFloat(res[i][i2].replace('"', ''));
            //     };
            // };
        };

        console.log(char[0][0]);
    };

    // function getCsv(url, array) {
    //     //CSVファイルを文字列で取得。
    //     var txt = new XMLHttpRequest();
    //     txt.open('get', url, true);
    //     txt.send();

    //     //改行ごとに配列化
    //     var arr = txt.responseText.split('\n');

    //     //1次元配列を2次元配列に変換
    //     var res = [];
    //     for (var i = 0; i < arr.length; i++) {
    //         //空白行が出てきた時点で終了
    //         if (arr[i] == '') break;

    //         //","ごとに配列化
    //         res[i] = arr[i].split(',');

    //         for (var i2 = 0; i2 < res[i].length; i2++) {
    //             //数字の場合は「"」を削除
    //             if (res[i][i2].match(/\-?\d+(.\d+)?(e[\+\-]d+)?/)) {
    //                 res[i][i2] = parseFloat(res[i][i2].replace('"', ''));
    //             };
    //         };
    //     };

    //     return res;
    // };


    //middle.csvの準備1
    function getCSVMiddle() {
        var reqMiddle = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
        reqMiddle.open("get", "https://satsuki-mito.github.io/kurobas-characters/middle.csv", true); // アクセスするファイルを指定
        reqMiddle.send(null); // HTTPリクエストの発行

        // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
        reqMiddle.onload = function () {
            convertCSVtoArrayMiddle(reqMiddle.responseText); // 渡されるのは読み込んだCSVデータ
        };
    };

    // middle.csvの準備2
    function convertCSVtoArrayMiddle(str) { // 読み込んだCSVデータが文字列として渡される
        var dev = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

        // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
        for (var i = 0; i < dev.length; ++i) {
            middle[i] = dev[i].split(',');
        };

        console.log(middle[0][0]);
    };
});
