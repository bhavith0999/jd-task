import React from 'react'
import './BookList.css'

const BookList = ({ books, selectedBook, emitSelectedBook }) => {
    return (
        <div className='content'>
            <div className='book-list'>
                {
                    books.map(book => (
                        <div data-testid="book" onClick={() => emitSelectedBook(book?.id)} className={`blog-card ${selectedBook == book?.id ? 'is-selected' : ''}`} key={book?.id}>
                            <div className="meta">
                                <div className="photo" style={{ backgroundImage: `url(${book?.volumeInfo?.imageLinks?.thumbnail})` }}></div>
                            </div>
                            <div className="description">
                                <p className='author'>{book?.volumeInfo?.title}</p>
                                <p className='date'>{book?.volumeInfo?.authors?.join(', ')}</p>
                                <p className='date'><span>Pages:</span> {book?.volumeInfo?.pageCount}</p>
                                <p className='desc'>{book?.volumeInfo?.description.length > 140 ? book?.volumeInfo?.description.slice(0, 140) : book?.volumeInfo?.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='featured'>
                <div className='featured-content '>

                    <h2 className='mb-4'>Featured</h2>
                    {books?.reverse()?.slice(0, 2)?.map(book => (
                        <div onClick={() => emitSelectedBook(book?.id)} className={`featured-blog-card ${selectedBook == book?.id ? 'is-selected' : ''}`} key={book?.id}>
                            <div className='description'>
                                <p className='author'>{book?.volumeInfo?.title}</p>
                                <p className='date'>{book?.volumeInfo?.authors?.join(', ')}</p>
                                <p className='date'><span>Pages:</span> {book?.volumeInfo?.pageCount}</p>
                                <p className='desc'>{book?.volumeInfo?.description.length > 140 ? book?.volumeInfo?.description.slice(0, 140) : book?.volumeInfo?.description}</p>
                            </div>
                            <div className='img'>
                                <img src={book?.volumeInfo?.imageLinks?.thumbnail} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default BookList