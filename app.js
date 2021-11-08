$(function () {
    let page = (null);
    //変数「page」を設定（初期値は空）
    getCsvChar();
    getCsvMiddle();

    $("#tab1").click(tab(1));
    $("#tab2").click(tab(2));
    $("#tab3").click(tab(3));
    $("#tab4").click(tab(4));
    
    console.log(char[1]);

    for(let i = 1; i <= 28; i ++){
        $("#forMiddle" + i).onclick(callMiddle(i));
    };
    
    // char.csvの準備1
    function getCSVChar() {
        var reqChar = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
        reqChar.open("get", "https://satsuki-mito.github.io/kurobas-charactors/char.csv", true); // アクセスするファイルを指定
        reqChar.send(null); // HTTPリクエストの発行

        // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
        reqChar.onload = function () {
            convertCSVtoArrayChar(reqChar.responseText); // 渡されるのは読み込んだCSVデータ
        };
    };

    // char.csvの準備2
    function convertCSVtoArrayChar(str) { // 読み込んだCSVデータが文字列として渡される
        var char = []; // 最終的な二次元配列を入れるための配列
        var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

        // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
        for (var i = 0; i < tmp.length; ++i) {
            char[i] = tmp[i].split(',');
        };

        console.log(char[0][0]);
    };

    //middle.csvの準備1
    function getCSVMiddle() {
        var reqMiddle = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
        reqMiddle.open("get", "https://satsuki-mito.github.io/kurobas-charactors/middle.csv", true); // アクセスするファイルを指定
        reqMiddle.send(null); // HTTPリクエストの発行

        // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
        reqMiddle.onload = function () {
            convertCSVtoArrayMiddle(reqMiddle.responseText); // 渡されるのは読み込んだCSVデータ
        };
    };

    // middle.csvの準備2
    function convertCSVtoArrayMiddle(str) { // 読み込んだCSVデータが文字列として渡される
        var middle = []; // 最終的な二次元配列を入れるための配列
        var dev = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

        // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
        for (var i = 0; i < dev.length; ++i) {
            middle[i] = dev[i].split(',');
        };

        console.log(middle[0][0]);
    };

//     function getCsv(url, array){
//         //CSVファイルを文字列で取得。
//         var txt = new XMLHttpRequest();
//         txt.open('get', url, true);
//         txt.send();
      
//         //改行ごとに配列化
//         var arr = txt.responseText.split('\n');
      
//         //1次元配列を2次元配列に変換
//         var array = [];
//         for(var i = 0; i < arr.length; i++){
//           //空白行が出てきた時点で終了
//           if(arr[i] == '') break;
      
//           //","ごとに配列化
//           array[i] = arr[i].split(',');
      
//           for(var i2 = 0; i2 < array[i].length; i2++){
//             //数字の場合は「"」を削除
//             if(array[i][i2].match(/\-?\d+(.\d+)?(e[\+\-]d+)?/)){
//               array[i][i2] = parseFloat(array[i][i2].replace('"', ''));
//             }
//           }
//         }
      
//         return array;
//       }

    function Bg(num) {
        $("#bgs").css("background-image", "url(./i.backgrounds/" + num + ".svg")
    };
    //引数bgに入れた値によって背景パターンが変わる

    function tab(num) {
        $("#table" + num).css("display", "block");
        $("#table1, #table2, #table3, #talbe4").not("#table" + num).css("display", "none");
        $("#tab" + num).css("pointer-events", "none");
        $("#tab1, #tab2, #tab3, #tab4").not("#tab" + num).css("pointer-events", "auto");
        $("#backFor" + num).css("display", "block");
        $("#backFor1, #backFor2, #backFor3, #backFor4").not("#backFor" + num).css("display", "none");
        console.log("tab(" + num + ")が呼び出されました");
        // if(num === 1){
        //     $("#school").css("pointer-events", "none");
        //     $("#position, #name, #grade").css("pointer-events", "auto");

        //     $("#forSchool").css("display", "block");
        //     $("#forPosition, #forName, #forGrade").css("display", "none");
        // } else if(num === 2){
        //     $("#position").css("pointer-events", "none");
        //     $("#school, #grade, #name").css("pointer-events", "auto");

        //     $("#forPosition").css("display", "block");
        //     $("#forSchool, #forName, #forGrade").css("display", "none");
        // } else if(num === 3){
        //     $("#name").css("pointer-events", "none");
        //     $("#school, #position, #grade").css("pointer-events", "auto");
            
        //     $("#forName").css("display", "block");
        //     $("#forSchool, #forPosition, #forGrade").css("display", "none");
        // } else if(num === 4){
        //     $("#grade").css("pointer-events", "none");
        //     $("#school, #position, #name").css("pointer-events", "auto");

        //     $("#forGrade").css("display", "block");
        //     $("#forSchool, #forPosition, #forName").css("display", "none");
        // }
    };
    //関数の定義。
    //①それぞれのタブの可視性を変更
    //②それぞれのタブのクリックイベントの可不可
    //③戻るボタンの可視性を変更

    function callMiddle(num) {
        for(let i = 1; i < middle[num].length - 1; i ++){
            if(middle[num][i] === null){
                break;
            } else {
                $("#famNameChi" + i).text(char[middle[num][i]][1]);
                $("#famNameHir" + i).text(char[middle[num][i]][2]);
                $("#firNameChi" + i).text(char[middle[num][i]][3]);
                $("#firNameHir" + i).text(char[middle[num][i]][4]);
                $("#icon" + i).attr({
                    'src': "./i.icons/" + char[middle[num][i]][7] + ".png",
                    'alt': char[middle[num][i]][1] + "アイコン"
                });
            };
        };
    };

    function callChar(num) {
        $("#char1").attr({
            'src': "./i.names/n." +char[num][7] + ".svg",
            'alt': char[num][1] + "アイコン"
        });
        $("#char2").css("background-image", "url(./i.badges/" + char[num][5] + ".svg)")
        $("#char3").text(char[num][9]);
        $("#char4").text(char[num][10]);
        $("#char5").text(char[num][11]);
        $("#char6").text(char[num][12]);
        $("#char7").text(char[num][13]);
        $("#char8").text(char[num][14] + "月" + char[num][15] + "日");
        $("#char9").text(char[num][16]);
        $("#char10").text(char[num][17]);
        $("#char11").text(char[num][18]);
        $("#char12").text(char[num][19]);
        $("#char13").text(char[num][20]);
        $("#char14").text(char[num][21]);
        $("#char15").attr({
            'src': "./i.chars/" + char[num][0] + ".png",
            'alt': char[num][1] + char[num][3]
        });
        $("#char16").text(char[num][22] + "<br>" + char[num][23]);
        $("#char17").text(char[num][24]);
        $("#char18").text(char[num][1] + char[num][3] + "と関係の深いキャラクター");

        for(let i = 1; i <= 4; i ++){
            if(char[num][24 + i] === null){
                break;
            } else{
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
});
