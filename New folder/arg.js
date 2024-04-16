function one() {
    var x = document.querySelector('input[name="question1"]:checked').value;
    var x1 = document.querySelector('input[name="question2"]:checked').value;
    var x2 = document.getElementById("dog").value;
    var x3 = document.getElementById("mouse").value;
    var x4 = document.getElementById("bat").value;
    var x5 = document.getElementById("rat").value;
    var x6 = document.getElementById("panda").value;
    var x7 = document.getElementById("ox").value;
    var x8 = document.querySelector('input[name="question9"]:checked').value;
    var x9 = document.getElementById("car").value;

    localStorage.setItem("QUESTION NO. 1", x);
    localStorage.setItem("QUESTION NO. 2", x1);
    localStorage.setItem("QUESTION NO. 3", x2);
    localStorage.setItem("QUESTION NO. 4", x3);
    localStorage.setItem("QUESTION NO. 5", x4);
    localStorage.setItem("QUESTION NO. 6", x5);
    localStorage.setItem("QUESTION NO. 7", x6);
    localStorage.setItem("QUESTION NO. 8", x7);
    localStorage.setItem("QUESTION NO. 9", x8);
    localStorage.setItem("QUESTION NO. 10", x9);

    // Reset the form after storing answers
    document.getElementById("sid").reset();
}





