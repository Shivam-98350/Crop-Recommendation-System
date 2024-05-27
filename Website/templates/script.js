function startPrediction() {
    window.location.href = "input_page.html";
}

function predict() {
    // Prevent the default form submission behavior

    // Get form data
    var formData = {
        Rainfall: parseFloat(document.getElementById('Rainfall').value),
        Temperature: parseFloat(document.getElementById('Temperature').value),
        Humidity: parseFloat(document.getElementById('Humidity').value),
        Nitrogen: parseFloat(document.getElementById('Nitrogen').value),
        Phosporus: parseFloat(document.getElementById('Phosporus').value),
        Potassium: parseFloat(document.getElementById('Potassium').value),
        Ph: parseFloat(document.getElementById('Ph').value)
    };

    console.log(formData);
    // Send form data to the server for prediction
    fetch('http://127.0.0.1:5800/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                // Redirect to output page with the prediction as a query parameter
                window.location.href = "output_page.html?prediction=" + encodeURIComponent(data.prediction);
            }
        })
        .catch(error => console.error('Error:', error));
}

function redirectToHomepage() {
    window.location.href = "index.html";
}
