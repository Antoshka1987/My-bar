const { formBlock } = document.forms;
const divCard = document.querySelectorAll('.card');
const bar = document.querySelector('#bar');
const filterSelection = document.getElementById('filter_selection');
filterSelection.addEventListener('click', async (e) => {
  if (e.target.dataset.fil) {
    e.preventDefault();
    const tweetInputs = Object.fromEntries(new FormData(formBlock));
    const response = await fetch('/add_coctail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tweetInputs),
    })
    const currCoc = await response.json();
    //======================================
    function trueFilter() {
      let result = ``;
      for (let i = 0; i < currCoc.length; i++) {
        result += `
      <div class="card" id='${currCoc[i].id}'>
        <div value=${currCoc[i].id}>${currCoc[i].name}</div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
        `
      }
      // console.log(result);
      return result;
    }
    //======================================
    console.log(divCard);
    // divCard =  divCard.map(el => el.remove())
    function delDiv() {
      for (let i = 0; i < divCard.length; i++) {
        divCard[i].remove()
      }
    }
    delDiv()
    bar.innerHTML +=
      trueFilter()
  }
})
