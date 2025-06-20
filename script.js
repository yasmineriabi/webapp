function myFunction1() {
  const btn = document.getElementById('runawayBtn');
  const otherBtn = document.getElementById('stayBtn');

  const maxX = window.innerWidth - btn.offsetWidth;
  const maxY = window.innerHeight - btn.offsetHeight;

  let newX, newY;
  let tries = 0;
  const maxTries = 100;

  do {
   
    newX = Math.random() * maxX;
    newY = Math.random() * maxY;

   
    const futureRect = {
      left: newX,
      right: newX + btn.offsetWidth,
      top: newY,
      bottom: newY + btn.offsetHeight
    };

    
    const otherRect = otherBtn.getBoundingClientRect();

    const isOverlapping = !(
      futureRect.right < otherRect.left ||
      futureRect.left > otherRect.right ||
      futureRect.bottom < otherRect.top ||
      futureRect.top > otherRect.bottom
    );

    if (!isOverlapping) break;
  } while (++tries < maxTries);

  
  btn.style.position = 'absolute';
  btn.style.left = `${newX}px`;
  btn.style.top = `${newY}px`;
}


function myFunction2() {
 const btn = document.getElementById('stayBtn');
  btn.style.backgroundColor = '#ff7f7f';

}
function myFunction3() {
  const btn = document.getElementById('stayBtn');
  btn.style.backgroundColor = ''; 
}

function myFunction4() {
document.body.innerHTML = '<h1 style="color:rgb(11, 11, 11);">GOT YOU</h1>';
}


