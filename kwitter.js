function adduser()
{
    var save_name=document.getElementById("User_Name").value;
    localStorage.setItem("MyUser_Name", save_name)
    
    window.location="kwitter_room.html"
}

