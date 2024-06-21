function sendData() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let code = document.getElementById('code').value;

    let payload = { username, password, code };

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log('Response:', this.responseText);
            document.getElementById('submissionForm').classList.add('hidden');
            document.getElementById('reservationForm').classList.remove('hidden');
        }
    };
    xhttp.open('POST', 'http://localhost:3000/submission', true);
    xhttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhttp.send(JSON.stringify(payload));
}

function getReservation() {
    const username = document.getElementById('checkUsername').value;
    const password = document.getElementById('checkPassword').value;

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.responseText);
            document.getElementById('reservationNumber').innerText = `Reservation Number: ${response.reservationNumber}`;
            document.getElementById('codeResult').innerText = `Code Result: ${response.codeResult}`;
            document.getElementById('reservationForm').classList.add('hidden');
            document.getElementById('resultForm').classList.remove('hidden');
        } else if (this.readyState === 4) {
            alert('Failed to get reservation. Please check your username and password.');
        }
    };
    xhttp.open('GET', `http://localhost:3000/submission?username=${username}&password=${password}&id=${id}`, true);
    xhttp.send();
}
