// import React from 'react';
//
// class MainStatus extends React.Component {
//
//
//     state = {
//         editMode: false,
//         status: this.props.status
//     }
//
//     activateEdithMod = (props) => {
//         this.setState({
//             editMode: true
//         })
//     }
//
//     deActivateEdithMod = () => {
//         this.setState({
//             editMode: false
//         })
//         this.props.updateStatus(this.state.status)
//     }
//
//     onStatusChange = (e) => {
//         this.setState({
//             status: e.currentTarget.value
//         })
//
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.status !== this.props.status) {
//             this.setState({
//                 status: this.props.status
//             })
//         }
//     }
//
//
//     render() {
//
//         return (
//             <div>
//                 {!this.state.editMode && <div>
//                     <span onDoubleClick={this.activateEdithMod}>{this.props.status || "No status"}</span>
//                 </div>}
//
//                 {this.state.editMode && <div>
//                     <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deActivateEdithMod}
//                            value={this.state.status}/>
//                 </div>}
//
//             </div>
//         )
//     }
//
//
// }
//
// export default MainStatus;