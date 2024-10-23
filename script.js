let img = document.querySelector('img');


function DownloadImage () {

    let imgPath = img.getAttribute('src');
    let fileName = getFileName(imgPath);

    saveAs(imgPath, fileName);

}

function getFileName(str){
    return str.substring(str.lastIndexOf('/')+1);
}



// function addImages () {

//     for (let x = 0; x < 200; x++) {
//         imageActuelle = "<img src='img/geco_restaure/GD_0" +  (x + 9537)  + ".jpg onclick='DownloadImage()'>";
//         if (imageActuelle){
//             x += 1;
//         }
//         else {
//             x += 2;
//         }
        
//       }

// }