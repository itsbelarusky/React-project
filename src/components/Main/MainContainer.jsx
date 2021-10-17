import React from 'react';
import Main from "./Main";
import {connect} from "react-redux";
import {getFriendsProfile} from "../../redux/main-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";


class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getFriendsProfile(userId)
    }

    render() {


        return (
            <div>
                <Main {...this.props} main={this.props.main}/>
            </div>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(MainContainer);

let mapStateToProps = (state) => ({
    main: state.mainPage.main,
})

export default compose(
    connect(mapStateToProps, {getFriendsProfile}),
    withRouter, withAuthRedirect)
(MainContainer)


