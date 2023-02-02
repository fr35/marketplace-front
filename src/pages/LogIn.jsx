import FacebookBtn from "../components/BtnPassport/Facebook";
import GithubBtn from "../components/BtnPassport/Github";
import GoogleBtn from "../components/BtnPassport/Google";
import TwitterBtn from "../components/BtnPassport/Twitter";
import FormLogIn from "../components/LogIn/Form";
export default function LogIn() {
    return (
        <div>
            <FormLogIn></FormLogIn>
            <GithubBtn></GithubBtn>
            <FacebookBtn></FacebookBtn>
            <GoogleBtn></GoogleBtn>
            <TwitterBtn></TwitterBtn>
        </div>
    )
}