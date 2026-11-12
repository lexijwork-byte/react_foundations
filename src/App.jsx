import React from "react";
import Post from "./Post";
import Profile from "./components/main_profile";
import Product from "./components/Product";
import ClickListener from "./components/ClickListener";
import Counter from "./components/Counter"
import Form from "./components/Form"


const App = () => {
 return (
    <>
    <Profile 
    name="sarah" 
    job="coach" 
    birthdate="4th september" 
    />

    <Counter></Counter>

    <Form />

    </>
);
};


export default App;
