import SearchAppBar from '../../components/navbar/navbar';
import './homepage.css';
import UserCard from '../../components/card/card'
import Users from '../../components/notes/notes';


export default function Homepage() {
    return (
    <div className="homepage">
      <div>
        <SearchAppBar />
      </div>
      <div className="usercard">
          <UserCard />
          </div>
          <div className="usercard">
          <UserCard />
          </div>
          <div className="usercard">
          <UserCard />
          </div>
          <div className="usercard">
          <UserCard />
          </div>
          <div className="usercard">
          <UserCard />
          </div>
          <div>
          <Users />
          </div>

      </div>
    );
  }