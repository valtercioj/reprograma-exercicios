import protocolo from './api'

export function postTweet(tweet, token){
    const url = `/tweets?X-AUTH-TOKEN=${token}`
    return protocolo.post(url, tweet)
}