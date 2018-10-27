const files = [
    "4Z2A0292.JPG",
    "4Z2A0349.JPG",
    "4Z2A0477.JPG",
    "4Z2A0518.JPG",
    "4Z2A0528.JPG",
    "4Z2A0625.JPG",
    "4Z2A0656.JPG",
    "4Z2A0708.JPG",
    "4Z2A0724.JPG",
    "4Z2A0895.JPG",
    "4Z2A0932.JPG",
    "4Z2A0956.JPG",
    "4Z2A1092.JPG",
    "4Z2A1129.JPG",
    "4Z2A1165.JPG",
    "4Z2A1182.JPG",
    "4Z2A1190.JPG",
    "4Z2A1199.JPG",
    "4Z2A1250.JPG",
    "4Z2A1315.JPG",
    "4Z2A1352.JPG",
    "4Z2A1494.JPG",
    "4Z2A2518.JPG",
    "4Z2A2532.JPG",
    "4Z2A2696.JPG",
    "LUCK0042.JPG",
    "LUCK0157.JPG",
    "LUCK0190.JPG",
    "LUCK0222.JPG",
    "LUCK0231.JPG",
    "LUCK0365.JPG",
    "LUCK0387.JPG",
    "LUCK2772.JPG",
    "LUCK2936.JPG",
    "LUCK3028.JPG",
    "LUCK3246.JPG",
    "LUCK3276.JPG",
    "LUCK3332.JPG",
    "LUCK3537.JPG",
    "LUCK3702.JPG",
    "LUCK3710.JPG",
];
function load(){    
    const options = {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling:true,
    };
    new fullpage('#fullpage', options);
    fullpage_api.setAllowScrolling(true);
    displayImages();
}
function displayImages(){
    files.forEach((e) => {
        getImage(e);
    });
}
function getImage(imageName){
    let baseUrl = "./assets/images/" + imageName;
    let htmltemplate = `<img data-src="${baseUrl}">`;
    document.getElementById('image-holder').insertAdjacentHTML('beforeend', htmltemplate);
}