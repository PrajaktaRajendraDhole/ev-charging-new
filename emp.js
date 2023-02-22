function fetchemp(){


    alert("hello");

    var id = document.getElementById["location"].value;
    alert(id);

    $.ajax(
        {
            url : "fetchlocation.php",
            method : "POST",
            data:{
                id : id
            },
            dataType:"JSON",
            success:function(data){
                console.log(data) ;
            }
        }
    )
}