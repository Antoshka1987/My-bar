const { formBlock } = document.forms;

const regContainer = document.getElementById('formReg');
regContainer.addEventListener('submit', async (e) => {
  e.preventDefault();
  const tweetInputs = Object.fromEntries(new FormData(formBlock));
  // console.log(tweetInputs);
  const response = await fetch ('/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tweetInputs),
  })
  if (response.ok) {
    window.location = '/'
  } else {
    // const data = await response.json();
    console.log('asdasdasd', response)
    alert(response.status, response.statusText)
  }
})
