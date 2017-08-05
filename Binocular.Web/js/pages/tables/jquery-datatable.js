$(function () {
    $('.js-basic-example').DataTable({
        responsive: true
    });

    //Exportable table
    $('.js-exportable').DataTable({
        dom: 'Bfrtipl',
        responsive: true,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });

    $("#tbexe").click(function () {
        setTimeout(function () {
            $("#tbresult").show();
        }, 300);
    });

    $("#addAnotherWhere").click(function () {
        $("#anotherWhere").show();
    });

     $("#delAnotherWhere").click(function () {
        $("#anotherWhere").hide();
    });
});