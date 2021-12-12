import React, { useContext } from "react";

import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";

export async function getServerSideProps(context) {

  return {  
    props: {
      pKey: process.env.CHAT_ENGINE_API_KEY,
      host: process.env.CHAT_ENGINE_API_HOST
    }, // will be passed to the page component as props
  }
}

export default function Auth(props) {

  
  const router = useRouter();

  const {
    username,
    setUsername,
    secret,
    setSecret
  } = useContext(Context);


  const onSubmit = (e)=>{
      e.preventDefault();

      if(username.length ===0 || secret.length ===0) return;
      //* HOST - https://api.chatengine.io 
      axios.put(`${props.host}/users`,
        {username,secret},
        { headers: { "Private-key": props.pKey}}
      ).then((res)=> router.push("/chats"));
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={onSubmit}>
            <div className="auth-title">Chat App</div>
            
            <div className="input-container">
                <input 
                  placeholder="Email"
                  className="text-input"
                  onChange={e => setUsername(e.target.value)}
                />
            </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={e => setSecret(e.target.value)}
            />
          </div>

          <button 
            type="submit"
            className="submit-button"
          >
            Login / SignUp
          </button>
        </form>
      </div>
    </div>
  )
}
