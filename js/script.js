function showRecipe(id){
  var sections= document.getElementsByClassName('recipe-section')
  for(var i=0 ;i<sections.length;i++){
    sections[i].style.display='none'
  }
  document.getElementById(id).style.display='block'
}
