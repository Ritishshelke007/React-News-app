import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Grid } from "react-loader-spinner";

const Loader = ({ show }) => {
  return (
    show && (
      <>
        <div className="grid grid-cols-1 w-full place-items-center justify-center h-screen">
          <Grid
            height="80"
            width="80"
            color="#1E293B"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </>
    )
  );
};

export default Loader;
