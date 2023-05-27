import user from "./components/data/user.json";
import data from "./components/data/data.json";

import Profile from "./components/Profile";
import Statistics from "./components/Statistics";

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
    </div>
  );
}

export default App;
