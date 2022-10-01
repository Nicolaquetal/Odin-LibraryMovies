const btnOpenform = document.querySelector('.openform');
const btnCloseform = document.querySelector('.btnCancel');
const btnAdd = document.querySelector('.add');
const table=document.querySelector('table');

let myLibrary = [];

btnOpenform.addEventListener('click',openForm);
btnCloseform.addEventListener('click',closeForm);
btnAdd.addEventListener('click',()=>{
    const Im=document.querySelector('#Im').value;
    const Title=document.querySelector('#Title').value;
    const Plat=document.querySelector('#Plat').value;
    const Date=document.querySelector('#Date').value;
    const Rate=document.querySelector('#Rate').value;
    const Com=document.querySelector('#Com').value;
    const Seen=document.querySelector('#Seen').value;
    addMovieToLibrary(myLibrary,Im,Title,Plat,Date,Rate,Com,Seen);
    cleanDOM();
    displayLibrary(myLibrary);
    closeForm();
});

function Movie (Image, Title, Plateform, Date,Rating,Comment,Seen){
    this.Image=Image;
    this.Title=Title;
    this.Plateform=Plateform;
    this.Date=Date;
    this.Rating=Rating;
    this.Comment=Comment;
    this.Seen=Seen;
}

function addMovieToLibrary(Library,Im,Title,Plat,Date,Rate,Com,Seen){
    let newMovie = new Movie(Im,Title,Plat,Date,Rate,Com,Seen);
    Library.push(newMovie);
}

function displayLibrary(Library){  
    for(i=0; i<Library.length;i++){
        let tr = document.createElement('tr');
        tr.classList.add('removable');
        tr.classList.add(`N${i}`)
        const newMovieAttribute =[Library[i].Image, Library[i].Title, Library[i].Plateform, Library[i].Date,Library[i].Rating,Library[i].Comment,Library[i].Seen]
        for(let j=0;j<6;j++){
            let td = document.createElement('td');
            var newContent = document.createTextNode(`${newMovieAttribute[j]}`);
            td.appendChild(newContent);
            tr.appendChild(td);
        }
        let td1 = document.createElement('td');
        td1.classList.add('divtog')
        let btn1 = document.createElement('button');
        btn1.classList.add('Tog');
        btn1.classList.add(`N${i}`);
        if(Library[i].Seen == 'N' ){
            var newContent1 = document.createTextNode('N');
            btn1.appendChild(newContent1);
            td1.appendChild(btn1);
            td1.classList.add('clicked');
        }
        else{
            var newContent1 = document.createTextNode('Y');
            btn1.appendChild(newContent1);
            td1.appendChild(btn1);
        }
        tr.appendChild(td1);
        let td = document.createElement('td');
        let btn = document.createElement('button');
        btn.classList.add('Del');
        btn.classList.add(`N${i}`);
        var newContent = document.createTextNode("X");
        btn.appendChild(newContent);
        td.appendChild(btn);
        tr.appendChild(td);
        table.appendChild(tr);
    }
    toggleButton(Library);  
    delMovie(Library);
}

function delMovie(Library){
    const btnDel = document.querySelectorAll('.Del');
    btnDel.forEach((z)=> z.addEventListener('click',(e)=>{
        Library.splice(parseInt(`${e.target.classList[1][1]}`), 1);
        cleanDOM();
        displayLibrary(Library);
    }));
}

function toggleButton(Library){
    const btnTog = document.querySelectorAll('.Tog');
    btnTog.forEach((z)=>z.addEventListener('click',(e)=>{        
        e.target.parentElement.classList.toggle('clicked');
        if(e.target.textContent == 'Y'){
            e.target.textContent = 'N';
            Library[parseInt(`${e.target.classList[1][1]}`)].Seen='N';
        }
        else{
            e.target.textContent = 'Y';
            Library[parseInt(`${e.target.classList[1][1]}`)].Seen='Y';
        }       
    }));
}

function cleanDOM(){
    const e = document.querySelectorAll('.removable');
    e.forEach((z)=>{z.remove();}) 
}

function openForm() {
    document.querySelector(".form").style.display = "flex";   
}
  
function closeForm() {
    document.querySelector(".form").style.display = "none";  
}

