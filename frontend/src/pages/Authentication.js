import { json, redirect } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { getAuthToken } from '../util/auth';

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({request}){
  const searchParams=new URL(request.url).searchParams;
  
  const mode=searchParams.get('mode') || 'login';
  const data = await request.formData();

  if (mode!== 'login' && mode!=='signup'){
    throw json({
      message:'Unsupported mode'},{status:422
    });
  }
  const authData={
    email: data.get('email'),
    password:data.get('password'),
  };
  // const token1=getAuthToken();
  const response=await fetch('http://localhost:8080/'+mode,{
    method:'POST',
    headers:{'Content-Type':'application/json',
      // 'Authorization':'Bearer '+ token1
    },
    body:JSON.stringify(authData),

  });
  if(response.status===422 || response.status===401){
    return response;
    // console.log(response);
  }
  if(!response.ok){
    throw json({message:'Could not authenticate user'},{
      status:500,
    });

  }

  const resData=await response.json();
  const token=resData.token;

  localStorage.setItem('tokem',token);
  return redirect('/');
}