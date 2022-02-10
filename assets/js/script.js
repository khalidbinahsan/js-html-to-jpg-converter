// Watermark=========
(function() {
    const convert_btn = document.getElementById("convert-btn");
    convert_btn.addEventListener('click', function() {
        const title = document.getElementById("c-title");
        // Add title-----
        const rev_title = document.getElementById("rev-title");
        rev_title.textContent = title.value;
        title.value = '';
    })

})();
// Preview show=====
function preview_show(event) {
    var reader = new FileReader();
    reader.onload = function() {
        var output = document.getElementById('preview-image');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
};
// Html to Jpg Convert====
document.getElementById("convert-btn").addEventListener("click", function() {
    html2canvas(document.getElementById("preview-container")).then(function(canvas) {
        // Create a anchor tag....
        var anchorTag = document.createElement("a");
        var mybody = document.getElementById("preview-img");
        const file_name = document.getElementById("c-title");
        mybody.appendChild(anchorTag);
        anchorTag.id = "image-download";
        anchorTag.download = "revision.jpg";
        anchorTag.href = canvas.toDataURL();
        anchorTag.target = '_blank';
        anchorTag.click();
        // Create a download icon to anchor tag
        let create_i = document.createElement("i");
        let i_body = document.getElementById("image-download");
        i_body.appendChild(create_i);
        create_i.classList = "fa-solid fa-download";
    });
});