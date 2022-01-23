import React from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import WarningIcon from "@mui/icons-material/Warning";
import { Button } from "@mui/material";

const ResultModal = ({
  resultModalState,
  setDisplayResultModal,
  setVerificationCode,
  setRegNumber,
  setFlipHtml,
  setOpen,
}) => {
  const failedVerification = () => {
    setVerificationCode("");
    setDisplayResultModal(false);
    setRegNumber("");
    setFlipHtml(false);
  };

  const successfulVerification = () => {
    setDisplayResultModal(false);
    setVerificationCode("");
    setRegNumber("");
    setFlipHtml(false);
    setOpen(false);
  };

  return (
    <div
      className="absolute top-1/2 left-1/2 shadow-md w-3/4 bg-transparent border-1 border-gray-500"
      style={{ transform: `translate(-50%,-50%)` }}
    >
      <div className="p-2 rounded-t-sm text-black flex flex-row items-center bg-[#fafbfa] ">
        {resultModalState && (
          <>
            <CheckBoxIcon style={{ color: "#f6bf53" }} />
            <span className="mx-2 text-[#f6bf53] font-bold">Success</span>
          </>
        )}
        {!resultModalState && (
          <>
            <WarningIcon style={{ color: "#ff0000" }} />
            <span className="mx-2 text-[#ff0000] font-bold">Error</span>
          </>
        )}
      </div>
      <div className="rounded-b-sm p-2 flex flex-col items-center content-center bg-[#e0e4dd] ">
        <div className="text-black text-center my-3">
          {resultModalState
            ? "You have successfully registered"
            : "Verification code does not match"}
        </div>
        {resultModalState && (
          <Button
            className="bg-[#f6bf53] text-white whitespace-nowrap mx-auto my-1"
            onClick={() => successfulVerification()}
          >
            <span className="truncate font-bold">Enter</span>
          </Button>
        )}
        {!resultModalState && (
          <Button
            className="bg-[#ff0000] text-white whitespace-nowrap mx-auto my-1"
            onClick={() => failedVerification()}
          >
            <span className="truncate font-bold">Back</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ResultModal;
