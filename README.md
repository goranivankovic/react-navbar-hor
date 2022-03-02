
<h1>React responsiv navbar with props</h1>



<h4>react-navbar-hor is a React component to build a simple and responsive navbar with hamburger menu to mobile screens</h4>



## Installation

<h5>Use the npm package manager to install react-navbar-hor</h5>

</br>





```bash
npm install react-navbar-hor
```

</br>

[<h2>Link with example</h2>](https://goranivankovic.github.io/react-navbar-hor/)


</br>




  <img src="https://media.giphy.com/media/PmN6BuVy5VIUzA8zJ0/giphy.gif" heigt="500" width="500" />
  
  
  <p>
  
  industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch
  
  </p>
  
  
  
  ## Usage

```javascript
import React from 'react';
import SideBar from 'react-navbar-hor'

function App() {
   
    return (  
        <>
           <SideBar
   
              /* Change background-color of navbar  required */
              
               bgColor="#0D5DCD"
          
              /* Change name of Logo  required */
              
                logo="LOGO"

              /* Change text-color of Logo  required */
              
                logoColor='white'
  
              /* Change text-color of navbar items  required */
              
               text_color='white'
               
              /* Change color of bars that displays on 768px  required */

               barsColor="white"
               
             /* Menu items  names required */ 
             
             /* Routes will be example  ["#mission","#about","#health","#traning","#app","#cntact"] give your div components div names of menuItems*/
             
               menuItems={["Mission","About","Health","Traning","App","Contact"]}
    
                />

           
        </>
    );
}

```



## License

[MIT](https://choosealicense.com/licenses/mit/)

<hr></hr>

##
[developed](https://github.com/goranivankovic)



