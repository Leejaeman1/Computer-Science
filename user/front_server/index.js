
function sendPost() {
    var xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성
            var url = "http://25.32.99.72:3306/submission?"; // 관리 서버 주소를 여기에 입력하세요
    xhr.open("POST", url, true); // post요청 열고, 비동기로 처리(비동기란 작업을 백그라운드에 요청해서 처리되게 해 멀티로 작업을 동시에 처리하는 거, 속도 up)
            xhr.send(data); // 데이터 서버로 보내기
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8"); // 요청 해더 설정

            // 입력된 데이터를 JSON 형태로 변환
            var data = JSON.stringify({
                "username": document.getElementById("username").value,
                "password": document.getElementById("password").value,
                "code": document.getElementById("code").value
            });

            //서버에서 응답오면 함수 function() 실행
            xhr.onreadystatechange = function () { 
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    document.getElementById("id").value = response.id; 
                    document.getElementById("postForm").style.display = "none"; // POST 폼을 숨기기
                    document.getElementById("getForm").style.display = "block"; // GET 폼을 나타내기
                }
            };
        }

function sendGet() {
    var xhr = new XMLHttpRequest();
    var url = `http://25.32.99.72:3306/submission?username=${document.getElementById("newUsername").value}&password=${document.getElementById("newPassword").value}&id=${document.getElementById("id").value}`; // 관리 서버 주소를 여기에 입력하세요
    xhr.open("GET", url, true);

    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById("result").innerText = JSON.stringify(response, null, 2);
        }
    };
}