export default function GoogleBtn() {
    const userLogInGithub = (e) => {
        e.preventDefault()
        window.open('https://marketplace-back-production-3756.up.railway.app/auth/google-login', '_self')
    }
    return (
        <button className='' onClick={userLogInGithub}>
			<span>Continue with Google</span>
		</button>
    )
}