import React,{useState} from 'react'
import PageHeader from './PageHeader'
import {motion} from 'framer-motion'
import pic2 from '../assets/JapanCulture/pic2.jpg'
import pic4 from '../assets/JapanCulture/pic4.jpg'
import pic5 from '../assets/JapanCulture/pic5.jpg'
import pic7 from '../assets/JapanCulture/pic7.jpg'
import pic8 from '../assets/JapanCulture/pic8.jpg'


const AboutJapan = () => {
    const [expandedIndex, setExpandedIndex] = useState(null)

    const handleCardClick = (index) => {
      setExpandedIndex(index === expandedIndex ? -1 : index)
    }
  
    const cardVariants = {
      expanded: {
        width: "400px"
      },
      collapsed: {
        width: '200px'
      }
    }
  
    const cardImages = [pic2,pic4,pic5,pic7,pic8]
  
    const cardDescriptions = [
      'A wooden table with a white tablecloth is presented. On the table are several bowls of Asian food, including rice, noodles, sesame seeds, and edamame. Chopsticks are placed beside the bowls.',
      'This is a description, write whatever you need here, this is just text for a test',
      'Japans dress culture blends tradition and modernity. Kimono, the iconic robe, is the national dress, worn for special occasions or summer festivals in the form of the lighter yukata.  For everyday wear, Western clothing like jeans and shirts dominate, chosen for practicality. This reflects the balance between honoring heritage and embracing a globalized world.',
      'This is a description, write whatever you need here, this is just text for a test',
      'This is a description, write whatever you need here, this is just text for a test',
    ]
  return (
    <div>
        <section className='py-16 mt-20 pb-[100px] bg-gradient-to-r from-purple-800 to-indigo-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        
          <h1 className='text-3xl font-extrabold text-white'>Cultures & Life Style</h1>
          <p className='mt-4 text-xl text-gray-300'>In Japan</p>
      </div>
      <div className='mt-12 flex flex-col md:flex-row justify-center items-center gap-5'>
        {[0, 1, 2, 3, 4].map((index) => (
            <motion.div
            key={index}
            className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded': ''}`}
            variants={cardVariants}
            initial="collapsed"
            animate={index === expandedIndex ? 'expanded': 'collapsed'}
            transition={{duration: 0.3}}
            onClick={() => handleCardClick(index)}
            style={{
                            backgroundImage: `url(${cardImages[index]})`,

            }}
          >
              <div className='card-content h-full flex flex-col justify-end'>
                  <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center'>
                    <h2 className='text-xl font-semibold text-white text-center'> Part of Culture {index + 1}</h2>
                    {index === expandedIndex && (
                      <p className='mt-2 text-gray-300 text-center'>{cardDescriptions[index]} </p>
                    )

                    }
                  </div>
              </div>
          </motion.div>
        ))}
      </div>
   </section>

      
    </div>
  )
}

export default AboutJapan
