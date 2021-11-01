$(function () {
    let ref = document.referrer;
        let page = ('school');
    if(ref.includes('https://satsuki-mito.github.io/kurobas-charactors/h.middle/s.')){
        page = ('school');
    } else if(ref.includes('https://satsuki-mito.github.io/kurobas-charactors/h.middle/p.')){
        page = ('position');
    } else if(ref.includes('https://satsuki-mito.github.io/kurobas-charactors/h.middle/n.')){
        page = ('name');
    } else if(ref.includes('https://satsuki-mito.github.io/kurobas-charactors/h.middle/g.')){
        page = ('grade');
    } else if(ref.includes('https://satsuki-mito.github.io/kurobas-charactors/index.html')){
        page = ('other');
    };
    console.log(ref + 'から訪れました');

    $("#school").on('click', school);
    $("#position").on('click', position);
    $("#grade").on('click', grade);
    $("#name").on('click', name);

    if(page === ('school')){
        console.log('学校ページから来ました');
        school();
    } else if(page === ('position')){
        console.log('ポジションページから来ました');
        position();
    } else if(page === ('name')){
        console.log('名前ページから来ました');
        name();
    } else if(page === ('grade')){
        console.log('学年ページから来ました');
        grade();
    } else{
        alert('その他のページから来ました');
    };


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
