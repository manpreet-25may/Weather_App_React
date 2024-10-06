
class App extends React.Component{
render() {
    return(
        <div>
            <UserProfile name="Jane" email='jane25@gmail.com' bio='Seasoned developer with 8+ years of 
            experience in multiple programming languages and development frameworks, dedicated to 
            continuous learning.' 
            img="images/User.png" />
        </div>
    );
} 
}
function UserProfile(props) {
    return (
        <div className="card"> 
             <img src={props.img}/>
            <p>Name: {props.name}</p>
             <p>Email: {props.email}</p>  
             <p>{props.bio}</p>  
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App/>)
