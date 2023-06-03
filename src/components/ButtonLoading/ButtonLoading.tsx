import { CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  height: "15px"
};

function ButtonLoading() {
  return (
    <div className="sweet-loading">
      <PropagateLoader
        color={'#fff'}
        // loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default ButtonLoading;
