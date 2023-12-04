import React from "react";
import {createRoot} from "react-dom/client";
import Intro from "./Intro"
import Song from "./Song"

const root = createRoot(document.getElementById('intro'));
root.render(<Intro />);

const song = createRoot(document.getElementById('song'))
song.render(<Song />)
