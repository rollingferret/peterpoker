import React from "react";
import UsersList from "../UserList/UsersList";
import css from './homepage.module.css'
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";


function HomePage() {
  //test
  return (
    <>
    <div>test</div>
    <UsersList />

    <div className={css.homepagefooteroutterdiv}>
    <div className={css.homepagefooterinnerdiv}>
    <div className={css.homepagefooterwords}>Connect with me at:</div>
    <a href="https://github.com/rollingferret" className={css.homepagegithublogo} style ={{backgroundImage: `url(${github})`}}></a>
    <a href="https://github.com/rollingferret" className={css.homepagegithublogo} style ={{backgroundImage: `url(${linkedin})`}}></a>
    </div>
    </div>

    </>
  );
}

export default HomePage;
