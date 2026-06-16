let tracks=JSON.parse(localStorage.getItem("tracks"))||[];
function Add(){
  let add=document.getElementById("input").value;
  let num=Number(document.getElementById("number").value);
  let find=tracks.find(item => item.name === add && item.price === num);
  if(add === ""||num === 0){
    alert("Fill the boxes first");
    return;
  }
  
  if(find){
    find.price=find.price+ num;
  }
  else{
    tracks.push({
      name:add,
      price:num
    });
  }
  localStorage.setItem("tracks",JSON.stringify(tracks));
  ShowItems();
}
function ShowItems(){
  let showItems=document.getElementById("showItems");
  showItems.innerHTML="";
  tracks.forEach((item,index)=>{
    showItems.innerHTML+=`
      <div class="history-box">
    <p>${item.name}</p>
    <p style="color:red;fontfont-weight:bold;"> -${item.price}</p>
    <button onclick='Delete(${index})'><i class="fa-solid fa-xmark"></i></button>
  </div>
    `
  });
  TotalPrice();
}
function Delete(index){
  
  tracks.splice(index,1);
  
  localStorage.setItem("tracks",JSON.stringify(tracks));
  ShowItems();
}
function TotalPrice(){
  let total=0;
  tracks.forEach(item =>{
    total +=item.price;
  });
  document.getElementById("Total").innerHTML=total  +  "₹";
}
ShowItems();
TotalPrice();