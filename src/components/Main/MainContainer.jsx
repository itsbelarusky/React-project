import React from 'react';
import Main from "./Main";
import {connect} from "react-redux";
import {getFriendsProfile} from "../../redux/main-reducer";
import {Redirect, withRouter} from "react-router-dom";




class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
       if (!userId) {
           userId = 2
       }
       this.props.getFriendsProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to='/login'/>

        return (
            <div>
                <Main {...this.props} main={this.props.main} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    main: state.mainPage.main,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(MainContainer);

export default connect(mapStateToProps, {getFriendsProfile})(WithUrlDataContainerComponent)