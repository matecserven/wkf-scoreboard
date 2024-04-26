import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styles from "../assets/styles/Display.module.css";
import { useCrossTabState } from "../storageHook";

export const Display = () => {
  const { state: redData } = useCrossTabState("red", "");
  const { state: blueData } = useCrossTabState("blue", "");
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.leftHalf}>
            <div className={styles.name}>{redData}</div>
            <div className={styles.score}>0</div>
            <div className={styles.penalties}>
              <div>1C</div>
              <div>2C</div>
              <div>3C</div>
              <div>HC</div>
              <div>H</div>
            </div>
          </div>
          <div className={styles.rightHalf}>
            <div className={styles.name}>{blueData}</div>
            <div className={styles.score}>0</div>
            <div className={styles.penalties}>
              <div>1C</div>
              <div>2C</div>
              <div>3C</div>
              <div>HC</div>
              <div>H</div>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.preparing}>
            <div>Felkészül</div>
            <div>nev 1</div>
            <div>nev 2</div>
            {!handle.active && (
              <button onClick={handle.enter}>Teljes képernyő</button>
            )}
          </div>
          <div className={styles.countdown}>3:00</div>
        </div>
      </div>
    </FullScreen>
  );
};
