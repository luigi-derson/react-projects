import React from 'react';
import Header from './Header';
import Action from './Action'
import Options from './Options';
import AddOption from './AddOption';

export default class IndecisionApp extends React.Component {
    state = {
        options: []
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
  
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
        options: prevState.options.filter(option => option !== optionToRemove)
        }))
    };
  
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(option);
    };
  
    handleAddOption = (option) => {
        if (!option) {
        return 'Enter valid value to add option'
        } else if (this.state.options.includes(option)) {
        return 'This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };

  
    componentDidMount() {
        try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);

        if (options) {
            this.setState(() => ({ options }));
        } 
        } catch (e) {}
    }
  
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
        const options = JSON.stringify(this.state.options);
        localStorage.setItem('options', options);
        }
    }
      
    render() {
        const subtitle = 'Put your life in the hand of a computer';
    
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                hasOptions={this.state.options.length > 0} 
                handlePick={this.handlePick} 
                />
                <Options 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions} 
                handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}