function addComment() {
    let commentBox = document.getElementById("commentBox");
    let commentList = document.getElementById("commentList");

    if (commentBox.value.trim() !== "") {
        let newComment = document.createElement("li");
        newComment.textContent = commentBox.value;
        commentList.appendChild(newComment);
        commentBox.value = ""; // Καθαρίζει το πεδίο μετά την υποβολή
    }
}

let likeCount = 0;
function addLike() {
    likeCount++;
    document.getElementById("likeCount").textContent = likeCount;
}
