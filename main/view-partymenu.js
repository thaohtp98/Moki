// Get the elements with class="column"
var elements = document.getElementsByClassName('col-grid-4');
// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.gridTemplateColumns = 'repeat(1, 100%)'; 
    var elems = document.getElementsByClassName('card_blog');
      for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'grid';
        elems[i].style.gridTemplateColumns = 'repeat(2, 50%)';
        elems[i].children[0].style.height = 'auto';
      }
    

  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.gridTemplateColumns ='repeat(2, 47%)';
    var elems = document.getElementsByClassName('card_blog');
      for (var i=0;i<elems.length;i+=1){
        elems[i].style.display = 'block';

        elems[i].children[0].style.height = '200px';
        
      }
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById('btnContainer');
var btns = container.getElementsByClassName('btn_view');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    var current = document.getElementsByClassName('active_btn');
    current[0].className = current[0].className.replace(' active_btn', '');
    this.className += ' active_btn';
  });
}