var students = ["Robert","Max","Alexia","Hose","Vicktoria","Eva","Stella","Milena","Paul","Levin","Felix P.","Felix R.","Julia","Eda","Anna","Gabriela","Elisabeth","Faran","Simon","Lucas","Sophia","Laura","Fabian","Aniela","Ellie","Yeva"];

$(".btn").click(function() {
    cuztomSeatplace(students);
});

function cuztomSeatplace(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    display();
}

function display(){
    for (let i = 0; i < 26; i++){
        $(".item" + i).html(students[i]);
    }
}

