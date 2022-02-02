import Profile from './components/Profile/Profile';
import StatistikList from './components/Statistic/StatistikList';
import FriendList from '../src/components/FriendList/FriendList';
import TransactionHistoryTable from '../src/components/Transaction/TransactionHistoryTable';
import userData from '../src/data/user.json';
import statistikalData from '../src/data/statistik.json';
import friendsData from '../src/data/friends.json';
import transactionData from '../src/data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <StatistikList title="Upload stats" items={statistikalData} />
      <FriendList friends={friendsData} />
      <TransactionHistoryTable items={transactionData} />
    </div>
  );
}
