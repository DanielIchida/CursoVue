//TODO PROMISE FETCH
/*const requestData = {
    method: 'getUser'
};
const usersPromise = fetch('/api',{
   method: 'POST',
   body: JSON.stringify(requestData)
}).then(response => {
    if(!response.ok){
        throw new Error("Got non-2XX response from API server")
    }
    return response.json()
});

usersPromise.then(users => {
    console.log("Known users: ", users);
}, error => {
    console.error("Failed to fetch users due to error: ", error);
});*/
function addPreloader() {
    if(!document.querySelector('#preloader')) {
        var preloaderHTML = '<img id="preloader" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" />';
        document.querySelector('body').innerHTML += preloaderHTML;
    }
}
function removePreloader() {
// select the preloader element
    var preloader = document.querySelector('#preloader'); // if it exists, remove it from the page
    if(preloader) {
        preloader.remove();
    }
}
//TODO EXAMPLE API DE STACK OVERFLOW
const url  = 'http://api.stackexchange.com/2.2/questions?site=stackoverflow' + '&tagged=javascript&sort=month&filter=unsafe&key=gik4BOCMC7J9doavgYteRw((';
fetch(url).then(response => response.json()).then(data => {
    if (data.error_message) {
        throw new Error(data.error_message);
    }
    const list = document.createElement('ol');
    document.body.appendChild(list);
    for (const {title, link} of data.items) {
        const entry = document.createElement('li');
        const hyperlink = document.createElement('a');
        entry.appendChild(hyperlink); list.appendChild(entry);
        hyperlink.textContent = title;
        hyperlink.href = link; }
}).then(null,error => {
    const message = document.createElement('pre');
    document.body.appendChild(message); message.style.color = 'red';
    message.textContent = String(error);
});
