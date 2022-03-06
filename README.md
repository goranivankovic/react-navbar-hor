
<h1>React responsiv navbar with props</h1>



<h4>react-navbar-hor is a React component to build a simple and responsive navbar with hamburger menu to mobile screens</h4>



## Installation

<h5>Use the npm package manager to install react-navbar-hor</h5>

</br>





```bash
npm install react-navbar-hor
```


<h4>And react-icons must be installed</h4>
</br>
```javascript
npm install react-icons --save
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
  I hope you liked and feel happy to enjoy and download.
  

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
          
              /* Change name of Logo   */
              
                logo="LOGO"

              /* Change text-color of Logo   */
              
                logoColor='white'
  
              /* Change text-color of navbar items  required */
              
               text_color='white'
               
              /* Change color of bars that displays on 768px  required */

               barsColor="white"
               
             /* Menu items  names required */ 
             
             /* Routes will be example to ["#mission","#about","#health","#traning","#app","#cntact"] give your div components id names of menuItems*/
             
               
    
                />

           
        </>
    );
}

```

</br>

<h3>Example</h3>


```javascript


import React from 'react'

function About() {
  return (
    <div id='about'>
   
    
   Give your component id of menuItems children  :  /*menuItems={["Mission","About","Health","Traning","App","Contact"]}*/
    

    </div>
  )
}

export default About;


```

</br>

<img align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />https://github.com/goranivankovic/react-navbar-hor

</br>
<img  align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/npm/npm.png" alt="npm" />https://www.npmjs.com/package/react-navbar-hor



<hr></hr>

</br>
## License

[MIT](https://choosealicense.com/licenses/mit/)


</br>

##
[developed](https://github.com/goranivankovic)




