let signInStatus = "2";
window.onload = () => {
    let refer = "";
    switch (signInStatus) {
        case "0":
            refer = "sign_in.html";
            break;
        case "1":
            refer = "log_in.html";
            break;
        case "2":
            refer = "main_page.html"
            break;
    }
    window.location.href = refer;
}
