import React from 'react';
import Main from "./Main";
import {connect} from "react-redux";
import {getFriendsProfile, getStatus, updateStatus} from "../../redux/main-reducer";
import {withRouter} from "react-router-dom";

import {compose} from "redux";



class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 19625
        }
        this.props.getFriendsProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Main {...this.props} main={this.props.main} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}



let mapStateToProps = (state) => ({
    main: state.mainPage.main,
    status: state.mainPage.status
})

export default compose(
    connect(mapStateToProps, {getFriendsProfile, getStatus, updateStatus}),
    withRouter)
(MainContainer)


