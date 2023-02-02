export default function GithubBtn() {
    const userLogInGithub = (e) => {
        e.preventDefault()
        window.open('https://marketplace-back-production-3756.up.railway.app/auth/github-login', '_self')
    }
    return (
        <button className='' onClick={userLogInGithub}>
			<span>Continue with Github</span>
		</button>
    )
}