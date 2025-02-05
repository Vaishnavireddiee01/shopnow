const xhr=new XMLHttpRequest(); //creates a new HTTP msg(request) to send to backend

xhr.addEventListener('load', () => {
    console.log(xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev'); //GET=get some info from backend; types of rqsts: GET,POST,PUT,DELETE
//2nd parameter tells: where to send this HTTP message
xhr.send();
//xhr.response