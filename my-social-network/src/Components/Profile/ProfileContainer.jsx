import React from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useMatch } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const WithUrlDataContainerComponent = (props) => {
  const match = useMatch('/profile/:userId');
  return <ProfileContainer {...props} match={match} />;
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent); 