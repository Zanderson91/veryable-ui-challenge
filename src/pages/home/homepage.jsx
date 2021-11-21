import SearchAppBar from '../../components/navbar/navbar';
import './homepage.css';
import Notes from '../../components/notes/notes';


export default function Homepage() {
    return (
    <div className="homepage">
      <div>
        <SearchAppBar />
      </div>
      <div className="usercard">
          <Notes />
          </div>

      </div>
    );
  }