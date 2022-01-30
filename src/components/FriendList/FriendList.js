import FriendListItem from '../FriendList/FriendListItem';
import PropTypes from 'prop-types';
import s from '../FriendList/FriendlistStyles.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

//========================== propTypes ===================
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
