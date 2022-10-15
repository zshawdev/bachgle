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
    <button onClick={() => loadMidi(invention)}>
    {invention.header.name}
    </button>
  )
}

function App() {
  console.log(bach)
  return (
    <section className="section-invention">
      <h2>"Two Bark" Inventions</h2>
      <div className="button-group">
        <button onClick={() => playBark("C5")}>C</button>
        {playButton(1)}
      </div>
    </section>
  );
}

export default App;