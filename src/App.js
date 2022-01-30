import Profile from './components/Profile/Profile';
import StatistikList from './components/Statistic/StatistikList';
import FriendList from '../src/components/FriendList/FriendList';
import TransactionHistoryTable from '../src/components/Transaction/TransactionHistoryTable';
import userData from '../src/components/Profile/user.json';
import statistikalData from '../src/components/Statistic/statistik.json';
import friendsData from '../src/components/FriendList/friends.json';
import transactionData from '../src/components/Transaction/transactions.json';

export default function App() {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      <StatistikList items={statistikalData} />
      <FriendList friends={friendsData} />
      <TransactionHistoryTable items={transactionData} />
    </div>
  );
}
