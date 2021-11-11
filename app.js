$(function () {
    var char = [];
    var middle = [];
    var middleNum = 1;
    var callCharFrom = null;

    getCSVMiddle();
    getCSVChar();
    firstPrepare();

    setTimeout(function(){
        console.log(middle[middleNum][1]);
        $("#Char1").on('click', { numC: middle[middleNum][1] }, callChar);
    }, 300);

    $("#tab1").on('click', { num: 1 }, tab);
    $("#tab2").on('click', { num: 2 }, tab);
    $("#tab3").on('click', { num: 3 }, tab);
    $("#tab4").on('click', { num: 4 }, tab);

    $("#forMiddle1").on('click', { numM: 1 }, callMiddle);
    $("#forMiddle1").on('click',function(){
    })

    // $("#Char1").on('click', { numC: middle[middleNum][1] }, callChar);


    function backLinks(pageNum) {
        if (pageNum === 1) {
            $("#back").css("display", "none");
        } else if (pageNum === 2) {
            $("#back").css("display", "block");
            $("#backMiddle").css("display", "none");
            $("#backFor5").css("display", "block");
        } else if (pageNum === 3){
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
            console.log("無効な引数です");
        };
        console.log("page(" + num + ")が呼び出されました。");
    };

    function Bg(str) {
        $("#bgs").css("background-image", "url(./i.backgrounds/" + str + ".svg")
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
        for (let i = 1; i < middle[event.data.numM].length - 1; i++) {
            if (middle[event.data.numM][i] === null) {
                break;
            } else {
                $("#middlename").attr({
                    'src': "./i.names/" + middle[i][middle[i].length] +".svg",
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
        page(2);
        backLinks(2);
        middleNum = event.data.numM;
    };

    function callChar(event) {
        $("#char1").attr({
            'src': "./i.names/n." + char[event.data.numC][8] + ".svg",
            'alt': char[event.data.numC][1] + "アイコン"
        });
        $("#char2").css("background-image", "url(./i.badges/" + char[event.data.numC][5] + ".svg)")
        $("#char3").text(char[event.data.numC][9]);
        $("#char4").text(char[event.data.numC][10]);
        $("#char5").text(char[event.data.numC][11]);
        $("#char6").text(char[event.data.numC][12]);
        $("#char7").text(char[event.data.numC][13]);
        $("#char8").text(char[event.data.numC][14] + "月" + char[event.data.numC][15] + "日");
        $("#char9").text(char[event.data.numC][16]);
        $("#char10").text(char[event.data.numC][17]);
        $("#char11").text(char[event.data.numC][18]);
        $("#char12").text(char[event.data.numC][19]);
        $("#char13").text(char[event.data.numC][20]);
        $("#char14").text(char[event.data.numC][21]);
        $("#char15").attr({
            'src': "./i.chars/" + char[event.data.numC][0] + ".png",
            'alt': char[event.data.numC][1] + char[event.data.numC][3]
        });
        $("#char16").text(char[event.data.numC][22] + "<br>" + char[event.data.numC][23]);
        $("#char17").text("「" + char[event.data.numC][24] + "」");
        $("#char18").text(char[event.data.numC][1] + char[event.data.numC][3] + "と関係の深いキャラクター");

        for (let i = 1; i <= 4; i++) {
            if (char[event.data.numC][24 + i] === null) {
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
        page(3);
        backLinks(3);
        console.log(char[2][9]);
    };






    function firstPrepare() {
        $("#page1").css("display", "block");
        $("#page2, #page3, #page4").css("display", "none");

        $("#backFor1").css("display", "block");
        $("#backFor2, #backFor3, #backFor4").css("display", "none");
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
