function alternarVisibilidadeClick(id) {
    var divClick = document.getElementById(`click-${id}`);

    if (divClick.classList.contains("show")) {
        divClick.classList.remove("show");
        setTimeout(function() {
            divClick.style.display = "none";
        }, 300);
    } else {
        divClick.style.display = "block";
        setTimeout(function() {
            divClick.classList.add("show");
        }, 10);
    }
}

function aoClicarNoCoração(postId) {
    alternarVisibilidadeClick(`heart-${postId}`);
}
