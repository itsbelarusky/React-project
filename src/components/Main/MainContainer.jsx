import React from 'react';
import Main from "./Main";
import axios from "axios";
import {connect} from "react-redux";
import {setFriendsProfile} from "../../redux/main-reducer";
import {withRouter} from "react-router-dom";



class MainContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
       if (!userId) {
           userId = 2
       }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setFriendsProfile(response.data);
        });
    }

    render() {
        return (
            <div>
                <Main {...this.props} main={this.props.main} />
            </div>
        )
    }
};

let mapStateToProps = (state) => ({
    main: state.mainPage.main
})

let WithUrlDataContainerComponent = withRouter(MainContainer);

export default connect(mapStateToProps, {setFriendsProfile})(WithUrlDataContainerComponent)