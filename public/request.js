let sendFile = function() {

    let input = document.getElementById("file")
    let fd = new FormData()
    if(input.files.length > 0) {
        fd.append("file",input.files[0])
    }

    $.ajax({
        type: "POST",
        url: "/getfile",
        data: fd,
        contentType: false,
        processData: false,
        success: function(responseData, textStatus, jqXHR) {
            console.log("Success")
        },
        error: function (responseData, textStatus, errorThrown) {
            alert("POST failed.")
        }
    })
}