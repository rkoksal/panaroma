const container = document.querySelector('#container');

// panorama 1
const panorama = new PANOLENS.ImagePanorama('https://i.ibb.co/4jYJjkJ/x1080.jpg');
const infospot = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);

// infospot.addHoverText("The Story");
infospot.addEventListener('click', function () {
    viewer.setPanorama(panorama2);

});


// panorama 2
const panorama2 = new PANOLENS.ImagePanorama('https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/cabin.jpg');
const infospot2 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
infospot2.position.set(-100, -500, -5000);
infospot2.addEventListener('click', function () {
    viewer.setPanorama(panorama3);
});

// panorama 3
const panorama3 = new PANOLENS.ImagePanorama('https://images.unsplash.com/photo-1513735539099-cf6e5d559d82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
const infospot3 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
infospot3.position.set(-100, -500, -5000);
infospot3.addEventListener('click', function () {
    viewer.setPanorama(panorama4);
});


// panorama 4
const panorama4 = new PANOLENS.ImagePanorama('https://images.unsplash.com/photo-1509225770129-fbcf8a696c0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80');
const infospot4 = new PANOLENS.Infospot(300, PANOLENS.DataImage.Info);
infospot4.position.set(-100, -500, -3000);
infospot4.addEventListener('click', function () {
    viewer.setPanorama(panorama);
});

let currentPanorama = 'panorama';
panorama.add(infospot);
panorama2.add(infospot2);
panorama3.add(infospot3);
panorama4.add(infospot4);

const viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama, panorama2,panorama3,panorama4);

viewer.addUpdateCallback(function () {

});