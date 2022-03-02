
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
  Responsive navbar with props.</br>
  Technologies use: react, styled-components, react-hooks, react-icons, css.</br>
  Don't waste your time building your own navbar, just simple downloaded with npm.</br>
  Required: Node.js, NPM, React.</br>
  

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
             
             /* Routes will be example to ["#mission","#about","#health","#traning","#app","#cntact"] give your div components id names of menuItems*/
             
               =
    
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


</br>


<h4>Example</h4>


```


import React from 'react'

function About() {
  return (
    <div id='about'>
   
    
   Give your component id of menuItems children  :  /*menuItems={["Mission","About","Health","Traning","App","Contact"]}*/
    

    </div>
  )
}

export default Abou


```



