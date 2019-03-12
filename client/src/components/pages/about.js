import React,{Component} from 'react'
import { Form, Input, Button, Modal, TextArea, Grid, card , Image , Icon } from 'semantic-ui-react';

class About extends Component {
    constructor(){
     super()
     this.state = {
        firstName:         "",
        lastName:          "",
        portfoliofName:    "",
        bio     :          "",
        imageUrl:          "",
        experience:        "",
        skills:            "",
        projectsOutlines:  ""
     }
    }

    firstName = (e)=>{
        this.setState({
            firstName: e.target.value
        })
    }

    lastName = (e)=>{
        this.setState({
            lastName: e.target.value
        })
    }

    bio = (e)=>{
        this.setState({
            bio: e.target.value
        })
    }

    experience = (e)=>{
        this.setState({
            experience: e.target.value
        })
    }
    skills = (e)=>{
        this.setState({
            skills: e.target.value
        })
    }
    projectsOutlines = (e)=>{
        this.setState({
            projectsOutlines: e.target.value
        })
    }

    imageUrl = ()=>{
      //window.open.value
        alert( window.URL)
        //document.body.appendChild(x);
   

    }    
   
    genratePortofolio = (e)=>{
        e.preventDefault()
                alert("starting....");
    
            
        
      

         let aboutOb = 
         {
          firstName:         this.state.firstName,
          lastName:          this.state.lastName,
          portfoliofName:    this.state.firstName + "- Portoflio", 
          bio:               this.state.bio,
          experience:        this.state.experience,
          skills :           this.state.skills,
          projectsOutlines:  this.state.projectsOutlines
        //imageUrl:          this.state.imageUrl
         }
    
        fetch("http://localhost:3001/about", {
          method: 'POST',
          headers: 
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
             body: JSON.stringify(aboutOb)
          })   
        console.log(aboutOb)

    }
    render(){ 
        return (
<div class="ui container"> 

            <div class="ui clearing segment">
                <h3 class="ui center aligned blue header"> About Me </h3>
                </div>
                <div class="ui grid">
                <div class="row">
                    <h3 class="ui center aligned blue header">
                                Let me tell you a few things...
                    </h3> 
                </div>
            </div>
           
            <div class="ui grid">
           
              <div class="row">
                <div class="three wide column">
                 <div class="ui card">
                  <div class="image">
                 
                        <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" />
                    <div class="ui small basic icon buttons">
                        <button class="ui button" onClick={this.imageUrl}><i class="upload icon "> ></i></button>
                        

                    </div>
                    {/* <input type="file" id="myFile" />  */}
                    <input id="file-input" type="file" name="name"  />
                   </div>
                 </div>
                </div>
                <div class="ten wide column">
                    {/* <p><h1 class="ui big"> Mohammed Farahat </h1></p> */}
                    <div class="ui form">
                   <div class="field">
                     <label>Enter Your Name</label>
                    <input type="text" placeholder="First Name" onChange={this.firstName} />
                    <input type="text" placeholder="Last Name"  onChange={this.lastName}/>
                    </div>
                    </div>
                 <div class="ui small basic icon buttons">
                        <button class="ui button"><i class="edit icon"></i></button>
                 </div>
                </div>

                <div class="three wide column">
                   
                </div>
             </div>
            
             <div class="row">
                <div class="three wide column">
                </div>
                <div class="ten wide column">           
                  <div class="ui form">
                    <div class="field">
                      <label>BIO</label>
                        <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Officiis laborum. Officia qui natus inventore 
                            moll itia! Eos corrupti assumenda debitis provident, 
                            reiciendis vero quo! Excepturi ab magni nam dolore 
                            consequuntur ad." onChange={this.bio}></textarea>
                    </div>
                   </div>
                    <button class="ui button"><i class="edit icon"></i></button>
                </div>        
            </div>
      
            <div class="row">
                <div class="tow wide column"></div>
                 <div class="four wide column">
                  <div class="ui form">
                   <div class="field">
                     <label>Experience</label>
                      <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                   Officiis laborum. Officia qui natus inventore 
                                                   moll itia! Eos corrupti assumenda debitis provident, 
                                                   reiciendis vero quo! Excepturi ab magni nam dolore 
                                                   consequuntur ad." onChange={this.experience} ></textarea>
                    </div>
                   </div>
                    <button class="ui button"><i class="edit icon"></i></button>
            </div>
            <div class="one wide column"></div>
              <div class="four wide column">
               <div class="ui form">
                <div class="field">
                 <label>Skills</label>
                  <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                   Officiis laborum. Officia qui natus inventore 
                                                   moll itia! Eos corrupti assumenda debitis provident, 
                                                   reiciendis vero quo! Excepturi ab magni nam dolore 
                                                   consequuntur ad." onChange={this.skills}></textarea>
                </div>
               </div>
                   <button class="ui button"><i class="edit icon"></i></button>
            </div>
             <div class="one wide column"></div>
              <div class="four wide column">
               <div class="ui form">
                <div class="field">
                 <label>Projects outlines</label>
                  <textarea placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                   Officiis laborum. Officia qui natus inventore 
                                                   moll itia! Eos corrupti assumenda debitis provident, 
                                                   reiciendis vero quo! Excepturi ab magni nam dolore 
                                                   consequuntur ad." onChange={this.projectsOutlines} ></textarea>
                </div>
               </div>
                 <button class="ui button"><i class="edit icon"></i></button>
              </div>
              </div>
         
              </div>
        <div class="ui clearing segment">
        {/* <form class="ui massive form" onSubmit={this.genratePortofolio}> */}
            <button class="ui primary fluid button" onClick={this.genratePortofolio}> Genrate </button>
           {/* </form> */}
            <h3 class="ui center aligned blue header">CopyRight@2019 </h3>
        </div> 

   
         
</div>

        )
    }
}
export default About;