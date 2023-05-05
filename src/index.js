import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
const firstBook={
  title:'The Origin Of Species',
  author: 'Charles Darwin',
  img: 'http://d28hgpri8am2if.cloudfront.net/book_images/cvr9781416561477_9781416561477_hr.jpg'
}

const secBook = {
  title: 'Sherlock Holmes',
  author: 'Arthur Conan Doyle',
  img: 'https://images.thenile.io/r1000/9780890090572.jpg'
}

function Booklist() {
  return (
    <div>
      <section className='booklist'>
        <Book
          img={firstBook.img}
          title={firstBook.title}
          author={firstBook.author}
        >
           <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum repellendus quidem. Quidem dolorum atque quod rerum inventore in delectus voluptatibus error aliquid sequi, at adipisci officia. Modi, dolorem vel!
           </p>
        </Book>
        <Book
          img={secBook.img}
          title={secBook.title}
          author={secBook.author}
        />
      </section>
    </div>
  )
}


const Book = (props) => {

  const {img, title, author, children}=props
  return (
    <div>
      <article className='book'>
        <img src={img} alt='' style={{ width: '250px', height: '400px' }} />
        <h1>{title}</h1>
        <h4>{author}</h4>
        <h6>{children}</h6>
      </article>
    </div>
  )
}
/*
const Image = () => {
  return (
    <img
      src='http://d28hgpri8am2if.cloudfront.net/book_images/cvr9781416561477_9781416561477_hr.jpg'
      alt=''
      style={{ width: '250px', height: '400px' }}
    />
  )
  }

const Title = () => {
  const title = 'The Origin Of Species'
  return(
    <div>
    <h1>
      {title}
    </h1>
  </div>
  )
}


const Author = () => {
  return (
    <div>
      <h4 style={{color: '#677d98',fontSize:'0.75rem', marginTop:'0.25rem'}}>Charles Darwin</h4>
    </div>
  )
}
*/


ReactDOM.render(<Booklist />, document.getElementById('root'))
