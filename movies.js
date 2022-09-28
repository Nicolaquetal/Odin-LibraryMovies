const btnOpenform = document.querySelector('.openform');
btnOpenform.addEventListener('click',openForm);
const btnCloseform = document.querySelector('.btnCancel');
btnCloseform.addEventListener('click',closeForm);

const btnAdd = document.querySelector('.add');
const table=document.querySelector('table');



let myLibrary = [];
btnAdd.addEventListener('click',()=>{
    const Pos=document.querySelector('#Pos').value;
    const Im=document.querySelector('#Im').value;
    const Title=document.querySelector('#Title').value;
    const Plat=document.querySelector('#Plat').value;
    const Seen=document.querySelector('#Seen').value;
    const Date=document.querySelector('#Date').value;
    const Rate=document.querySelector('#Rate').value;
    const Com=document.querySelector('#Com').value;
    createMovie(myLibrary,Pos,Im,Title,Plat,Seen,Date,Rate,Com);
    console.log(Pos);
    closeForm();
});



function Movie (Position,Image, Title, Plateform,Seen, Date,Rating,Comment){
    this.Position=Position;
    this.Image=Image;
    this.Title=Title;
    this.Plateform=Plateform;
    this.Seen=Seen;
    this.Date=Date;
    this.Rating=Rating;
    this.Comment=Comment;
}

function addMovieToLibrary(Movie,Library){
    Library.push(Movie);
}

function createMovie(Library,Pos,Im,Title,Plat,Seen,Date,Rate,Com){
    let newMovie = new Movie(Pos,Im,Title,Plat,Seen,Date,Rate,Com);
    Library.push(newMovie);
    
    let tr = document.createElement('tr');
    const newMovieAttribute =[newMovie.Image, newMovie.Title, newMovie.Plateform,newMovie.Seen, newMovie.Date,newMovie.Rating,newMovie.Comment]
    for(let i=0;i<7;i++){
        let td = document.createElement('td');
        var newContent = document.createTextNode(`${newMovieAttribute[i]}`);
        td.appendChild(newContent);
        tr.appendChild(td);
    }
    let td = document.createElement('td');
    let btn = document.createElement('button');
    var newContent = document.createTextNode("X");
    btn.appendChild(newContent);
    td.appendChild(btn);
    tr.appendChild(td);

    table.appendChild(tr);
    
    
}



function openForm() {
    document.querySelector(".form").style.display = "flex";   
}
  
function closeForm() {
    document.querySelector(".form").style.display = "none";  
}

/*btn add movie -> form > bouton add -> recupere info du form et :
invoque create object new movie (infos du form)
invoque addMovieToLibrary

*/
