function sendPost() {
    var xhr = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/posts"; // JSONPlaceholder POST 엔드포인트
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    // 입력된 데이터를 JSON 형태로 변환
    var data = JSON.stringify({
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value,
        "code": document.getElementById("code").value
    });

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

function sendGet() {
    var xhr = new XMLHttpRequest();
    var url = `https://jsonplaceholder.typicode.com/posts/${document.getElementById("id").value}`; // JSONPlaceholder GET 엔드포인트
    xhr.open("GET", url, true);

    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById("result").innerText = JSON.stringify(response, null, 2);
        }
    };
}