import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const nav = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      // Save profile in Firestore under users collection
      await setDoc(doc(db, "users", userCred.user.uid), {
        name,
        email,
        createdAt: new Date()
      });
      nav("/");
    } catch (err) {
      console.error(err);
      setError("Error creating account");
    }
  };

  return (
    <div style={{border:"1px solid #1E90FF", padding:"20px", maxWidth:"400px"}}>
      <h2 style={{textAlign:"center", color:"#1E90FF"}}>Create a DEV@Deakin Account</h2>
      <form onSubmit={handleSignup} style={{display:"flex", flexDirection:"column", gap:"10px"}}>
        <input 
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="Name*" 
          required 
        />
        <input 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          type="email" 
          placeholder="Email*" 
          required 
        />
        <input 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          type="password" 
          placeholder="Password*" 
          required 
        />
        <input 
          value={confirm} 
          onChange={e => setConfirm(e.target.value)} 
          type="password" 
          placeholder="Confirm password*" 
          required 
        />
        <button 
          type="submit" 
          style={{
            backgroundColor:"#1E90FF", 
            color:"white", 
            padding:"10px", 
            border:"none", 
            cursor:"pointer",
            fontSize:"16px"
          }}
        >
          Create
        </button>
        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    </div>
  );
}
