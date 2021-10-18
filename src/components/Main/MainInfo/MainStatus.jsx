import React from 'react';

class MainStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEdithMod() {
       this.setState({
           editMode: true
       })
    }

 deActivateEdithMod() {
       this.setState({
           editMode: false
       })
    }


    render() {

        return (
            <div>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activateEdithMod.bind(this)}>{this.props.status}</span>
                </div>}

                {this.state.editMode && <div>
                    <input autoFocus={true} onBlur={this.deActivateEdithMod.bind(this)} value={this.props.status}/>
                </div>}

            </div>
        )
    }


}

export default MainStatus;