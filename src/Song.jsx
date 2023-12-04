import React, {useState} from "react";
import "./index.css"

export default function Song() {
    const [songs, setSongs] = useState([
        { name: 'Gimme!Gimme!Gimme!', liked: false },
        { name: 'Dancing Queen', liked: false },
        { name: 'Lay All Your Love On Me', liked: false },
        { name: 'Mamma Mia', liked: false },
        { name: 'Money,Money,Money', liked: false }
    ]);

    const [inputText, setInputText] = useState("")

    const [submitValue, setSubmitValue] = useState("")

    function triggerLike(index) {
        const updatedSongs = [...songs];
        updatedSongs[index].liked = !updatedSongs[index].liked;
        setSongs(updatedSongs);
    }

    function handleInput(e){
        setInputText(e.target.value)
      }
  
      function handleSubmit(e){
        e.preventDefault()
        setSubmitValue(inputText)
        setInputText("")
      }

    return (
        <>
            <h2>Their Best Songs!</h2>
            <ul>
                <li>{songs[0].name}</li>
                <button onClick={() => triggerLike(0)}>
                    {songs[0].liked ? 'Liked' : 'Like'}
                </button>
                <li>{songs[1].name}</li>
                <button onClick={() => triggerLike(1)}>
                    {songs[1].liked ? 'Liked' : 'Like'}
                </button>
                <li>{songs[2].name}</li>
                <button onClick={() => triggerLike(2)}>
                    {songs[2].liked ? 'Liked' : 'Like'}
                </button>
                <li>{songs[3].name}</li>
                <button onClick={() => triggerLike(3)}>
                    {songs[3].liked ? 'Liked' : 'Like'}
                </button>
                <li>{songs[4].name}</li>
                <button onClick={() => triggerLike(4)}>
                    {songs[4].liked ? 'Liked' : 'Like'}
                </button>
            </ul>
            <div>
          <h2>Which song is your favourite today?</h2>
          <h3>{submitValue}</h3>
          <form onSubmit={handleSubmit}> 
            <input type="text" onChange={handleInput} value={inputText}/>
            <button type="submit">Submit</button>
          </form>
        </div>
        </>
    );
}
