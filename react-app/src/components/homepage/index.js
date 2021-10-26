import React from "react";
import UsersList from "../UserList/UsersList";
import css from './homepage.module.css'
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import GetAllGameTables from '../GameTableAll'


function HomePage() {
  //test
  return (
    <>
    <div className={css.homepageuserlist}><UsersList /></div>
    <div className={css.homepagegametables}><GetAllGameTables /></div> 


    <div className={css.homepagefooteroutterdiv}>
    <div className={css.homepagefooterinnerdiv}>
    <div className={css.homepagefooterwords}>Connect with me at:</div>
    <a href="https://github.com/rollingferret" className={css.homepagelogo} style ={{backgroundImage: `url(${github})`}}><div className={css.logodisappear}>github</div></a>
    <a href="https://www.linkedin.com/in/peter-joh-03b69a1a1/" className={css.homepagelogo} style ={{backgroundImage: `url(${linkedin})`}}><div className={css.logodisappear}>linkedin</div></a>
    </div>
    </div>

    </>
  );
}

export default HomePage;
