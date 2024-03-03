
function myFunc(files){
    for(var x = 0; x<files.length;x++){
        var freader = new FileReader();
        freader.onload = function(e){
            message.innerHTML += '<br>'  + e.target.result;
        }

        freader.readAsText(files[x]);
    }
}


document.getElementById('fileInput').addEventListener('change', displaySelectedFiles);


function displaySelectedFiles() {
    var fileList = document.getElementById('fileList');
    var files = document.getElementById('fileInput').files;

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();

        reader.onload = function(e) {
            var listItem = document.createElement('li');
            listItem.textContent = e.target.result;
            fileList.appendChild(listItem);
        };

        reader.readAsText(file);
    }
}



function saveFile(){
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
    
    for(let i = 0; i<files.length; i++){
        const file = files[i];
        const url = URL.createObjectURL(file);
        const a = document.createElement('a');
        a.href = url;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

    }
    alert('Files have been saved successfully');
}


function deleteFile(){
    const fileInput = document.getElementById('fileInput');
    fileInput.value = null;
    // window.location.href = 'file_upload.html';
}

function cancelFile(){
    message.innerHTML = '';
    // window.location.href = 'file_upload.html';
}