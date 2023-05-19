let html = "<h1>Hi There</h1>";
html = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
document.body.innerHTML = html;
