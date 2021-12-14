import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';
import Imagelink from '../components/Imagelink';
import Rank from '../components/Rank';
import Predictions from '../components/Predictions';
import Loading from '../components/Loading';
import Errorboundary from '../components/Errorboundary';
import Partistl from '../components/Partistl';
import {Talk,redirect} from '../components/Talk';

require('@tensorflow/tfjs-backend-cpu');
require('@tensorflow/tfjs-backend-webgl');
const mobilenet = require('@tensorflow-models/mobilenet');


export default class Homepage extends Component {

    constructor(){
        super();
        this.state = {
          url:"https://media.istockphoto.com/photos/robot-with-education-hud-picture-id966248982?k=20&m=966248982&s=612x612&w=0&h=gq35V9G0kfjKu0ttr90c8p0VraNtqPDkTvqWQ8oXzCk=",
          tmp:"",
          pred:[{className:"first"},{className:"second"},{className:"third"}],
          load: false,
          haserror:false,
          placeholder:"enter url",
          value:"",
          talkstate:true,
        }
      }
     


      talk = () =>{
        console.log(redirect , "redirectksea ");
        if(redirect === "detect"){
        this.setState({url:this.state.tmp,load:"loading"});
        if(this.state.haserror === false){
              (async () => {
                const img = document.getElementById('dt');
                const model = await mobilenet.load();
                this.setState({load:true})
                const predictions = await model.classify(img);                        
                this.setState({pred: predictions});
              })();
            }
          this.setState({value:""});
      }
      else{
        this.setState({talkstate:false})
      }
    }

      imagehandler = (e)=>{
        this.setState({placeholder: "Uploading your image, don't press anything"});
        const reader = new FileReader();
        console.log("filereader loaded");
        reader.onload = ()=>{
        if(reader.readyState === 2){
          this.setState({tmp:reader.result});
          this.setState({placeholder:"Press detect , Image's uploaded"});
          console.log("tmp set ready to go");
    
        }
      }
        reader.readAsDataURL(e.target.files[0]);
    }
    
      typeChange = (event)=>{
        this.setState({tmp:event.target.value});
        this.setState({value:event.target.value});
        console.log(redirect);
      }
    
      press =()=>{
        this.setState({url:this.state.tmp,load:"loading"});
                      if(this.state.haserror === false){
                            (async () => {
                              const img = document.getElementById('dt');
                              const model = await mobilenet.load();
                              this.setState({load:true})
                              const predictions = await model.classify(img);                        
                              this.setState({pred: predictions});
                            })();
                          }
        this.setState({value:""});
      }
    
      therr = ()=>{
        this.setState({haserror:true});
      }
    
      

    render() {
        return (
            <div style={{height:"100vh",overflowY:"scroll"}}>

         <Partistl/>        
        <Navbar ></Navbar>
        <Logo></Logo>
        <Talk talk = {this.talk} talkstate={this.state.talkstate}></Talk>
        <Rank></Rank>
        <Imagelink value={this.state.value} placeHolder={this.state.placeholder} imghandle={this.imagehandler} typechange={this.typeChange} press={this.press}></Imagelink>
        <Errorboundary haserror={this.state.haserror}>
        <img crossOrigin="anonymous" onError={this.therr} id="dt" src={this.state.url}  alt="dtection" className="center imdt mt4"  />
        <Loading make={this.state.load}>
        <Predictions pred={this.state.pred}></Predictions>
        </Loading>
        </Errorboundary>
     
            </div>
        )
    }
}
