import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { follow_user, unfollow_user } from "../../store/users";
import css from './follow.module.css'

const FollowButton = ({ userId }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.session.user);
  const [isFollowing, setIsFollowing] = useState(
    currentUser?.following.includes(userId)
  );
  const followUser = () => {
    dispatch(follow_user(userId));
    setIsFollowing((_prevState) => true);
  };

  const unfollowUser = () => {
    dispatch(unfollow_user(userId));
    setIsFollowing((_prevState) => false);
  };

  useEffect(() => {
    if (currentUser) {
      setIsFollowing((_prevState) =>
        currentUser.following.includes(+userId)
      );
    }
  }, [currentUser, userId]);

  return (
    <>
      {isFollowing && (
        <div className={css.follow_button_div1}>
          <div className={css.follow_button1} onClick={unfollowUser}>
            Unfollow
          </div>
        </div>
      )}
      {!isFollowing && (
        <div className={css.follow_button_div2}>
          <div className={css.follow_button2} onClick={followUser}>
            Follow
          </div>
        </div>
      )}
    </>
  );
};

export default FollowButton;
