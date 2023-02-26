let datas = []; 

function getData(event){
    event.preventDefault();
    let projectName = document.getElementById("projectn").value;
    let startDate = document.getElementById("sdate").value;
    let endDate = document.getElementById("edate").value;
    let description = document.getElementById("description").value;
    let img = document.getElementById("attach-files").files;

    let nodejs = document.getElementById("checkbox-nodejs").checked;
    let nextjs = document.getElementById("checkbox-next").checked;
    let reactjs = document.getElementById("checkbox-reactjs").checked;
    let typescript = document.getElementById("checkbox-typescript").checked;

    let icons = [nodejs, nextjs, typescript,reactjs];

    img = URL.createObjectURL(img[0]);

    if(projectName == ""){
        return alert("Project Cannot be empty");
    } else if (description == "") {
        return alert("Description Cannot be empty");
    } else if (description.length < 80) {
        return alert("Description must be more than 80 Characters");
    } else if (startDate == "") {
        return alert("Date Cannot be empty");
    } else if (endDate == "") {
        return alert("Date Cannot be empty");
    }
    
    let data = {
        projectName,
        description,
        img,
        icons
    };

    datas.push(data);
    showData();

}
function showData (){
    let contents = document.getElementById("contents");
    contents.innerHTML = "";

    for(let i = 0; i < datas.length;i++){
        contents.innerHTML += `<div class="card-post">
        <img class="post-img" src="${datas[i].img}">
        <div class="title-date">
            <h1 class="title">${datas[i].projectName}</h1>
            <h3 class="date">Durasi : 2 Bulan</h3>
        </div>
        <div class="post-content">
            <p>${datas[i].description}</p>
        </div>
        <div class="tag-tech" id="tag-tech">
            ${datas[i].icons[0] ? `<img class="nodejs">` : ""}
            ${datas[i].icons[1] ? `<img class="nextjs">` : ""}
            ${datas[i].icons[2] ? `<img class="reactjs">` : ""}
            ${datas[i].icons[3] ? `<img class="typescript">` : ""}
        </div>
        <div class="post-button">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </div>
    </div>`;
    }
}