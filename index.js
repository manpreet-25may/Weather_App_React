
// class App extends React.Component {
//     render() {
//         return (
//             // <h1>Hello React</h1>
//             <div>
//                 <ul>
                    {/* <AppFunction name='World' greet='hello'/>
<AppFunction name='Canada' greet='hi'/>
<AppFunction name='React' greet='halo'/> */}
                    {/* <Item name='Go to Shopping' isDone={true}/>
<Item name='Workout' isDone={true}/>
<Item name='Do Homework' isDone={true}/>
<Item name='Clean Your Room' isDone={true}/>
<Item name='Go to Shopping' isDone={true}/> */}
//                     <ItemCondition name='Go to Shopping' isDone={true} />
//                     <ItemCondition name='Workout' isDone={true} />
//                     <ItemCondition name='Do Homework' isDone={false} />
//                     <ItemCondition name='Clean Your Room' isDone={true} />
//                     <List name='Go to Shopping' isDone={true} />

//                 </ul>
//             </div>
//         )
//     }
// }
// 
// const names = [{
//     id: 1,
//     name: 'jane'
// },
// {
//     id: 2,
//     name: 'max'
// }

// ]
// function List() {
//     // const listItems=names.map(name=><li>{name}</li>)
//     const listItems = names.map(person => {
//         return <li>{person.name}</li>
//     })
//     return <ul>{listItems}</ul>
// }
// function AppFunction({ name, greet }) {
//     return (
//         <h1>{greet} {name}</h1>
//     )
// }
// function Item({ name, isPacked }) {
//     return <li>{name}</li>
// }
// function ItemCondition({ name, isDone }) {
//     if (isDone) {
//         return <li>{name} <input type='checkbox' checked></input></li>
//     }
//     return <li>{name}</li>;
// }

// function Clock(props){

//     return(
//         <div>
//             <h1>Hello World</h1>
//             <h2>It is {props.date.tolocaleTimeString()}</h2>
//         </div>
//     )
// }
// function tick(){
//     root.render(<Clock date={new Date()}/>);
// }
// setInterval(tick,1000);
// root.render(<App />);
// class Clock extends React.Component{
//     constructor (props){
//         super(props);
//         this.state={date:new Date()}
//     }
//     ComponentDidMount(){
//         this.timerId=setInterval(()=>this.tick(),1000);
//     }
//     ComponentWillUnmount(){
//         clearInterval(this.timerId);
//     }
//     tick(){
//         this.setState({
//             date:new Date()
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Hello World</h1>
//                 <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//             </div>  
//         )
//     }
// }
// root.render(<Clock date={new Date()}/>);
// function Clock(){
//     const [time,setTime]=React.useState(new Date());
//     return(
//         <div>
//             <h1>Hello World</h1>
//             <h2>It is {time.toLocaleTimeString()}</h2>
//         </div>
//     )    
// }
const root = ReactDOM.createRoot(document.getElementById('container'));
function ControlledForm(){
    const [formData,setFormData]=React.useState({
        name:'john',
        email:'john@gmail.com'
    });
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("form submitted",formData)
    }
    const handleChange=(event)=>{
        const{name,value}=event.target;
    }
    <><form><label>
        Name:
        <input
            type='name'
            name='name'
            value={formData.name}
            onChange={handleChange} />
    </label><label>
            Email:
            <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange} />
        </label>
        <br/>
        <button type='submit'>submit</button>
        </form></>
}

root.render(<ControlledForm/>)