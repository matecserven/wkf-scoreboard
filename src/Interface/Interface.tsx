import styles from "../assets/styles/Interface.module.css";
import { useCrossTabState } from "../storageHook";

export const Interface = () => {
  const { state: redData, setState: setRedData } = useCrossTabState("red", "");
  const { state: blueData, setState: setBlueData } = useCrossTabState(
    "blue",
    ""
  );

  return (
    <div className="container is-max-desktop mt-6">
      <button className="button">
        <a href="/display" target="_blank">
          Open Display
        </a>
      </button>
      <label className="label">Versenyző</label>
      <input
        className="input"
        type="text"
        onChange={(event) => setRedData(event.target.value)}
      />
      <label className="label">Username</label>
      <input
        className="input"
        type="text"
        onChange={(event) => setBlueData(event.target.value)}
      />
    </div>
  );
};
