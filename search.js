function search() {
    var input, filter, table, p, i, textValue;

    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    p = table.getElementsByClassName("post-box");

    for (i = 0; i < p.length; i++) {
        var postTitle = p[i].getElementsByClassName("post-title")[0];
        var postDesc = p[i].getElementsByClassName("post-decription")[0];
        textValue = postTitle.textContent || postTitle.innerText;
        textValue += " " + (postDesc.textContent || postDesc.innerText);

        if (textValue.toUpperCase().indexOf(filter) > -1) {
            p[i].style.display = "";
        } else {
            p[i].style.display = "none";
        }
    }
}
