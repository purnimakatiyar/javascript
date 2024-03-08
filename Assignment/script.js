
function myFunc(files){
    var fileselected = document.getElementById('fileselected');

    for (var i = 0; i < files.length; i++) {
        var file = files[i];

        var divItem = document.createElement('div');
        divItem.textContent = file.name;
        fileselected.appendChild(divItem);
        var viewFile = document.createElement('button');
        viewFile.textContent = 'View File';

        viewFile.addEventListener('click', function() {
           
            var freader = new FileReader();
            freader.onload = function(e){
                var newWindow = window.open('', '_self');
                newWindow.document.write(e.target.result);
                var goBackButton = newWindow.document.createElement('button');
                goBackButton.textContent = 'Go Back';
                goBackButton.addEventListener('click', function() {
                    newWindow.close();
                });
                newWindow.document.body.appendChild(goBackButton);
            }
            freader.readAsText(file);
        });

        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖';
        deleteBtn.style.color = 'red';

        divItem.appendChild(deleteBtn);
        divItem.appendChild(viewFile);

        deleteBtn.addEventListener('click', function() {
            divItem.parentNode.removeChild(divItem);
            message.innerHTML = '';
        });
    }
}
