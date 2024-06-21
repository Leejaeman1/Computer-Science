
function sendPost() {
            var xhr = new XMLHttpRequest();
            var url = "http://관리서버주소/endpoint"; // 관리 서버 주소를 여기에 입력하세요
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

            var data = JSON.stringify({
                "username": document.getElementById("username").value,
                "password": document.getElementById("password").value,
                "code": document.getElementById("code").value
            });

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    document.getElementById("id").value = response.id;
                    document.getElementById("postForm").style.display = "none";
                    document.getElementById("getForm").style.display = "block";
                }
            };
            xhr.send(data);
        }

        function sendGet() {
            var xhr = new XMLHttpRequest();
            var url = `http://관리서버주소/endpoint?username=${document.getElementById("newUsername").value}&password=${document.getElementById("newPassword").value}&id=${document.getElementById("id").value}`; // 관리 서버 주소를 여기에 입력하세요
            xhr.open("GET", url, true);

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    document.getElementById("result").innerText = JSON.stringify(response, null, 2);
                }
            };
            xhr.send();
        }