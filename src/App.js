import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Title from "./components/Title";
import friends from "./friends.json";
import Nav from "./components/Nav";



class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    count:0,
    topCount:0,
    clicked: [],
    message: "Good Luck"
    };
  

  clickFriend = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    friends.sort(()=>Math.random()-.5);
    // Set this.state.friends equal to the new friends array
    if(!this.state.clicked.includes(id)){
      this.state.clicked.push(id);
      let newCount = this.state.count + 1;
      
      if(newCount>this.state.topCount){
        this.setState({count: newCount, topCount: newCount, message: ""});  
      } else (this.setState({count: newCount, message: ""}));
    }    else (
      this.setState({count:0, clicked: [], message:"Game Over!"})
    )
    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Nav>        
        </Nav>
        <Jumbotron>
          <Title>Clicky Game</Title>    
          <span className="navbar-brand">Top Score: {this.state.topCount}</span>   
          <span className="navbar-brand">Score: {this.state.count}</span> 
          <br/>
          <span className="navbar-brand">{this.state.message}</span>   

        </Jumbotron>
      <Wrapper>
        
        {this.state.friends.map(friend => (
          <FriendCard
            clickFriend={this.clickFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
