document.addEventListener('DOMContentLoaded', function () {
  const now = new Date();
  const currentDate = document.querySelector('#currentDate');
  currentDate.innerText = `${now.getDate()}.${
    now.getMonth() + 1
  }.${now.getFullYear()}`;

  const fullName = localStorage.getItem('fullName');
  const courseName = localStorage.getItem('courseName');

  document.querySelector('#certName').innerText = fullName;
  document.querySelector('#courseName').innerText = courseName;

  document.querySelector('#btnGenerate').addEventListener('click', function () {
    const certificate = document.querySelector('#certificate');
    certificate.classList.remove('hidden');

    const option = {
      margin: 0,
      filename: 'certyfikat.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: [200, 200], orientation: 'portrait' },
    };

    html2pdf()
      .from(certificate)
      .set(option)
      .save()
      .finally(() => {
        certificate.classList.add('hidden');
      });
  });
});
