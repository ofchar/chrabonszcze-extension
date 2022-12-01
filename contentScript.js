(() => {

const sendMessage = () => {
    fetch('https://reqbin.com/echo/post/json', {
    method: 'POST',
    headers: {
        'Accept': '/api/record',
        'Content-Type': '/api/record'
    },
    body: JSON.stringify({ "id": 78912 })
    })
    .then(response => response.json())
    .then(response => console.log(JSON.stringify(response)))
}


const getMessage = m => {
    var p_message = document.getElementsByClassName("xdj266r xat24cr xdpxx8g");
    
    var myStrText=JSON.stringify(myText);

    sendMessage("message.txt", myStrText);
}

function saveText(filename, text) {
    var tempElem = document.createElement('a');
    tempElem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    tempElem.setAttribute('download', filename);
    tempElem.click();
 }

})();


