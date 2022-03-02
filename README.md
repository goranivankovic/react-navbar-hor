
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
import Navbar from 'react-navbar-hor'

function App(props) {
    const links = [{
        "href": "/#",
        "label": "Home",
        "background": false,
    },
    {
        "href": "/login",
        "label": "Login",
        "background": false,
    },
    {
        "href": "/register",
        "label": "Register",
        "background": true,
    }
    ]


    return (
        <>
            <Navbar
                logo='/your-logo-url.png'
                logoHref='/where-logo-click-redirect'
                links={links}

            />
        </>
    );
}



