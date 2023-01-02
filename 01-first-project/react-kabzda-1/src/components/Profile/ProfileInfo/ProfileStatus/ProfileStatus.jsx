import React from 'react';

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode ? (
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                ) : (
                    <div>
                        <input autoFocus={true} value={this.props.status} onBlur={this.activateEditMode}/>
                    </div>
                )}
            </div>
        )
    }
}

export default ProfileStatus;