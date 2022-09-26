const btnAdd = document.querySelector('.add');
const test= document.querySelector('.test');
let myLibrary = [];
btnAdd.addEventListener('click',()=>{createMovie(myLibrary)});
test.addEventListener('click',()=>{console.log(myLibrary)});


function Movie (Position,Image, Title, Plateform, Date,Rating,Comment){
    this.Position=Position;
    this.Image=Image;
    this.Title=Title;
    this.Plateform=Plateform;
    this.Date=Date;
    this.Rating=Rating;
    this.Comment=Comment;
}

function addMovieToLibrary(Movie,Library){
    Library.push(Movie);
}

function createMovie(Library){
    let newMovie = new Movie(1,"ima","the movie", "c+","12/12/2022","2.5/5","");
    Library.push(newMovie);
    console.log("ok create")
    
}


function createMovieRow(Movie){

}

/*btn add movie -> form > bouton add -> recupere info du form et :
invoque create object new movie (infos du form)
invoque addMovieToLibrary
invoque createMovieRow







*/