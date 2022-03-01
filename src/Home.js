import React, { Component } from 'react'

import SideBar from 'react-navbar-hor'




export default class Home extends Component {
    render() {
        return (
            <div>
           
           <SideBar
   
   
        bgColor="#0D5DCD"

        logo="LOGO"

        logoColor='white'


        text_color='white'

        barsColor="white"
 
        

          menuItems={["Mission","About","Health","Traning","App","Contact"]}


                
                />



                
            </div>
        )
    }
}
