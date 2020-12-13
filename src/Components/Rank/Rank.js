import React, { useState } from 'react';

const Rank = () => {
    const [count, setCount] = useState(0)

    return(
        <div>
            <div className='white center f2'>
                {'Abu Zayd Your Rank Is'}
            </div>
            <div className='white center
              f1'>
              <h1>
                {count}
              </h1>
              <h1
               onButtonSubmit={() => setCount(count + 1)}>
              </h1>
            </div>
        </div>
    )
}


export default Rank; 