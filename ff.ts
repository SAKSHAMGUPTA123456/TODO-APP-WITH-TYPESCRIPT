
// localStorage.clear();
let firstss=document.getElementById('text1') as HTMLInputElement
let button=document.getElementById('text2')as HTMLButtonElement
let hackings=document.getElementById('container')as HTMLDivElement
let count=0
function deletefromlocal(valuing:string){
parseInt(valuing)
localStorage.removeItem(valuing)
}
function showonscreen(values:any){
    for(let y=0;y<values.length;y++){
        let div=document.createElement('div')as HTMLDivElement
        div.style.display="flex"
     div.style.justifyContent="between"
        div.style.border="2px solid black"
        let text1=document.createElement('h1')as HTMLElement
        text1.style.color="white"
        let text2=document.createElement('h1')as HTMLElement
        text2.style.color="white"
        text2.style.marginLeft="40px"
        let button45=document.createElement('button')as HTMLButtonElement
        button45.onclick=()=>{
            let parent=button45.parentElement as HTMLElement
            let first=parent.firstElementChild  as HTMLElement
           parent.remove()
        deletefromlocal(first.innerText);
        }
        let div50=document.createElement('div')as HTMLElement
        div50.style.width="100px"
        button45.style.backgroundColor="red"
        button45.style.marginLeft="40px"
        button45.style.width="50px"
        button45.innerText="Delete"
        div.style.overflowWrap = 'break-word'; 
        div.style.backgroundColor="black"
       text1.innerText=`${values[y].id}`
       text2.innerText=`${values[y].name}`
       div.append(text1);
       div50.append(text2)
       div.appendChild(div50)
       div.append(button45)
       hackings.appendChild(div);
    }
    
    }
    let last;
    function cal(){

type details={
    name:string,id:number
}
let ero:details[]=[]
for (let i = 0; i < localStorage.length; i++) { 
    let qws=localStorage.key(i)
    ero.push(JSON.parse(localStorage.getItem(qws)));
}

showonscreen(ero)
}
    
button.onclick=()=>{
if(firstss.value!=""){
    let max=0;
    for(let y=0;y<localStorage.length;y++){
    let fg=localStorage.key(y)
    let azs=JSON.parse(localStorage.getItem(fg))
    if(azs.id>max){
        max=azs.id
    }
    }
    count=max+1;
       let test=firstss.value
    let hack={name:test,id:count}
localStorage.setItem(`${count}`,JSON.stringify(hack))

type details={
    name:string,id:number
}
let ero:details[]=[]
hackings.innerHTML=""
for (let i = 0; i < localStorage.length; i++) { // Adjusted loop to include last item
    let ml=localStorage.key(i);
    ero.push(JSON.parse(localStorage.getItem(ml)));
}

showonscreen(ero)
firstss.value=""
}
}
document.addEventListener('DOMContentLoaded',cal)
