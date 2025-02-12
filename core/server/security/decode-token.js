import { decode } from 'jsonwebtoken'

export default  function decodeToken(token) {
    const decoded = decode(token, { complete: true })
    return decoded?.payload
}



