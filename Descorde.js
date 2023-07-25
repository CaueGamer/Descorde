function addUser()
{
    PersonName = document.getElementById("user_name").value;

    localStorage.setItem("PersonName", PersonName);

    window.location = "index2.html";
}
