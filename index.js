//Короч, тут просто будет отправлялка почты сч

form.onsubmit = async (e) => {
    e.preventDefault();
    let data = document.getElementById("email").value
    let response = await fetch('http://85.209.2.93/graphql/', {
        method: 'POST',
        body: `mutation{addBetatester(email: "${data}"){ok}}`
    });

    let result = await response.json();

    alert("Your email successfully received");
};