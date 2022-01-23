import store from "@lincode/react-global-state";

export const [useVideoDialog, setVideoDialog] = store(false);

export const [useVerificationCode, setVerificationCode] = store("");

export const [useShowSignUp, setShowSignUp] = store(false);

export const [useTelephoneNumber, setTelephoneNumber] = store("");
