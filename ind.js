var listARray = []

function handleClick() {
    var book = document.getElementById("book-name").value
    var issue = document.getElementById("issue-to").value
    var currentdate = new Date();
    var datetime = + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " at "
        + currentdate.toLocaleTimeString()


    var arrayLength = listARray.length
    var details = { id: arrayLength + 1, book_name: book, issued_to: issue, issued_time: datetime, status: "not returned" }
    listARray.push(details)

    var table = document.getElementById("table")
    var x = document.getElementById("table").rows.length
    var row = table.insertRow(x);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = details.id;
    cell2.innerHTML = details.book_name;
    cell3.innerHTML = details.issued_to;
    cell4.innerHTML = details.issued_time;
    cell5.innerHTML = details.status;

}

