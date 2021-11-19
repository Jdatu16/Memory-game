import "../css/rules.css";

export const Rules = (hidden) => {
  console.log(hidden);
  return (
    <div hidden={!hidden.hidden} className="rules-container">
      <h2 className="rules">RULES</h2>
      <p className="rules-content">
        your goal is to find matching pictures hidden behind blue-ish circles.
        To start the game press "new game" in the right top corner
      </p>
    </div>
  );
};
