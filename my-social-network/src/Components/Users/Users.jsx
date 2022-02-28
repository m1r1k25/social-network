import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../../src/assets/images/i.webp';

class Users extends React.Component {
  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    console.log(pagesCount.length)
    return (
      <div>
        <div>
          {pages.map(p => {
            return <span className={this.props.currentPage === p && styles.selectedPage}
              onClick={() => { this.props.setCurrentPage(p) }}>{p}</span>
          })}
        </div>
        {
          this.props.users.map(u => <div key={u.id}>
            <span>
              <div>
                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => {
                    this.props.unfollow(u.id)
                  }}>Unfollow</button>
                  : <button onClick={() => {
                    this.props.follow(u.id)
                  }}>Follow</button>}
              </div>
            </span>
            <span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                  <div>{"u.location.city"}</div>
                </span>
              </span>
            </span>
          </div>)
        }
      </div>
    )
  }
}


export default Users;