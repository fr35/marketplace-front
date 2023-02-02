export default function TwitterBtn() {
    const userLogInGithub = (e) => {
        e.preventDefault()
        window.open('https://marketplace-back-production-3756.up.railway.app/auth/twitter-login', '_self')
    }
    return (
        <button className='' onClick={userLogInGithub}>
			<span>Continue with Twitter</span>
		</button>
    )
}