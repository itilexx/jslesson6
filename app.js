//DZ - 6
const allBooks = (...books) => {
    const withK = books.filter(book => book.includes('к') || book.includes('К'));
    const withoutK = books.filter(book => !book.includes('к') && !book.includes('К'));
    console.log('Книги с буквой к:', withK);
    console.log('Другие книги:', withoutK);
  }

  allBooks('10 негритян', 'Крах и восход', 'Коран', 'Рамео и Джульета');


  