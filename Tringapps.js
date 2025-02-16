document.getElementById('signup').addEventListener('submit',function(event){
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let language = document.getElementById('languages').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;

    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
    localStorage.setItem('languages',language);
    localStorage.setItem('phone',phone);
    localStorage.setItem('password',password);
    alert("Sign Up successfully");
});


