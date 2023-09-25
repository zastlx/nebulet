import SideBar from "../../components/SideBar";
import Background from "../../components/Background";
import TopRightProfile from "../../components/TopRightProfile";
import styles from "./index.module.css";
import userStore from "../../stores/UserStore";
import withAuth from "../../components/HOCs/withAuth";
import withUserStore from "../../components/HOCs/WithUserStore";
import { useState } from "react";

function Credits() {
  const [selectedRole, setSelectedRole] = useState("Owner");

  let credits = {
    "Owner": [{
        name: "zastix",
        desc: "A creator of Nebulet."
    }, {
        name: "Death",
        desc: "A creator of Nebulet."
    }, {
        name: "penguinpowers",
        desc: "Hosts Nebulet."
    }],
    "Artist": [{
        name: "Kipley",
        desc: "Creates art."
    }, {
        name: "Unblooked",
        desc: "Creates art."
    }],
    "Admin": [{
        name: "ac",
        desc: "a good friend time through time <3"
    }],
    "Mod": [],
    "Helper": [],
    "Tester": [{
        name: "Xotic",
        desc: "A very early supporter and tester of Nebulet."
    }, {
        name: "monkxy",
        desc: "A very early supporter and tester of Nebulet."
    }],
    "Honor": [{
        name: "Ben Stewart",
        desc: "Our overarching inspiration and the base for Nebulet."
    }]
  };

  function display(role) {
    
  }

  return (
    <div>
      <title>Credits | Nebulet</title>

      <SideBar />
      <Background />
      <TopRightProfile
        avatar={userStore.getLocalUser().avatar}
        username={userStore.getLocalUser().username}
      />

      <div className={styles.contentContainer}>
        <div className={styles.pageTitle}>Credits</div>
        <div className={styles.creditsContainer}>
          <div className={styles.roleSelector}>
            <div className={styles.role} style={{ color: "#8b09d6", textShadow: selectedRole === "Owner" ? "0 0 15px rgb(255 255 255 / 30%)" : ""  }} onClick={() => setSelectedRole("Owner")} role="button">Owner</div>
            <div className={styles.role} style={{ color: "#c026b5", textShadow: selectedRole === "Admin" ? "0 0 15px rgb(255 255 255 / 30%)" : "" }} onClick={() => setSelectedRole("Admin")} role="button">Admin</div>
            <div className={styles.role} style={{ color: "#70cff1", textShadow: selectedRole === "Artist" ? "0 0 15px rgb(255 255 255 / 30%)" : "" }} onClick={() => setSelectedRole("Artist")} role="button">Artist</div>
            <div className={styles.role} style={{ color: "#6959df", textShadow: selectedRole === "Mod" ? "0 0 15px rgb(255 255 255 / 30%)" : "" }} onClick={() => setSelectedRole("Mod")} role="button">Mod</div>
            <div className={styles.role} style={{ color: "#e9d206", textShadow: selectedRole === "Helper" ? "0 0 15px rgb(255 255 255 / 30%)" : "" }} onClick={() => setSelectedRole("Helper")} role="button">Helper</div>
            <div className={styles.role} style={{ color: "#1bb8c2", textShadow: selectedRole === "Tester" ? "0 0 15px rgb(255 255 255 / 30%)" : "" }} onClick={() => setSelectedRole("Artist")} role="button">Tester</div>
            <div className={styles.role} style={{ color: "#4bc22e", textShadow: selectedRole === "Honor" ? "0 0 15px rgb(255 255 255 / 30%)" : "" }} onClick={() => setSelectedRole("Honor")} role="button">Honorable Mentions</div>
          </div>

          <hr className={styles.divider}></hr>
          { (!credits[selectedRole].length) ? 
              <div className={styles.creditError}>There are no {selectedRole}s credited.</div> :
              <div className={styles.creditsBody}>{credits[selectedRole].map(user => (
                <div className={styles.credit} key={user.name}>
                  <div className={styles.creditUsername}>{user.name}</div>
                  <div className={styles.creditDesc}>{user.desc}</div>
                </div>
              ))}</div>
          }
        </div>
      </div>
    </div>
  );
}

export default withAuth(withUserStore(Credits));