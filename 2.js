function submithere() {
    let val1 = document.querySelector("#userid").value;
    let val2 = document.querySelector("#passid").value;
    let val3 = document.querySelector("#mailid").value;
    let disdata = document.querySelector("#showdata");

    let newelement = document.createElement("div");

    let child1 = document.createElement("div");
    child1.textContent = val1;
    let child2 = document.createElement("div");
    child2.textContent = val2;
    let child3 = document.createElement("div");
    child3.textContent = val3;

    newelement.appendChild(child1);
    newelement.appendChild(child2);
    newelement.appendChild(child3);

    if (newelement === "") {
        disdata.innerHTML = "please enter values";
    }
    else {

        disdata.insertBefore(newelement, disdata.firstChild)
    }

    document.querySelector("#userid").value = "";
    document.querySelector("#passid").value = "";
    document.querySelector("#mailid").value = "";





}