const AuthForm = (props) => {
    return (
        <>
           <button onClick={()=> props.func(!props.value)}>auth</button>
        </>
    );
};

export default AuthForm;