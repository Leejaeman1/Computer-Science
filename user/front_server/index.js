let savedUsername = '';
let savedPassword = '';
let savedCode = '';
let CorrectCode = 'Code';

function SendPost() {
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts"; 
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    var data = JSON.stringify({
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value,
        "code": document.getElementById("code").value
    });

    savedUsername = document.getElementById("username").value;
    savedPassword = document.getElementById("password").value;
    savedCode = document.getElementById("code").value;

    xhr.send(data); // 데이터를 서버로 보내기

    // 서버에서 응답이 오면 함수 실행
    xhr.onreadystatechange = function () { 
        if (xhr.readyState === 4 && xhr.status === 201) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById("id").value = response.id; 
            document.getElementById("postForm").style.display = "none"; // POST 폼 숨기기
            document.getElementById("getForm").style.display = "block"; // GET 폼 보이기
        }
    };
}

function SendGet() {
    var Username = document.getElementById("Username").value;
    var Password = document.getElementById("Password").value;

    if (Username === savedUsername && Password === savedPassword) {
        if (CorrectCode === savedCode) {
            document.getElementById("result").innerText = "정답";
        } else {
            document.getElementById("result").innerText = "오답";
        }
    } else {
        document.getElementById("result").innerText = "username 또는 password가 일치하지 않습니다.";
    }
    document.getElementById("result").style.display = "block";
}