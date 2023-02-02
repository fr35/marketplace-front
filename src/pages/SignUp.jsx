import FormSignUp from "../components/SignUp/Form";
import GithubBtn from "../components/BtnPassport/Github";
import GoogleBtn from "../components/BtnPassport/Google";
import TwitterBtn from "../components/BtnPassport/Twitter";
import FacebookBtn from "../components/BtnPassport/Facebook";
export default function SignUp() {
    return (
        <div>
            <FormSignUp></FormSignUp>
            <GithubBtn></GithubBtn>
            <FacebookBtn></FacebookBtn>
            <GoogleBtn></GoogleBtn>
            <TwitterBtn></TwitterBtn>
        </div>
    )
}