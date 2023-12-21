import axios from "axios";
import asyncStorage  from "@react-native-async-storage/async-storage/src/AsyncStorage";
import jwtDecode from "jwt-decode";

function logout()
{
   asyncStorage.removeItem('token')
   delete  axios.defaults.headers['Authorization'];
}
async function authentificate(newUser)
{
       const response = await axios
        .post('https://ams.smart-it-partner.com/api/login_check', newUser);
    const token = response.data.token;
    asyncStorage.setItem('token', token);
    setaxiostoken(token);
}


    const getToken = async () => {
        try {
            const token = await asyncStorage.getItem("token");
            if (token)
            {
                const jwtdata = jwtDecode(token);
                console.log(jwtdata.exp * 1000 ,new Date().getTime());
                if (jwtdata.exp * 1000 > new Date().getTime())
                {
                    setaxiostoken(token) ;
                }
                else
                {
                    logout();
                }
            }
            else
            {
                logout();
            }
        } catch (error) {
            console.log(error);
        }
    };
function setaxiostoken(token)
{
    axios.defaults.headers['Authorization'] = 'Bearer '  + token
}
export default {
    authentificate,logout,getToken
};
