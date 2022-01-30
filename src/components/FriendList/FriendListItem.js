import PropTypes from 'prop-types';
import s from '../FriendList/FriendlistStyles.module.css';

export default function FriendListItem(props) {
  const { name, avatar, isOnline } = props;
  return (
    <li className={isOnline ? s.itemOnline : s.itemOfline}>
      <span className={s.status}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
//========================== propTypes ===================
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
