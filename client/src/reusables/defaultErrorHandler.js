
export default function handleErrors({ code, message }) {
    console.error(`VetFest Error code: ${code} // Error message: ${message}`)
    alert(message)
}