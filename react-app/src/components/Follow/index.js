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
        <div className={css.follow_button_div}>
          <button className={css.follow_button} onClick={unfollowUser}>
            Unfollow
          </button>
        </div>
      )}
      {!isFollowing && (
        <div className={css.follow_button_div}>
          <button className={css.follow_button} onClick={followUser}>
            Follow
          </button>
        </div>
      )}
    </>
  );
};

export default FollowButton;
