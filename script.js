document.querySelector('#courseForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const courseName = document.querySelector('#nameCourse').value;

  const fullName = `${firstName} ${lastName}`;

  localStorage.setItem('fullName', fullName);
  localStorage.setItem('courseName', courseName);

  document.querySelector('#courseInfo').classList.remove('hidden');
});

document.querySelector('#loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  if (username === 'admin' && password === 'admin123') {
    window.location.href = 'admin.html';
  } else {
    document.querySelector('#loginInfo').classList.remove('hidden');
  }
});
