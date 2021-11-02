$(function () {
    let ref = document.referrer;
    //リファラ情報ゲット

    let page = (null);
    //変数「page」を設定（初期値はカラ）

    var data = csvToArray("array.csv");
    alert(data[0]);

    let chars = [
        ['黒子', 'くろこ', 'テツヤ', null, 'seirin', 'lightBlue', 'kuroko', 'tetsuya', '私立誠凛高校1年B組6番', '11', '不明', '168', '57', '1', '31', '読書・人間観察', '手品', 'マジバのバニラシェイク', '荻原 シゲヒロ', '小野 賢章さん', 'tetsuya.k', '　本作の主人公。とにかく影が薄い。プレイスタイルは、そのただでさえ薄い影をミスディレクションという技術で更に薄め、パスの中継役になること。自らを影と称し、黒子が「光」と呼ぶ、圧倒的なプレイスキルと存在感を持つ選手のサポートに徹する。', '　得意技はタップパス。目立たないのが大前提の彼は、コートで一番注目を浴びるボールを長時間キープ出来ないが、人間観察で鍛えた洞察力で瞬時にボールを回す。', '「僕は……影だ」', 'AomineR', 'OgiwaraR', 'KagamiR', 'NigoR'],
        ['火神', 'かがみ', '大我', 'たいが', 'seirin'],
    ];

//     for (var a = 0; a < chars.length; a++) {
//         for (let i = 0; i < chars[a].length - 1; i++) {
//             console.log(chars[a][i]);
//         };
//     };

    // var small = null;
    // var big = null;
    // if (chars[a - 1].length === chars[0].length) {
    //     console.log(chars[a - 1][0] + chars[a - 1][2] + 'までの' + a - 1 + '人分、データの記入が終了しました');
    // } else if (chars[a - 1].length < chars[0].length) {
    //     for (var c = 1; small !== null; c++) {
    //         if (chars[0].length === chars[a - c].length) {
    //             small = null;
    //         } else if (chars[0].length !== chars[a - c].length){
    //             console.log(chars[a - c][0] + chars[a - c][2] + 'のデータに不足があります。');
    //             small = 1;
    //             console.log('smallの値は' + small + 'です');
    //             // console.log('想定外の不具合です（データ不足のif文のなかです）');
    //         };
    //     };
    //     console.log('データ不足のif文の中の、forの外です。')
    // } else if (chars[a - 1].length > chars[0].length) {
    //     for (var d = 1; big !== null; d++) {
    //         if (chars[0].length !== chars[a - c].length) {
    //             console.log(chars[a - d][0] + chars[a - d][2] + 'のデータに過剰があります。');
    //             big = 1;
    //             console.log('bigの値は' + big + 'です');
    //         } else {
    //             console.log('想定外の不具合です（データ過剰のif文の中です）');
    //         };
    //     };
    //     console.log('データ過剰のif文の中の、forの外です。')
    // } else {
    //     console.log('想定外の不具合です（データが不完全のif文のなかです）')
    // };
    // {
    //     var finish = null;
    //     for(var b = 1; finish !== null ; b ++){
    //     };


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

    // CSVファイル読み込み
    function csvToArray(path) {
        var csvData = new Array();
        var data = new XMLHttpRequest();
        data.open("GET", path, false);
        data.send(null);
        var LF = String.fromCharCode(10);
        var lines = data.responseText.split(LF);
        for (var i = 0; i < lines.length; ++i) {
            var cells = lines[i].split(",");
            if (cells.length != 1) {
                csvData.push(cells);
            }
        }
        return csvData;
    }


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
    //②それぞれのタブのクリックイベントを切り替え
    //③戻るボタンの可視性を変更
});
