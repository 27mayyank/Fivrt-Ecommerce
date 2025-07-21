function showPage(page) {
    document.getElementById('page1').style.display = page === 1 ? 'grid' : 'none';
    document.getElementById('page2').style.display = page === 2 ? 'grid' : 'none';

    const buttons = document.querySelectorAll('.page-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[page - 1].classList.add('active');
  }

