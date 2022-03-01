






import { AiOutlineBars } from 'react-icons/ai'



import React, { useState } from 'react';

import styled, { css } from 'styled-components'



   
const Main = styled.div`

position: fixed;
top: 0%;
left: 0%;
height: 7vh;
width: 100%;
background-color: #0D5DCD;
z-index: 10;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
color: white;
display: flex;
align-items: center;
justify-content: space-between;
cursor: pointer;
font-family: 'Righteous', cursive;


@media only screen and (max-width: 768px) {
  display: none;
}

`

const Logo= styled.div`
width: 15%;
height: 7vh;
display: flex;
align-items: center;
justify-content: space-around;
font-size: 1.4rem;


@media only screen and (max-width: 992px) {
  width: 15%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.25rem;

}


`

const NavItems=styled.div`

width: 55%;
height:7vh;
display: flex;
align-items: center;
justify-content: space-around;
font-size: 1.1rem;
list-style: none;
padding-top: 15px;

li{
  height: 100%;
}

li a{
  color: white;
  text-decoration: none;


}

@media only screen and (max-width: 992px) {

  width: 65%;
  height:7vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  list-style: none;
  padding-top: 15px;


}

`
const Bars =styled.div`

  display: none;

  @media only screen and (max-width: 768px) {
    position: fixed;
    right: 4%;
    top: 1.5%;
    z-index: 15;
    color: white;
    font-size: 1.5rem;
    display: flex;
  }

  @media only screen and (max-width:600px) {

    position: fixed;
    right: 4%;
    top: 2%;
    z-index: 15;
    color: white;
    font-size: 1.3rem;
    display: flex;
  }

`





const Main768 =styled.div`
position: fixed;
top: 0%;
left: 0%;
height: 9vh;
width: 100%;
background-color: #0D5DCD;
z-index: 10;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
color: white;
display: none;
align-items: center;
justify-content: space-between;
cursor: pointer;
font-family: 'Righteous', cursive;

@media only screen and (max-width: 768px) {
       position: fixed;
        top: 0%;
        left: 0%;
        height: 6vh;
        width: 100%;
        background-color: #0D5DCD;
        z-index: 10;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        font-family: 'Righteous', cursive;
        opacity: 0.80;

}

`
const NavItems768 =styled.div`
@media only screen and (max-width: 768px) {


    height: 90%;
    width: 100%;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    list-style: none;


    li a{
      color: white;
      text-decoration: none;
      font-size: 1rem;
  }


}
@media only screen and (max-width:600px) {

  li a{
    color: white;
    text-decoration: none;
    font-size:.9rem;
}
}


`




function SideBar({bgColor, logo , logoColor ,text_color,barsColor,menuItems}) {
  const[laz,setLaz]=useState(false)

  function navBar(){
    if (!laz) {
      const navItems768=document.getElementById('navItems768')
      const main768 =document.getElementById('main768')
      navItems768.style.display='flex'
      main768.style.height='50vh'
      setLaz(true)
      
    }else if(laz){
      const navItems768=document.getElementById('navItems768')
      const main768 =document.getElementById('main768')
      navItems768.style.display='none'
      main768.style.height='7vh'
      setLaz(false)

    }

  }
  function closeNavItems(){

    setTimeout(() => {
          const navItems768=document.getElementById('navItems768')
    const main768 =document.getElementById('main768')
    navItems768.style.display='none'
    main768.style.height='7vh'
    setLaz(false)
    }, 1000);

    
    }



 



    



  return (
    <div>

        <Main style={{background:bgColor}}>

            <Logo style={{color:logoColor}}>{logo}</Logo>

            <NavItems>
             

                {menuItems.map((el)=>
                <li key={el}><a href={`#${el.toLowerCase()}`} style={{color:text_color}}>{el}</a> </li>
                )}
             

            </NavItems>

        </Main>


        <Bars>
                <AiOutlineBars   onClick={navBar} style={{color:barsColor}}/>
    </Bars>
 
            

            <Main768 id="main768" style={{background:bgColor}}>

                

                      <NavItems768 id="navItems768">

                      {menuItems.map((el)=>
                <li key={el}><a href={`#${el.toLowerCase()}`} style={{color:text_color}} onClick={closeNavItems}>{el}</a> </li>
                )}

                    
                   </NavItems768>

           </Main768>



    </div>
  )
}

export default SideBar;