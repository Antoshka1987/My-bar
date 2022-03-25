const buttonDel = document.querySelector('.alcohol');
buttonDel.addEventListener('click', async (e) => {
  if (e.target.dataset.del === 'true') {
    // console.log('<======e.target.id === del=====>');
    e.preventDefault();
    const postId = e.target.closest('[data-id]');
    // console.log(postId.dataset.id);
    const response = await fetch(`/deleteCompPost/${postId.dataset.id}`, { method: 'DELETE' });
    if (response.status === 200) {
      e.target.closest('.card').remove();
    }
  };
})
