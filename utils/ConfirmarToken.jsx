const token =  sessionStorage.getItem("token")


export function ConfirmUserToken(){
    const [TokenProfile, setConfirmTokenProfile] = useState(false)

      if(!token){
        setConfirmTokenProfile(!TokenProfile)
      }
}
