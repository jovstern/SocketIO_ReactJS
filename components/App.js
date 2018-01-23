import React from 'react';
import io from 'socket.io-client';
import Header from './parts/Header';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            status: 'disconnected',
            title: '',
            member: {},
            audience: []
        }
    }

    componentWillMount() {
        this.socket = io('http://localhost:3000');
        this.socket.on('connect', this.connect.bind(this));
        this.socket.on('disconnect', this.disconnect.bind(this));
        this.socket.on('welcome', this.welcome.bind(this));
        this.socket.on('joined', this.joined.bind(this));
        this.socket.on('audience', this.updateAudience.bind(this));
    }

    updateAudience(newAudience){
        this.setState({audience: newAudience});
    }

    joined(member){
        this.setState({ member: member});
        sessionStorage.member = JSON.stringify(member);
    }

    emit(eventName, payload){
        this.socket.emit(eventName, payload);
    };

    connect() {
        let member = (sessionStorage.member) ? JSON.parse(sessionStorage.member) : null;

        if(member){
            this.emit('join', member);
        }

        this.setState({status: 'connected'})
    };

    disconnect() {
        this.setState({status: 'disconnected'})
    };

    welcome(serverState) {
        this.setState({title: serverState.title})
    };

    render() {
        return (
            <div>
                <Header title={this.state.title} status={this.state.status}/>
                {React.cloneElement(this.props.children, {...this.state, emit:this.emit.bind(this)})}
            </div>
        )
    }
};
