function volume_sphere(event) {
    event.preventDefault();
    let temp = document.getElementById('radius').value;
    temp = parseFloat(temp);
    if (temp < 0 || isNaN(temp)) {
        temp = NaN;
    } else {
        temp = (4 / 3) * Math.PI * Math.pow(temp, 3);
    }
    document.getElementById('volume').value = temp;
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
