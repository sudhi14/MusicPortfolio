import React , {Component} from 'react'
import {Row, Form, Button,Col} from 'react-bootstrap'
import firebaseBackEnd from '../../../DataProvider/StoreData/Firebase';
import 'firebase/firestore';
import styles from './Contact.module.css'
//import { AlertList, Alert, AlertContainer }  from "react-bs-notifier";
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//import file from '../../../assets/Audio/Bangkok Project samp Rough 2.mp3'



class Contact extends Component {

    constructor() {
        super();
        this.state = {
                name : "",
                email : "",
                phNo : "",
                social : "",
                message : "",
                audio : ""
        }
    }

    clearFields() {
        this.setState({
            name : "",
            email : "",
            phNo : "",
            social : "",
            message : "",
            audio:""
        })
    }


    onSubmitChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        });
    }

    storeIntoFireStore (e) {
        const db = firebaseBackEnd().firestore();
       db.collection("MusicContact").add({
            Name : this.state.name,
            EmailID : this.state.email,
            PhoneNo : this.state.phNo,
            social : this.state.social,
            Message : this.state.message,
       })
        // db.collection("MusicContact")
        // .doc("New123")
        // .set({
        //     EmailID : this.state.mockData.email,
        //     Message : this.state.mockData.message,
        //     Name : this.state.mockData.name,
        //     PhoneNo : this.state.mockData.phNo,
        //     social : this.state.mockData.social
        //  })
         .then(()=>{
             console.log("success");
             this.clearFields();
             
         })
         .catch((err)=>{
            console.log("ERROR:" , err)
         })

    }

    componentDidMount() {
       // console.log(firebaseBackEnd ? firebaseBackEnd.firebase_: 'Not Loaded')
        // const db = firebaseBackEnd.firebase_.firestore.settings({ timestampsInSnapshots : true})
       //const db = firebaseBackEnd().firestore();
        // db.collection("MusicContact")
        // .get()
        // .then((query) => {
        //     query.docs.map((doc) => {
        //         console.log(doc.data());
        //     })
        // }) 
        // db.collection("MusicContact")
        // .doc("New")
        // .set({
        //     EmailID : this.state.mockData.EmailID,
        //     Message : this.state.mockData.Message,
        //     Name : this.state.mockData.Name,
        //     PhoneNo : this.state.mockData.PhoneNo,
        //     authorName : this.state.mockData.authorName
        //  })
        //  .then(()=>{
        //      console.log("success");
        //  })
        //  .catch((err)=>{
        //     console.log(err)
        //  })
    }
   

    render() {
        
        
        return (
            
            <Row style = {{margin : '0', width : '100%'}} >

                <Col xs = {4}>
                {/* <Fade in={false}>   
                    <Alert varient="sucess" headline="Thank you">
                        Will get in touch with you soon. 
                    </Alert>
                </Fade> */}
                </Col>
                <Col xs = {4} style = {{marginBottom : "30px"}}>
                <Form onSubmit = {(e) => {
                    e.preventDefault();
                    this.storeIntoFireStore(e)
                    }
                }>
                    <Form.Label style = {{color:"black" ,textStroke : "white",fontWeight : 'bold'}}>Contact Me:</Form.Label> 
                    <Form.Group size = "lg" controlId="Name">
                        <Form.Control type="text" name = "name" placeholder="Name*" value = {this.state.name} required onChange={(e) => this.onSubmitChange(e)} />
                    </Form.Group>

                    <Form.Group controlId="Email Address">
                        <Form.Control type="email" name = "email" placeholder="Email Address*" value = {this.state.email} required onChange={(e) => this.onSubmitChange(e)} />
                    </Form.Group>
            
                    <Form.Group controlId="Phone Number">
                        <Form.Control type="text" name= "phNo" placeholder="Phone Number*" value = {this.state.phNo}  required onChange={(e) => this.onSubmitChange(e)}/>
                    </Form.Group>

                    <Form.Group controlId="Social Network Link">
                        <Form.Control type="text" name = "social" placeholder="http://Social Network" value = {this.state.social} onChange={(e) => this.onSubmitChange(e)}/>
                    </Form.Group>


                    <Form.Group controlId="Message">
                        <Form.Control as = "textarea" name = "message" placeholder="Message*" required value = {this.state.message} onChange={(e) => this.onSubmitChange(e)}/>
                    </Form.Group>

                    <Form.Group align = "center" controlId="Submit">
                        <Button  variant="primary" type="submit" size="md" block >Submit</Button>
                    </Form.Group>
                    </Form>
                </Col>
            </Row>
        );
    }
    
}

export default Contact;