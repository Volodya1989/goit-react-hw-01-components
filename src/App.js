import user from "./components/data/user.json";
import data from "./components/data/data.json";
import friends from "./components/data/friends.json";

import Profile from "./components/Profile";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";

function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </div>
  );
}

export default App;
