import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status // режим редактиварония 
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    }) 
  }

  deActivateEditMode = () => {
    this.setState({
      editMode: false
    }) 
    this.props.updateStatus(this.state.status);
  }
  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  }

  render() {
      return (
        <div>
          {!this.state.editMode && 
            <div>
              <span onDoubleClick={ this.activateEditMode }>{this.props.status || "-------"}</span>
            </div>
          }
          {this.state.editMode && 
            <div>
              <input type="text" onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deActivateEditMode } value={this.state.status} placeholder='введите значение'/>
            </div>
          }
        </div>
    )
  }
}

export default ProfileStatus;