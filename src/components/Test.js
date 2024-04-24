import React from 'react'

function Test() {

    const combinedArray = array1.map((item1, index) => {
        const item2 = array2[index];
        // Now, you can access properties from both objects and render your component
        return (
          <div key={item1.id}>
            <p>{item1.name}</p>
            <p>{item2.value}</p>
          </div>
        );
      });

  return (
    <div>
      
    </div>
  )
}

export default Test
