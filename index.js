var students = ["Robert","Max","Alexia","Jose","Viktoria","Eva","Stella","Milena","Paul","Levin","Felix P.","Felix R.","Julia","Eda","Anna","Gabriela","Elisabeth","Faran","Simon","Lucas","Sophia","Laura","Fabian","Aniela","Ellie","Yeva"];

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
    $('.all').animate({ opacity: 0 }, 1000, function() {
        for (let i = 0; i < 26; i++){
            $(".inText" + i).html(students[i]);
        }
        $(this).animate({ opacity: 1 }, 1000);
    });
}
