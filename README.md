
<h1>React responsiv navbar with props</h1>



<h4>react-navbar-hor is a React component to build a simple and responsive navbar with hamburger menu to mobile screens</h4>



## Installation

Use the npm package manager to install react-navbar-hor

</br>



```bash
npm install react-navbar-hor
```



  <img src="https://media.giphy.com/media/PmN6BuVy5VIUzA8zJ0/giphy.gif" />
  
  
  
  ## Usage

```javascript
import React from 'react';
import SideBar from 'react-navbar-hor'

function App() {
   
    return (  
        <>
           <SideBar
   
              /* Change background-color of navbar  */
              
               bgColor="#0D5DCD"
          
              /* Change name of Logo  */
              
                logo="LOGO"

              /* Change text color of Logo  */
              
                logoColor='white'
  
              /* Change text-color of navbar items  */
              
               text_color='white'
               
              /* Change color of bars that displays on 768px  */

               barsColor="white"
               
             /* Menu items  */
 
              menuItems={["Mission","About","Health","Traning","App","Contact"]}
    
                />

           
        </>
    );
}


</br>

## License
[MIT](https://choosealicense.com/licenses/mit/)



