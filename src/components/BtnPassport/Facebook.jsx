export default function FacebookBtn() {
    const userLogInFacebook = (e) => {
        e.preventDefault()
        window.open('https://marketplace-back-production-3756.up.railway.app/auth/facebook-login', '_self')
    }
    return (
        <button className='' onClick={userLogInFacebook}>
			<span>Continue with Facebook</span>
		</button>
    )
}