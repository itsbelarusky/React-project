import React from 'react';
import Main from "./Main";
import axios from "axios";
import {connect} from "react-redux";
import {setFriendsProfile} from "../../redux/main-reducer";



class MainContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setFriendsProfile(response.data);
        });
    }

    render() {
        return (
            <div>
                <Main {...this.props} />
            </div>
        )
    }
};

let mapStateToProps = (state) => ({
    a: 13
})

export default connect(mapStateToProps, {setFriendsProfile})(MainContainer)