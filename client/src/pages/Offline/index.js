import React, { useState, useEffect } from "react";
import "./style.css";
import GameHeader from "../../components/GameHeader";

export default function OfflineGame() {
    const [input, setInput] = useState('');
    const [avatar, setAvatar] = useState('');
    const [gameState, setGameState] = useState({
        gameId: null,
        isReady: false,
        participants: []
    });
    const [roundState, setRoundState] = useState({
        round: 1,
        promptmaster: {},
        matcher: {},
        players: [],
        roundQuestion: "",
        //responses: []
    });
    const [position, setPosition] = useState(0);
    useEffect(()=> {
        setGameState({
            gameId: 5564,
            isReady: false,
            participants: []
        });
    },[]);
    function seeState() {
        console.log("GS ", gameState);
        console.log("RS ", roundState);
    }
    function createParticipant(input) {
        const {participants} = { ...gameState };
        const enteredParticipants = [...participants];
        let newParticipant = {
            name: input, 
            avatar: avatar,
            score: 0,
            position,
            response:"",
            isEliminated: false,
            matcher: false,
            promptmaster: false
        };
        enteredParticipants.push(newParticipant)
        setGameState({
            ...gameState,
            participants: enteredParticipants
        });
        setPosition(position + 1);
        console.log(gameState);
    }
    function startGame(){
        console.log('start game');
        const { participants } = { ...gameState };
        const updatedParticipants = [...participants];
        updatedParticipants[0].promptmaster = true;
        updatedParticipants[1].matcher = true;
        setGameState({
            ...gameState,
            isReady:true
        })
    }
    function startRound() {
        if(gameState.participants) {
            const { participants } = { ...gameState };
            const roundQuestion = prompt(`${JSON.stringify(participants[0].name)}, what is the category`);
            const matcher = participants.find(o=> o.matcher );
            const promptmaster = participants.find( o=> o.promptmaster );
            
            for(let i=0; i< participants.length; i++ ) {
                let playerResponse = prompt(`${JSON.stringify(participants[i].name)}, the category is ${(roundQuestion) ? roundQuestion.toUpperCase() : null }. Please enter your response`);
                
                let matchedParticpant = participants.indexOf(participants.find(o => o.name === participants[i].name));
                let updatedParticipants = [...participants];
                updatedParticipants[matchedParticpant].response = playerResponse;
                setGameState({
                    ...gameState,
                    participants: updatedParticipants
                });
            }
            setRoundState({
                ...roundState,
                round: roundState.round,
                promptmaster: promptmaster,
                matcher: matcher,
                roundQuestion: roundQuestion,
            });
        }
        else { console.log('start failed')}
    };
    function endRound() {
        if (roundState.round <= ( gameState.participants.length - 1 )){
            const {participants} = gameState;
            const newOrder = participants.forEach(o=>{
                o.position = o.position -1;
                o.response = "";
                if (o.position <=-1) o.position = participants.length - 1;
                o.isEliminated = false;
                if(o.position === 0) {
                    o.promptmaster = true;
                } else {
                    o.promptmaster = false;
                }
                if(o.position === 1) {
                    o.matcher = true;
                } else {
                    o.matcher = false;
                }
            });
            const updatedGameState = { ...gameState };
            const roundArray = updatedGameState.participants.sort((a,b) => (a.position > b.position) ? 1 : -1);
            console.log(newOrder);
            setGameState({
                ...gameState,
                participants: roundArray
            })
            setRoundState({
                ...roundState,
                round: (roundState.round + 1),
                promptmaster: gameState.participants[0],
                players: [],
                roundQuestion: "",
                responses: []
            });
        } else {
            console.log('congrats the game is over')
            const updatedGameState = { ...gameState };
            const roundArray = updatedGameState.participants.sort((a,b) => (a.score > b.score) ? -1 : 1);
            return (
                console.log('the winner is ',roundArray[0])
                // <div>
                //     <p>The game is over,</p>
                //     <h2>and the winner is...</h2>
                //     <img src={roundArray[0].avatar} alt={`${roundArray[0].name}'s avatar`}/>
                //     <h1>{roundArray[0].name}</h1>
                //     <button onClick={()=>{startGame()}}>New Game</button>
                //     <button onClick={()=>{endGame()}}>Main Menu</button>
                // </div>
            )
        }
    }
    function scoreboard() {
        console.log('finished');
        return <button onClick={()=>endRound()}>End Round</button>
    }
    function onDragOver(ev) {
        ev.preventDefault();
        let el = ev.target.parentNode.children[0];
        el.classList.add('dragHover');
    };
    function onDragEnter(ev){
        console.log(ev.target.parentNode.children)
    };
    function onDragLeave(ev) {
        let el = ev.target.parentNode.children[0];
        el.classList.remove('dragHover');
    }
    function onDragStart(ev, id) {
        console.log("dragstart: ", id);
        ev.dataTransfer.setData("id", id);
    };
    function onDrop(ev) {
        let id = ev.dataTransfer.getData("id");
        let pId = ev.target.parentNode.id;
        let el = ev.target.parentNode.children[0];
        el.classList.remove('class', 'dragHover');
        const { participants } = { ...gameState };
        if (id === pId) {
            console.log('match!');
            //const { participants } = { ...gameState };
            const matchedParticpant = participants.indexOf(participants.find(o => o.name === pId));
            const matchingParticipant = participants.indexOf(participants.find(o => o.matcher));
            const updatedParticipants = [...participants];
            updatedParticipants[matchedParticpant].isEliminated = true;
            updatedParticipants[matchingParticipant].score += 1;
            setGameState({
                ...gameState,
                participants: updatedParticipants,
            });
        }else {
            console.log('not a match');
            const filterPrompt = participants.filter( o => !o.promptmaster );
            const filterEliminatedUsers = filterPrompt.filter( o => !o.isEliminated );
            const incorrectMatch = filterEliminatedUsers.indexOf(filterEliminatedUsers.find(o => o.matcher));
            const nextMatcher = filterEliminatedUsers[(incorrectMatch + 1) % filterEliminatedUsers.length];
            const oldMatcher = participants.indexOf(participants.find(o => o.name === filterEliminatedUsers[incorrectMatch].name));
            const newMatcher = participants.indexOf(participants.find(o => o.name === nextMatcher.name));

            const updatedParticipants = [...participants];
            updatedParticipants[oldMatcher].matcher = false;
            updatedParticipants[newMatcher].matcher = true;

            setGameState({
                ...gameState,
                participants: updatedParticipants
            });
            setRoundState({
                ...roundState,
                matcher: updatedParticipants[newMatcher]
            })
        }
    }
    function player(o) {
        let playerClass = "player";
        let dragEvents = {
            onDragOver:  e => onDragOver(e),
            onDragEnter: e => onDragEnter(e),
            onDragLeave: e => onDragLeave(e),
            onDrop: e=> onDrop(e)
        }
        if (o.isEliminated || o.promptmaster) {
            playerClass = "player eliminated";
            dragEvents = {};
        }
        return(
            <div className={playerClass} key={o.id} id={o.name} {...dragEvents}>
                <img src={o.avatar} alt={`${o.name}'s Avatar`} className="playerAvatar lvl1"/>
                <h3 className="playerName">{o.name}</h3>
                <p className="playerScore lvl2">{o.score}</p>
            </div>
        )
    }

    function getPlayers() {
        if (gameState.participants) {
            return gameState.participants.map(player);
        }
    }
    function getAnswers() {
        if (gameState.participants) {
            const { participants } = { ...gameState };
            const array = participants;
            const filteredUsers = array.filter(o => !o.isEliminated);
            if(filteredUsers[0]){
                let shuffledArray = [...filteredUsers];
                let len = filteredUsers.length;
                if (len > 2) {
                    for(let i = 0; i < len; i += 1) {
                        let randomIndex = Math.floor(Math.random() * len);
                        [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
                    }
                    return shuffledArray.map(o=> (
                        <p className="response" key={o.id} draggable onDragStart={e=>onDragStart(e, o.name)}>{o.response}</p>
                    ));
                } else {
                    return scoreboard();
                }
            }
        }
    }
    function playerRegistration(){
        return (
            <div className="registration">
                <div className="welcome">
                    <h1 className="logo">Welcome!</h1>
                    <p>Please select an avatar and enter a name for each player</p>
                </div>
                <form>
                    <fieldset className="avatarsFieldset">
                        <legend>Choose an avatar</legend>
                        <label className="selectAvatar">
                            <input type="radio" name="avatar" value="images/avatars/woman1.svg" onChange={e=> setAvatar(e.target.value)}/>
                            <img src="images/avatars/woman1.svg" alt="Select Woman 1 Avatar"/>
                        </label>
                        <label className="selectAvatar">
                            <input type="radio" name="avatar" value="images/avatars/woman2.svg" onChange={e=> setAvatar(e.target.value)}/>
                            <img src="images/avatars/woman2.svg" alt="Select Woman 2 Avatar"/>
                        </label>
                        <label className="selectAvatar">
                            <input type="radio" name="avatar" value="images/avatars/woman3.svg" onChange={e=> setAvatar(e.target.value)}/>
                            <img src="images/avatars/woman3.svg" alt="Select Woman 3 Avatar"/>
                        </label>
                        <label className="selectAvatar">
                            <input type="radio" name="avatar" value="images/avatars/man1.svg" onChange={e=> setAvatar(e.target.value)}/>
                            <img src="images/avatars/man1.svg" alt="Select Man 1 Avatar"/>
                        </label>
                        <label className="selectAvatar">
                            <input type="radio" name="avatar" value="images/avatars/man2.svg" onChange={e=> setAvatar(e.target.value)}/>
                            <img src="images/avatars/man2.svg" alt="Select Man 2 Avatar"/>
                        </label>
                        <label className="selectAvatar">
                            <input type="radio" name="avatar" value="images/avatars/man3.svg" onChange={e=> setAvatar(e.target.value)}/>
                            <img src="images/avatars/man3.svg" alt="Select Man 3 Avatar"/>
                        </label>
                    </fieldset>
                    <fieldset className="participantFieldset">
                        <input type="name" id="participantName" value={input} onChange={e=> setInput(e.target.value)}  required/>
                        <label for="participantName">Enter your name</label>
                    </fieldset>
                    <button type="submit" id="createParticipant" onClick={(e)=>{
                        e.preventDefault();
                        if ( input && avatar ) {
                            createParticipant(input);
                            setInput('');
                        }
                    }}>Create Player</button>
                    <span className="submitOr">or</span>
                    <button className="startGameBtn" onClick={()=>startGame()}>Start Game</button>
                </form>
            </div>
        )
    }
    function gameBoard() {
        return (
            <div className="gameBoard wrapper">
                <GameHeader {...roundState}/>
                <div className="responseArea">
                    {getAnswers()}
                </div>
                <div className="playerArea">
                    {getPlayers()}
                </div>
                <div className="actions">
                    <button onClick={()=>startRound()}>Start Round</button>
                    <button onClick={()=>endRound()}>End Round</button>
                    <button onClick={()=>seeState()}>See State</button>
                </div>
            </div>
        )
    }
    return (gameState.isReady) ? gameBoard() : playerRegistration()
}