//Короч, тут просто будет отправлялка почты сч

betatasets = []

form.onsubmit = async (e) => {
    e.preventDefault();
    submit.classList.toggle("loading")
    let data = document.getElementById("email").value
    for (tester of betatasets) {
        if (tester === data) {
            alert("This email is already registered")
            return
        }
    }
    let response = await fetch('https://nemem.app/app/graphql/', {
        method: 'POST',
        headers: {"content-type": "application/json",},
        body: JSON.stringify({query: `mutation{addBetatester(email: "${data}"){ok}}`})
    }).then(resp => {
        alert("Your email successfully received");
        submit.classList.toggle("loading")
        betatasets.push(data)
    }).catch(error => {
        console.error('There was an error!', error);
        alert("Error please try later");
        submit.classList.toggle("loading")
    });

};