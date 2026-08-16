function addPost() {
  const username = document.getElementById('username').value;
  const postText = document.getElementById('postText').value;
  
  if(username === '' || postText === '') {
    alert('Enter your Mafia Name and a post!');
    return;
  }
  
  const feed = document.getElementById('feed');
  const newPost = document.createElement('div');
  newPost.classList.add('post');
  newPost.innerHTML = `<strong>${username}</strong>: ${postText}`;
  
  feed.prepend(newPost);
  
  document.getElementById('username').value = '';
  document.getElementById('postText').value = '';
}
