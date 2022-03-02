
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

function App(props) {
   
    return (  
        <>
           <SideBar
   
   
               bgColor="#0D5DCD"

                logo="LOGO"

                logoColor='white'
  

               text_color='white'

               barsColor="white"
 
              menuItems={["Mission","About","Health","Traning","App","Contact"]}
    
                />

           
        </>
    );
}



