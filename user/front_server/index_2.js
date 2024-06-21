function sendPost() {
    var xhr = new XMLHttpRequest();
    var url = "관리자서버주소/submission"; 
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    var data = JSON.stringify({
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value,
        "code": document.getElementById("code").value
    });

    xhr.send(data); 

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById("id").value = response.id;
            document.getElementById("postForm").style.display = "none"; // POST 폼 숨기기
            document.getElementById("getForm").style.display = "block"; // GET 폼 보이기
        }
    };
}

function sendGet() {
    var xhr = new XMLHttpRequest();
    var url = `관리자서버주소/submission?username=${document.getElementById("Username").value}&password=${document.getElementById("Password").value}&id=${document.getElementById("id").value}`; 
    xhr.open("GET", url, true);

    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById("result").innerText = JSON.stringify(response, null, 2);
        }
    };
}
