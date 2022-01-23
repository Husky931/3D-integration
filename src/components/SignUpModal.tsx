import React, { useState } from "react";
import { useShowSignUp } from "../states";
import { Button, Dialog } from "@mui/material";
import InputUnstyled from "@mui/core/InputUnstyled";
import { styled } from "@mui/system";
import { Close } from "@mui/icons-material";
// import { useSpring, animated } from "react-spring";
import VerificationInput from "react-verification-input";
import { setTelephoneNumber } from "../states";
import ResultModal from "./ResultModal";

const InputElementPhone = styled("input")`
  width: 100%;
  font-size: 1rem;
  font-weight: 400;
  background: white;

  border-radius: 4px;
  padding: 10px 10px;
  color: #20262d;
  transition: width 300ms ease;

  &:hover {
    background: #eaeef3;
  }

  &:focus {
    outline: none;
    transition: width 200ms ease-out;
  }
`;

const SignUpModal: React.FC = () => {
  const [open, setOpen] = useShowSignUp();
  const [regNumber, setRegNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [flipHtml, setFlipHtml] = useState(false);
  const [incorrentNumber, setIncorrentNumber] = useState(false);
  const [random4digits, setRandom4digits] = useState("");
  const [displayResultModal, setDisplayResultModal] = useState(false);
  const [resultModalState, setResultModalState] = useState(false);

  const validateNumber = () => {
    const isItChineseNumber = /^(1[3-9])\d{9}$/.test(regNumber);

    if (isItChineseNumber === true) {
      setFlipHtml(true);
      setTelephoneNumber(regNumber);
      sentVerificationCode();
    } else {
      setIncorrentNumber(true);
    }
  };

  async function sentVerificationCode() {
    var random4digits = (Math.floor(Math.random() * 10000) + 10000)
      .toString()
      .substring(1);
    setRandom4digits(random4digits);

    const res = await fetch(`/sms/${regNumber}/${random4digits}`)
      .then((r) => r.json())
      .catch((err) => console.log(err));

    if (res.error) {
      setIncorrentNumber(true);
    }
  }

  function checkVerificationCode() {
    if (random4digits === verificationCode) {
      setResultModalState(true);
      setDisplayResultModal(true);
    }
    if (random4digits !== verificationCode) {
      setResultModalState(false);
      setDisplayResultModal(true);
    }
  }

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      fullWidth
      className="md:w-101 sm:w-full mx-auto relative"
    >
      <div className="w-full h-96 p-10 bg-white relative flex flex-col justify-between">
        <Close
          className="text-black absolute top-2 right-2 cursor-pointer"
          onClick={() => setOpen(false)}
        />
        {!flipHtml && (
          <>
            <div>
              <div className="text-black text-center font-bold mb-4">
                Enter your phone number and receive verification code
              </div>
              <div className="mb-4">
                <InputUnstyled
                  components={{ Input: InputElementPhone }}
                  placeholder="phone number"
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value)}
                  className={`${
                    incorrentNumber === true
                      ? "border-2 border-red-800 rounded"
                      : "border-2 border-black rounded"
                  }`}
                />
                {incorrentNumber && (
                  <div className="text-red-800">Incorrent number</div>
                )}
              </div>
              <Button
                variant="contained"
                className="w-full bg-black text-white h-12 font-bold"
                onClick={() => validateNumber()}
              >
                Register
              </Button>
            </div>
            <div className="flex-grow-1 text-gray-500 text-xs text-center">
              This site is protected by reCAPTCHA and the Google{" "}
              <span className="text-blue-600">Privacy Policy</span> and
              <span className="text-blue-600"> Terms of Service</span> apply.
            </div>
          </>
        )}
        {flipHtml && (
          <>
            <div>
              <div className="text-black font-bold mb-6">
                We sent you a verification code. Please enter the numbers in the
                field below.
              </div>
              <VerificationInput
                removeDefaultStyles
                classNames={{
                  containerVer: "container",
                  character: "character",
                  characterInactive: "character--inactive",
                  characterSelected: "character--selected",
                }}
                autoFocus={true}
                length={4}
                value={verificationCode}
                onChange={(e) => setVerificationCode(e)}
                validChars={"0-9"}
              />
            </div>
            <div className="mx-auto">
              <Button
                className="bg-[#9e4df6] text-white whitespace-nowrap"
                onClick={() => checkVerificationCode()}
              >
                Sent
              </Button>
            </div>
          </>
        )}
      </div>
      {displayResultModal && (
        <ResultModal
          resultModalState={resultModalState}
          setDisplayResultModal={setDisplayResultModal}
          setVerificationCode={setVerificationCode}
          setRegNumber={setRegNumber}
          setFlipHtml={setFlipHtml}
          setOpen={setOpen}
        />
      )}
    </Dialog>
  );
};

export default SignUpModal;
