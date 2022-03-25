const { ediForm } = document.forms;
const buttonEdi = document.querySelector('#content');
const divAlcohol = document.querySelector('.alcohol')



buttonEdi.addEventListener('click', async (e) => {
  if (e.target.dataset.edi) {
    e.preventDefault()
    // console.log(e.target.dataset.edi);
    const postId = e.target.closest('[data-id]');
    const formEdi = Object.fromEntries(new FormData(ediForm));
    const response = await fetch(`/edit_CompPost/${postId.dataset.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formEdi),
    });
    const trueAlcohol = await response.json()
    console.log(trueAlcohol);
    if (response.status === 200) {
      e.target.closest('[data-id]').remove();
      divAlcohol.innerHTML += `
      <div data-id=${trueAlcohol.id} value=${trueAlcohol.id} class="card">
        <h2>${trueAlcohol.name}</h2>
        <div>
          <li>${trueAlcohol['Type_of_alcohol.name']}</li>
          <li>Крепость: ${trueAlcohol.strength}</li>
          <li>Страна: ${trueAlcohol['Company.Country.name']}</li>
          <li>Компания производитель: ${trueAlcohol['Company.title']}</li>
          <li>Описание ${trueAlcohol.info}</li>
        </div>
        <button type="click" data-del="true">DELETE</button>
      </div>
      `
    }
  }
})

/*
const list = document.getElementById("list");

list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;

*/
