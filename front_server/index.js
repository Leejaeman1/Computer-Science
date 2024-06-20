function sendData() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let code = document.getElementById('code').value;

    let xmlString = `
        <user>
            <username>${username}</username>
            <password>${password}</password>
            <code>${code}</code>
        </user>
    `;

    let payload = { xmlData: xmlString };

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log('Response:', this.responseText);
            document.getElementById('submissionForm').classList.add('hidden');
            document.getElementById('reservationForm').classList.remove('hidden');
        }
    };
    xhttp.open('POST', 'http://192.168.137.102:2222/submit', true);
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
    xhttp.open('GET', `http://192.168.137.102:2222/reservation?username=${username}&password=${password}`, true);
    xhttp.send();
}