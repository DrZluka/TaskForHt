import React, {Component} from 'react';
import './UserList.scss';

class UserList extends Component {
    render() {

        const userList = this.props.users;

        return (
            <div>
                {userList.map((e) => <p>{e}</p>)}
            </div>
        );
    }
}

export default UserList;