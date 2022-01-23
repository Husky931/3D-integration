import { setVerificationCode } from "./states"

export const sendVerificationCode = (phone: string) => {
    const code = generateCode()

    // do stuff to send the code to the phone number passed in from args

    // show the code input component

    // store the code in a global state, whcih the input component can access

    setVerificationCode(code)
}

export const generateCode = () => {
    return "0001"
}