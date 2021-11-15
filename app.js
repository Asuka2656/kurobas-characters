$(function () {
    var char = [];
    var middle = [];
    var middleNum = null;
    var bgName = null;

    $("#forMiddle1").on('click', function(){
        $("#favicon").attr({
            'href': "./i.favicon/seirin.png",
        });
        console.log("ファビコンが変更されました");
    });


    getCSVMiddle();
    getCSVChar();
    firstPrepare();
    readyMiddle();
    readytab();
    $("#backFor5").on('click', backForTop);

    function backLinks(pageNum) {
        if (pageNum === 1) {
            $("#back").css("display", "none");
        } else if (pageNum === 2) {
            $("#back").css("display", "block");
            $("#backMiddle").css("display", "none");
            $("#backFor5").css("display", "block");
        } else if (pageNum === 3) {
            $("#backMiddle").css("display", "block");
        };
    };

    function page(num) {
        $("#page" + num).css("display", "block");
        $("#page1, #page2, #page3, #page4").not("#page" + num).css("display", "none");
        $(window).scrollTop(0);
        if (num === 0) {
            $("#page1, #page2, #page3, #page4, #back").css("display", "block");
        } else if (num > 3) {
            console.log("表示するページを決める関数バグってるよ");
        };
        console.log("page(" + num + ")が呼び出されました。");
    };

    function background(str) {
        $("#bgs").css("background-image", "url(./i.backgrounds/" + str + ".svg)");
    };
    //引数strに入れた値によって背景パターンが変わる

    function tab(event) {
        $("#table" + event.data.num).css("display", "block");
        //選択されたタブを表示
        $("#table1, #table2, #table3, #table4").not("#table" + event.data.num).css("display", "none");
        //選択された以外のタブを非表示
        $("#tab" + event.data.num).css("pointer-events", "none");
        //選択されたタブのホバーイベントを停止
        $("#tab1, #tab2, #tab3, #tab4").not("#tab" + event.data.num).css("pointer-events", "auto");
        //選択された以外のタブのホバーイベントを開始
        $("#backFor" + event.data.num).css("display", "block");
        //選択されたタブのバックリンクを表示
        $("#backFor1, #backFor2, #backFor3, #backFor4").not("#backFor" + event.data.num).css("display", "none");
        //選択された以外のタブのバックリンクを非表示
        console.log("tab(" + event.data.num + ")が呼び出されました");  //デバッグ用。くりっくされたよ〜。
    };

    function callMiddle(event) {
        resetMiddle();
        page(2);
        backLinks(2);
        bgName = middle[event.data.numM][middle[event.data.numM].length - 1];
        background(bgName);
        readyChar(event.data.numM);

        if (middle[event.data.numM].length <= 6) {
            $("#row1").css("display", "table-row");
            $("#row2, #row3, #row4, #row5, #row6").css("display", "none");
        } else if (6 < middle[event.data.numM].length && middle[event.data.numM].length <= 10) {
            $("#row1, #row2").css("display", "table-row");
            $("#row3, #row4, #row5, #row6").css("display", "none");
        } else if (10 < middle[event.data.numM].length && middle[event.data.numM].length <= 14) {
            $("#row1, #row2, #row3").css("display", "table-row");
            $("#row4, #row5, #row6").css("display", "none");
        } else if (14 < middle[event.data.numM].length && middle[event.data.numM].length <= 18) {
            $("#row1, #row2, #row3, #row4").css("display", "table-row");
            $("#row5, #row6").css("display", "none");
        } else if (18 < middle[event.data.numM].length && middle[event.data.numM].length <= 22) {
            $("#row1, #row2, #row3, #row4, #row5").css("display", "table-row");
            $("#row6").css("display", "none");
        } else if (22 < middle[event.data.numM].length && middle[event.data.numM].length <= 26) {
            $("#row1, #row2, #row3, #row4, #row5, #row6").css("display", "table-row");
        } else {
            console.log("使ってないミドルページ消すトコバグってるよ");
        };
        for (let i = 1; i < middle[event.data.numM].length - 1; i++) {
            if (middle[event.data.numM][i] === null) {
                break;
            } else {
                $("#middlename").attr({
                    'src': "./i.names/" + middle[i][middle[i].length] + ".svg",
                    'alt': middle[i][middle[i].length]
                });

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
        middleNum = event.data.numM;
        if (event.data.numM === 1) { background('ball.goal'); } else if (event.data.numM === 2) { background('guitar.microphone'); } else if (event.data.numM === 3) { background('tape.painapple'); } else if (event.data.numM === 4) { background('ball.coke'); } else if (event.data.numM === 5) { background('ball.totoro'); } else if (event.data.numM === 6) { background('ball.scissors'); } else if (event.data.numM === 7) { background('ball.rainbow'); } else if (event.data.numM === 8) { background('ball.spider'); } else if (event.data.numM === 9) { background('ball.goal'); } else if (event.data.numM === 10) { background('forPG'); } else if (event.data.numM === 11) { background('forSG'); } else if (event.data.numM === 12) { background('forSF'); } else if (event.data.numM === 13) { background('forPF'); } else if (event.data.numM === 14) { background('forC'); } else if (event.data.numM === 15) { background('forM'); } else if (event.data.numM === 16) { background('ball.goal'); } else if (event.data.numM === 17) { background('forPF'); } else if (event.data.numM === 18) { background('ball.coke'); } else if (event.data.numM === 19) { background('forM'); } else if (event.data.numM === 20) { background('ball.nigo'); } else if (event.data.numM === 21) { background('ball.rainbow'); } else if (event.data.numM === 22) { background('ball.spider'); } else if (event.data.numM === 23) { background('tape.painapple'); } else if (event.data.numM === 24) { background('forC'); } else if (event.data.numM === 25) { background('ball.goal'); } else if (event.data.numM === 26) { background('ball.nigo'); } else if (event.data.numM === 27) { background('ball.rainbow'); } else if (event.data.numM === 28) { background('ball.goal'); } else {console.log("背景表示するとこバグってるよ");};
        //読みたかったらGoogleSpreadsheet行ってくれ
    };

    function callChar(event) {
        console.log(char[event.data.numC][1] + "のページが呼び出されました");
        resetChar();
        page(3);
        backLinks(3);

        $("#char1").attr({
            'src': "./i.names/n." + char[event.data.numC][8] + ".svg",
            'alt': char[event.data.numC][1] + "アイコン"
        });  //名前のsvg
        $("#char2").css("background-image", "url(./i.badges/" + char[event.data.numC][5] + ".svg)")  //プロフ欄の背景
        $("#char3").text(char[event.data.numC][9]);  //所属
        $("#char4").text(char[event.data.numC][10]);  //背番号
        $("#char5").text(char[event.data.numC][11]);  //ポシジョン
        if (isNaN(char[event.data.numC][12])) {
            $("#char6").text(char[event.data.numC][12]);  //身長分からん人用
        } else {
            $("#char6").text(char[event.data.numC][12] + "cm");  //身長
        };
        if (isNaN(char[event.data.numC][13])) {
            $("#char7").text(char[event.data.numC][13]); //体重非公開の人用
        } else {
            $("#char7").text(char[event.data.numC][13] + "kg");  //体重
        };
        if (isNaN(char[event.data.numC][14])) {
            $("#char8").text(char[event.data.numC][14]);
        } else {
            $("#char8").text(char[event.data.numC][14] + "月" + char[event.data.numC][15] + "日");  //誕生日
        };
        $("#char9").text(char[event.data.numC][16]);  //座右の銘
        $("#char10").text(char[event.data.numC][17]);  //読書・人間観察
        $("#char11").text(char[event.data.numC][18]);  //手品
        $("#char12").text(char[event.data.numC][19]);  //好物
        $("#char13").text(char[event.data.numC][20]);  //注目選手
        $("#char14").text(char[event.data.numC][21]);  //声優
        $("#char15").attr({
            'src': "./i.chars/" + char[event.data.numC][0] + ".png",
            'alt': char[event.data.numC][1] + char[event.data.numC][3]
        });  //立ち絵
        $("#char16-1").text(char[event.data.numC][22]);  //紹介前半
        $("#char16-2").text(char[event.data.numC][23]);  //紹介後半
        $("#char17").text("「" + char[event.data.numC][24] + "」");  //名言
        $("#char18").text(char[event.data.numC][1] + char[event.data.numC][3] + "と関係の深いキャラクター");  //関係キャラ

        for (let i = 1; i <= 4; i++) {
            if (char[event.data.numC][24 + i] === null) {
                console.log("関係者は" + i + "人です。");
                break;
            } else {
                $("#iconR" + i).attr({
                    'src': "./i.icons/" + char[char[event.data.numC][24 + i]][8] + ".png",
                    'alt': char[char[event.data.numC][24 + i]][1] + "アイコン"
                });
                $("#famNameChiR" + i).text(char[char[event.data.numC][24 + i]][1]);
                $("#famNameHirR" + i).text(char[char[event.data.numC][24 + i]][2]);
                $("#firNameChiR" + i).text(char[char[event.data.numC][24 + i]][3]);
                $("#firNameHirR" + i).text(char[char[event.data.numC][24 + i]][4]);

            };
        };
        $("#relate1").on('click', { numC: char[event.data.numC][25] }, callChar);
        $("#relate2").on('click', { numC: char[event.data.numC][26] }, callChar);
        $("#relate3").on('click', { numC: char[event.data.numC][27] }, callChar);
        $("#relate4").on('click', { numC: char[event.data.numC][28] }, callChar);

        if (1 <= middleNum && middleNum <= 9) {
            $("#backFor1").on('click', { numM: middleNum }, callMiddle);
        } else if (10 <= middleNum && middleNum <= 16) {
            $("#backFor2").on('click', { numM: middleNum }, callMiddle);
        } else if (17 <= middleNum && middleNum <= 24) {
            $("#backFor3").on('click', { numM: middleNum }, callMiddle);
        } else if (25 <= middleNum && middleNum <= 28) {
            $("#backFor4").on('click', { numM: middleNum }, callMiddle);
        } else {
            console.log("戻るリンクバグってるよ");
        }
    };

    function resetMiddle() {
        for (let i = 1; i <= 16; i++) {
            $("#famNameChi" + i).text("");
            $("#famNameHir" + i).text("");
            $("#firNameChi" + i).text("");
            $("#firNameHir" + i).text("");
            $("#icon" + i).removeAttr('src alt');
        };
        console.log("ミドルページリセット完了したよ〜");
    };

    function resetChar() {
        $("#char1").removeAttr('src alt');
        $("#char2").css("background-image", "");
        $("#char3").text("");
        $("#char4").text("");
        $("#char5").text("");
        $("#char6").text("");
        $("#char7").text("");
        $("#char8").text("");
        $("#char9").text("");
        $("#char10").text("");
        $("#char11").text("");
        $("#char12").text("");
        $("#char13").text("");
        $("#char14").text("");
        $("#char15").removeAttr('src alt');
        $("#char16-1").text("");
        $("#char16-2").text("");
        $("#char17").text("");
        $("#char18").text("");

        for (let i = 1; i <= 4; i++) {
            $("#famNameChiR" + i).text("");
            $("#famNameHirR" + i).text("");
            $("#firNameChiR" + i).text("");
            $("#firNameHirR" + i).text("");
            $("#iconR" + i).removeAttr('src alt');
        };
        console.log("キャラページリセット完了したよ〜");
    };

    function readytab() {
        $("#tab1").on('click', { num: 1 }, tab);
        $("#tab2").on('click', { num: 2 }, tab);
        $("#tab3").on('click', { num: 3 }, tab);
        $("#tab4").on('click', { num: 4 }, tab);
    };

    function readyMiddle() {
        $("#forMiddle1").on('click', { numM: 1 }, callMiddle);
        $("#forMiddle2").on('click', { numM: 2 }, callMiddle);
        $("#forMiddle3").on('click', { numM: 3 }, callMiddle);
        $("#forMiddle4").on('click', { numM: 4 }, callMiddle);
        $("#forMiddle5").on('click', { numM: 5 }, callMiddle);
        $("#forMiddle6").on('click', { numM: 6 }, callMiddle);
        $("#forMiddle7").on('click', { numM: 7 }, callMiddle);
        $("#forMiddle8").on('click', { numM: 8 }, callMiddle);
        $("#forMiddle9").on('click', { numM: 9 }, callMiddle);
        $("#forMiddle10").on('click', { numM: 10 }, callMiddle);
        $("#forMiddle11").on('click', { numM: 11 }, callMiddle);
        $("#forMiddle12").on('click', { numM: 12 }, callMiddle);
        $("#forMiddle13").on('click', { numM: 13 }, callMiddle);
        $("#forMiddle14").on('click', { numM: 14 }, callMiddle);
        $("#forMiddle15").on('click', { numM: 15 }, callMiddle);
        $("#forMiddle16").on('click', { numM: 16 }, callMiddle);
        $("#forMiddle17").on('click', { numM: 17 }, callMiddle);
        $("#forMiddle18").on('click', { numM: 18 }, callMiddle);
        $("#forMiddle19").on('click', { numM: 19 }, callMiddle);
        $("#forMiddle20").on('click', { numM: 20 }, callMiddle);
        $("#forMiddle21").on('click', { numM: 21 }, callMiddle);
        $("#forMiddle22").on('click', { numM: 22 }, callMiddle);
        $("#forMiddle23").on('click', { numM: 23 }, callMiddle);
        $("#forMiddle24").on('click', { numM: 24 }, callMiddle);
        $("#forMiddle25").on('click', { numM: 25 }, callMiddle);
        $("#forMiddle26").on('click', { numM: 26 }, callMiddle);
        $("#forMiddle27").on('click', { numM: 27 }, callMiddle);
        $("#forMiddle28").on('click', { numM: 28 }, callMiddle);
    };

    function readyChar(num) {
        $("#Char1").on('click', { numC: middle[num][1] }, callChar);
        $("#Char2").on('click', { numC: middle[num][2] }, callChar);
        $("#Char3").on('click', { numC: middle[num][3] }, callChar);
        $("#Char4").on('click', { numC: middle[num][4] }, callChar);
        $("#Char5").on('click', { numC: middle[num][5] }, callChar);
        $("#Char6").on('click', { numC: middle[num][6] }, callChar);
        $("#Char7").on('click', { numC: middle[num][7] }, callChar);
        $("#Char8").on('click', { numC: middle[num][8] }, callChar);
        $("#Char9").on('click', { numC: middle[num][9] }, callChar);
        $("#Char10").on('click', { numC: middle[num][10] }, callChar);
        $("#Char11").on('click', { numC: middle[num][11] }, callChar);
        $("#Char12").on('click', { numC: middle[num][12] }, callChar);
        $("#Char13").on('click', { numC: middle[num][13] }, callChar);
        $("#Char14").on('click', { numC: middle[num][14] }, callChar);
        $("#Char15").on('click', { numC: middle[num][15] }, callChar);
        $("#Char16").on('click', { numC: middle[num][16] }, callChar);
    };


    function firstPrepare() {
        $("#page1").css("display", "block");
        $("#page2, #page3, #page4").css("display", "none");
        $("#backFor1").css("display", "block");
        $("#backFor2, #backFor3, #backFor4").css("display", "none");
        $("#back").css("display", "none");
        $(window).scrollTop(0);
        background('ball.goal');
    };

    function backForTop() {
        $("#page1").css("display", "block");
        $("#page2, #page3, #page4").css("display", "none");
        $("#backFor1").css("display", "block");
        $("#backFor2, #backFor3, #backFor4").css("display", "none");
        $("#back").css("display", "none");
        $(window).scrollTop(1100);
        background('ball.goal');
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

            for (var i2 = 0; i2 < char[i].length; i2++) {
                //数字の場合は「"」を削除
                if (char[i][i2].match(/\-?\d+(.\d+)?(e[\+\-]d+)?/)) {
                    char[i][i2] = parseFloat(char[i][i2].replace('"', ''));
                };
            };
        };
    };

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

            for (var i2 = 0; i2 < middle[i].length; i2++) {
                //数字の場合は「"」を削除
                if (middle[i][i2].match(/\-?\d+(.\d+)?(e[\+\-]d+)?/)) {
                    middle[i][i2] = parseFloat(middle[i][i2].replace('"', ''));
                };
            };
        };
    };
});
