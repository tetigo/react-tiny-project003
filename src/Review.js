import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const setRandom = () => {
    let random = null
    do {
      random = Math.floor(Math.random() * people.length)
    } while (random === index)
    setIndex(random)
  }
  const checkIndex = (idx) => {
    if (idx >= people.length) return 0
    if (idx < 0) return people.length - 1
    return idx
  }
  const setNext = () => {
    setIndex((idx) => {
      const next = idx + 1
      return checkIndex(next)
    })
    // index + 1 >= people.length ? setIndex(0) : setIndex((idx) => idx + 1)
  }
  const setPrevious = () => {
    setIndex((idx) => {
      const previous = idx - 1
      return checkIndex(previous)
    })
    // index - 1 < 0 ? setIndex(people.length - 1) : setIndex((idx) => idx - 1)
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p>{job}</p>
      <p>{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={setPrevious}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={setNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={setRandom}>
        surprise me
      </button>
    </article>
  )
}

export default Review
