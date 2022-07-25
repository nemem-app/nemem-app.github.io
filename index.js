//Короч, тут просто будет отправлялка почты сч

form.onsubmit = async (e) => {
    e.preventDefault();
    submit.classList.toggle("loading")
    let data = document.getElementById("email").value
    let response = await fetch('http://85.209.2.93/graphql/', {
        method: 'POST',
        body: `mutation{addBetatester(email: "${data}"){ok}}`
    }).then(resp => {
        alert("Your email successfully received");
        submit.classList.toggle("loading")
    }).catch(error => {
        console.error('There was an error!', error);
        alert("Error please try later");
        submit.classList.toggle("loading")
    });

};