import { Alert, Box, Button, Container, Divider, Link, TextField } from "@mui/material"
import { useState } from "react";
import { useLoginContext } from "../contexts/LoginContext";
type Status = "success" | "error" | undefined;

export const LoginPage = () => {
    const [loggedInState,setLoggedInState] = useState<Status>();
    const {setIsLoggedIn} = useLoginContext();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const login = async (username:string,password:string) => { 
        const {status} = await fetch("/login",{method:"POST",body:JSON.stringify({username,password})});
        if(status === 200) {
          setIsLoggedIn(true);
          setLoggedInState("success");
        } else {
          setLoggedInState("error");
        }
      }
    return (
        <Box bgcolor="gray" height="85%" pt="15%">
            <Container sx={{width:"55%",height:"60%",verticalAlign:"center",bgcolor:"white",pb:"2%"}}>
                <Box fontWeight={"bold"} fontSize="1.4rem" marginLeft="3%" height="15%" pt={"3%"}>ログイン</Box>
                <Divider sx={{paddingTop:"0.7%",marginBottom:"1%"}} />
                {loggedInState === "error" && <Alert color="error">ログインできませんでした</Alert>}
                <Box marginBottom={"1%"} width="100%" marginTop={"3.5%"} height="15%">
                    <TextField label="ユーザー名" value={username} onChange={(e) => setUsername(e.target.value)} sx={{width:"95%",marginLeft:"3%"}} data-testid="username"></TextField>
                </Box>
                <Box marginBottom={"1%"} width="100%" marginTop={"4.5%"} height="15%">
                    <TextField label="パスワード" type={"password"} value={password} onChange={(e) => setPassword(e.target.value)} sx={{width:"95%",marginLeft:"3%"}} data-testid="password"></TextField>
                </Box>
                <Box width="100%" marginTop={"3%"} height="10%">
                    <Link sx={{marginLeft:"4%"}}>パスワードを忘れた場合</Link>
                </Box>
                <Box display="block" height="14%" width="90%" bgcolor={"lightblue"} borderRadius="7px" textAlign={"center"} margin="0 auto">
                    <Button onClick={() => login(username,password)} fullWidth sx={{pt:"2.5%",verticalAlign:"center"}}>ログイン</Button>
                </Box>
            </Container>
        </Box>
    )
}