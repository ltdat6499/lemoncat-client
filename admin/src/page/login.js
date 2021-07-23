import React, {  useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import loginServie from './service/login'
function Login(){

    const [message, setMessage] = useState('')
    const history = useHistory();
    let usernameRef = React.createRef();
    let passwordRef = React.createRef();

    useEffect(()=>{
        checkLogin();
        localStorage.removeItem('sa');
    },[])
    const checkLogin = () => {
        if(localStorage.getItem("loginInfo")!==null)
        {
            history.push('/admin');
            history.go(0);
        }
    }
    const login = ()=>{
        const data = {
            email: usernameRef.current.value,
            password: passwordRef.current.value
        }
        setMessage("");
        loginServie.login(data).then(res =>{ 
            console.log(res)
            //redirec to dashboard
            if(res.data.err && res.data.err=== 403)
            {
                setMessage("Tài khoản bị khóa")
            }
            else
            {
                setMessage("");
                //luu cookie  //expires:1 
                // let token = jwt.encode(data, res.data);
                localStorage.setItem("loginInfo",res.data.token);  
                if(res.data.role){
                    localStorage.setItem("sa",res.data.token);  
                }
                history.push('/admin');
                history.go(0);
            }

        }).catch(()=>setMessage("Tài khoản không tìm thấy"))

        //console.log(username,password); kiem tra da nhan duoc gia tri hay chua
    }

        return ( 
            // <div classNameName="h-100">
            //     <div classNameName="container h-100">
            //     <div classNameName="row justify-content-center h-100 align-items-center">
            //         <div classNameName="col-sm-8 col-lg-5">
            //             <div classNameName="card">
            //                 <div classNameName="card-header">
            //                     <h3 classNameName="card-title mb-0">Login</h3>
            //                 </div>
            //                 <div classNameName="card-body">
            //                     <form>
            //                         <div classNameNameName="text-center text-danger mb-3">{message}</div>
            //                         <div classNameName="form-group">
            //                             <label classNameName="sr-only">Username</label>
            //                             <div classNameName="input-group input-group-lg">
            //                                 <div classNameName="input-group-prepend">
            //                                 <span classNameName="input-group-text"><i classNameName="fas fa-user"></i></span>
            //                                 </div>
            //                                 <input type="text" ref={usernameRef} classNameName="form-control" placeholder="Username"/>
            //                             </div>
            //                         </div>
            //                         <div classNameName="form-group">
            //                             <label classNameName="sr-only">Password</label>
            //                             <div classNameName="input-group input-group-lg">
            //                                 <div classNameName="input-group-prepend">
            //                                 <span classNameName="input-group-text"><i classNameName="fas fa-key"></i></span>
            //                                 </div>
            //                                 <input type="password" ref={passwordRef}classNameName="form-control" placeholder="Password"/>
            //                             </div>
            //                         </div>
            //                         <button type="button" onClick={()=>login()} classNameName="mt-4 btn btn-primary btn-lg btn-block">Sign in</button>
            //                     </form>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            // </div>
            <div id="card">
                <div id="card-content">
                <div id="card-title">
                    <h4>LOGIN TO THE LEMONCAT</h4>
                    <div className="underline-title"></div>
                </div>
                <div method="post" className="form">
                    <label htmlFor="user-email" >
                        &nbsp;Email
                    </label>
                    <input id="user-email" className="form-content" type="email" name="email" ref={usernameRef} required />
                    <div className="form-border"></div>
                    <label htmlFor="user-password" className='titleLabel'>&nbsp;Password
                    </label>
                    <input id="user-password" className="form-content" type="password" name="password" ref={passwordRef} required />
                    <div className="form-border">{message}</div>
                    <input id="submit-btn" type="submit" name="submit" value="LOGIN"  onClick={()=>login()} />

                </div>
                </div>
            </div>
         );

}
 
export default Login;