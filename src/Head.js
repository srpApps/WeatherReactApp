import React from 'react'

function Head() {
  const cars = ['Ford', 'BMW', 'Audi'];
  
  return (
    <div>

        {
          cars.map((car)=>
           <li>{car}</li>
          )
        }
        
         <table className="table table-bordered">  
            <tr>  
                <th>ID</th>  
                <th>brand</th>  
                <th>Email</th>  
            </tr>   
            <tr >  
                <td>{props.id}</td>  
                <td>{props.brand}</td>  
                <td>{props.email}</td>  
              </tr>  
    
          
         </table>   
    </div>
  )
}

export default Head