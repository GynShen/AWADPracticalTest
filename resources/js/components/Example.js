import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

export default class Example extends Component {
    constructor() {
        super();
        this.state = {
            // Zone1: This to define variables
            newParticipantModal: false,
            newParticipantData: { name: "", email: "", password: "" },
        };
    }
    // Zone2: This to define the methods
    toggleNewParticipantModal() {
        this.setState({ 
            newParticipantModal: !this.state.newParticipantModal,
            newParticipantData: { name: "", email: "", password: "" }
         });
    }

    addParticipant() {
        axios
            .post("http://localhost:8000/api/participant", this.state.newParticipantData)
            .then((response) => {
                let { participants } = this.state;
                this.setState({
                    newParticipantModal: false, //Hide modal after create Participant
                    newParticipantData: { name: "", email: "", password: "" }, //Clear modal input
                });
            });
    }

    render() {
        // Zone3: This to define visual element
        return (
            <div>
                <Button
                    color="primary"
                    outline
                    onClick={this.toggleNewParticipantModal.bind(this)}
                >
                    Add Participants
                </Button>
                <Modal
                    isOpen={this.state.newParticipantModal}
                    toggle={this.toggleNewParticipantModal.bind(this)}
                >
                    <ModalHeader toggle={this.toggleNewParticipantModal.bind(this)}>
                        Add Participants 2205781
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input
                                id="name"
                                value={this.state.newParticipantData.name}
                                onChange={(e) => {
                                    let { newParticipantData } = this.state; //get the state
                                    newParticipantData.name = e.target.value; //update the state
                                    this.setState({ newParticipantData }); //save the state
                                }}
                            ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                id="email"
                                value={this.state.newParticipantData.email}
                                onChange={(e) => {
                                    let { newParticipantData } = this.state;
                                    newParticipantData.email = e.target.value;
                                    this.setState({ newParticipantData });
                                }}
                            ></Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={this.state.newParticipantData.password}
                                onChange={(e) => {
                                    let { newParticipantData } = this.state;
                                    newParticipantData.password = e.target.value;
                                    this.setState({ newParticipantData });
                                }}
                            ></Input>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.addParticipant.bind(this)}>Add</Button>
                        <Button color="secondary" onClick={this.toggleNewParticipantModal.bind(this)}> Cancel </Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

if (document.getElementById("example")) {
    ReactDOM.render(<Example />, document.getElementById("example"));
}
