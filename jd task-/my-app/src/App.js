import { useEffect, useState } from 'react';
import './App.css';
import BookList from '../src/components/BookList/BookList';

const menu = [
  {
    name: 'Home'
  },
  {
    name: 'Books',
    selected: true
  },
  {
    name: 'Magazines'
  },
  {
    name: 'E-Books'
  },
  {
    name: 'Account'
  }
]

function App() {

  const [data, setData] = useState([]);
  const [selectedBook, setSelectedBook] = useState(localStorage.getItem('selectedBook'));

  useEffect(() => {
    getBooksList();
  }, [])

  const getBooksList = async () => {
    try {
      const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=HTML5');
      const body = await res.json();
      setData(body?.items || []);
    } catch (error) {
      console.log(error)
    }
  }

  const emitSelectedBook = (book) => {
    if (book === selectedBook) {
      setSelectedBook('')
      localStorage.setItem('selectedBook', '');
    } else {
      setSelectedBook(book);
      localStorage.setItem('selectedBook', book);
    }
  }

  return (
    <>
      <div className='container'>
        <div className='social-media-lg'>
          <img src="/assets/images/twitter.png" />
          <img src="/assets/images/fb.png" />
          <img src="/assets/images/insta.png" />
        </div>
        <h2 className='text-center mb-4 title' data-testid="title"><img src="/assets/images/logo.png" />The Book Store</h2>
        <div className='header mb-4'>
          <nav className="navbar">
            <ul className="nav-links">
              <input type="checkbox" id="checkbox_toggle" />
              <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
              <div className="menu">
                {
                  menu.map(item => (
                    <li className={item?.selected ? 'selected-navLink' : ''} key={item?.name}><a>{item?.name}</a></li>
                  ))
                }
              </div>
            </ul>
          </nav>
        </div>
      </div>
      <div className='container-fluid'>
        <BookList books={data} selectedBook={selectedBook} emitSelectedBook={emitSelectedBook} />
      </div>
      <div className='social-media-sm'>
          <img src="/assets/images/twitter.png" />
          <img src="/assets/images/fb.png" />
          <img src="/assets/images/insta.png" />
        </div>
    </>
  );
}

export default App;