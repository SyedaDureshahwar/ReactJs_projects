import React from 'react';
import './Reviews.css';
import Cards from './Cards';
const Reviews = () => {
   return (
      <>
         <div className='container' id='reviews'>
            <br /><br /><br />
            <p className='text-center mainheading fs-1'><b >Features</b></p>
            <br /><br /><br />
            <div className='row  text-light'>

              <Cards title="Specific Mescle" description="Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but."></Cards>
              <Cards title="Flex your Muscle" description="Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but."></Cards>
               
              <Cards title="Cardio Excercise" description="Affronting everything discretion men now own did. Still round match we to. Frankness pronounce daughters remainder extensive has but."></Cards>
              

            </div>
         </div>

      </>
   )
}

export default Reviews;