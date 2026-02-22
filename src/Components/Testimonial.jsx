import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/Context'
import { motion, AnimatePresence } from 'framer-motion'
import person1 from '../assets/images/person-01.jpeg'
import person2 from '../assets/images/person-02.jpeg'
import person3 from '../assets/images/person-03.jpeg'
import person4 from '../assets/images/person-04.jpeg'
import './Testimonial.css'

const Testimonial = () => {
  const {settings} = useContext(AppContext)
  const testimonials = [
  {
    id: 0,
    name: 'Amanda J.',
    quote: `${settings?.appName} Courier has completely transformed the way we handle logistics. Their speed, reliability, and professionalism give us peace of mind knowing every shipment will arrive safely and on time.`,
    book: 'FASHION RETAILER',
    image: person1,
  },
  {
    id: 1,
    name: 'Robert L.',
    quote: `The ${settings?.appName} team consistently goes above and beyond for our company. They provide quick updates, efficient solutions, and the best customer support we’ve ever experienced in the shipping industry.`,
    book: 'TECHNOLOGY SUPPLIER',
    image: person3,
  },
  {
    id: 2,
    name: 'Nana M.',
    quote: `Working with ${settings?.appName} Courier has been a game changer for us. They understand the importance of deadlines and treat every delivery with care. We now consider them an essential partner in our operations.`,
    book: 'HEALTHCARE SERVICES',
    image: person4,
  },
  {
    id: 3,
    name: 'Aadhya D.',
    quote: `From day one, ${settings?.appName} Courier impressed us with their commitment to excellence. Their team is proactive, flexible, and always ensures our shipments run smoothly no matter the challenge.`,
    book: 'E-COMMERCE BRAND',
    image: person2, // make sure to add this new image import
  },
];




  const [index, setIndex] = useState(0)

useEffect(() => {
  const interval = setInterval(() => {
    let randomIndex = Math.floor(Math.random() * testimonials.length)
    
    // Prevent immediate repeat
    setIndex((prev) => {
      while (randomIndex === prev) {
        randomIndex = Math.floor(Math.random() * testimonials.length)
      }
      return randomIndex
    })
  }, 8000)

  return () => clearInterval(interval)
}, [])

  return <div className='testimonial-section-container'>
    <div className='label'>Testimonials</div>
    <div className='testimonial-section'>
        <AnimatePresence mode='wait'>
          <motion.div
            key={testimonials[index].id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className='quote-box'
          >
            <div className='quote-author-image'>
              <img src={testimonials[index].image} alt="" />
              <div className='quote-author'>{testimonials[index].name}</div>
            </div>
            <div className='quote-text'>{testimonials[index].quote}</div>
            <div className='quote-book'>{testimonials[index].book}</div>
          </motion.div>
        </AnimatePresence>
    </div>
  </div>
}

export default Testimonial