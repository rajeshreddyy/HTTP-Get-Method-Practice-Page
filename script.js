let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let httpResponse = document.getElementById("httpResponse");
let requestStatus = document.getElementById("requestStatus");


function getRequestStatusAndBody() {
    let url = "https://gorest.co.in/public-api/users";
    let options = {
        methods: "GET",
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let response = JSON.stringify(data);
            requestStatus.textContent = data.code;
            httpResponse.textContent = response;
            console.log(data);
        });
}



sendGetRequestBtnEl.onclick = function() {
    getRequestStatusAndBody();
};