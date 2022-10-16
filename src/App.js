import './App.css';
import * as Tone from 'tone';

function playBark(note) {
  var sampler = new Tone.Sampler({
    "C5" : "bark-c5.mp3"
  }).toDestination();

  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(note, "8n");
  })
}
const loadMidi = (midi) => {
      Tone.Transport.bpm.value = midi.header.tempos[0].bpm
      var sampler = new Tone.Sampler({
        "C4" : "bark-c5.mp3"
      }).toDestination();

      var myJSONTop=JSON.stringify(midi.tracks[0].notes, null,)
      var myJSONBottom=JSON.stringify(midi.tracks[1].notes, null,)
      var parsedArrayTop = JSON.parse(myJSONTop)
      var parsedArrayBottom = JSON.parse(myJSONBottom)

      console.log(midi.tracks[0].notes)          //this is array of event objects

      // console.log(parsedArray)                   //this is array of event objects

      //"use an array of objects as long as the object has a "time" attribute" - from Tone.js Docs about Part

      new Tone.Part(function(time, value){
      //the value is an object which contains both the note and the velocity
      Tone.loaded().then(() => {
        sampler.triggerAttackRelease(value.name, value.duration, time, value.velocity)
      })

      },parsedArrayTop).start()

      new Tone.Part(function(time, value){
      //the value is an object which contains both the note and the velocity
      Tone.loaded().then(() => {
        sampler.triggerAttackRelease(value.name, value.duration, time, value.velocity)
      })

      },parsedArrayBottom).start()
     
      Tone.Transport.start()    
}
let bach;
(async() => {
  const fetchJson = file => fetch(file).then(r => r.json()).catch(console.log);
  return bach = await fetchJson("bach.json");
})();

function playButton(number) {
  number = number.toString().padStart(2, '0');
  const invention = bach[`invention-${number}`]
  return (
    <button className="play-button" onClick={() => loadMidi(invention)}>
      <img className="play-button__icon--play" src="images/play3.svg" />
      {invention.header.name}
      <img className="play-button__icon--beagle-head" src="images/beagle-head.png" />
    </button>
  )
}

function App() {
  console.log(bach)
  return (
  <div>
    <header className="section-header container">
      <h1 className="heading-1">Bachgle</h1>
      <img className="header-image" src="images/bachgle.png" />
      <p className="description">Hear the greatest composer of canine-kind.</p>
      <button className="play-button play-button--play" onClick={() => playBark("C5")}>
        Honor Bachgel
      </button>
      <p className="description--subtext">One must first pay respect to Bachgel to be serenaded by the sweet sonorities of his muses.</p>
    </header>
    <section className="section-invention container">
      <h2 className="heading-2">"Two-Bark" Inventions</h2>
      <ol className="button-group">
        <li>
          {playButton(1)}
        </li>
        {/* <li>
          {playButton(2)}
        </li> */}
        <li>
          {playButton(3)}
        </li>
        <li>
          {playButton(4)}
          </li>
          <li>
          {playButton(5)}
          </li>
          <li>
          {playButton(6)}
          </li>
          <li>
          {playButton(7)}
          </li>
          <li>
          {playButton(8)}
          </li>
          <li>
          {playButton(9)}
          </li>
          <li>
          {playButton(10)}
          </li>
          <li>
          {playButton(11)}
          </li>
          <li>
          {playButton(12)}
          </li>
          <li>
          {playButton(13)}
          </li>
        <li>
          {playButton(14)}
        </li>
        <li>
        {playButton(15)}
        </li>
      </ol>
    </section>
  </div>
  );
}

export default App;



        {/* {playButton(1)}
        {playButton(2)}
        {playButton(3)}
        {playButton(4)}
        {playButton(5)}
        {playButton(6)}
        {playButton(7)}
        {playButton(8)}
        {playButton(9)}
        {playButton(10)}
        {playButton(11)}
        {playButton(12)}
        {playButton(13)}
        {playButton(14)}
      {playButton(15)} */}