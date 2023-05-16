import { connect } from "react-redux"
import { fetchUsers } from "../redux/user/userActions"
import { useEffect } from "react"

const UserContainer = ({ fetchUsers, userData }) => {
    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading ? <h2>Loading...</h2> : userData.error ? <h2>{userData.error}</h2> : (
        <div>
            <h2>User List</h2>
            {userData.users.map(user => <h3>{user.name}</h3>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)