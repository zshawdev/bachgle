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
        "C4" : "bark.mp3"
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

const cMajor = {
  "header": {
    "keySignatures": [
      {
        "key": "C",
        "scale": "major",
        "ticks": 0
      }
    ],
    "meta": [],
    "name": "",
    "ppq": 1024,
    "tempos": [
      {
        "bpm": 120.00024000048,
        "ticks": 0
      },
      {
        "bpm": 119.99928000431997,
        "ticks": 0
      }
    ],
    "timeSignatures": [
      {
        "ticks": 0,
        "timeSignature": [
          4,
          4
        ],
        "measures": 0
      }
    ]
  },
  "tracks": [
    {
      "channel": 0,
      "controlChanges": {
        "0": [
          {
            "number": 0,
            "ticks": 0,
            "time": 0,
            "value": 0.952755905511811
          }
        ],
        "6": [
          {
            "number": 6,
            "ticks": 4,
            "time": 0.00195313671875,
            "value": 0.09448818897637795
          }
        ],
        "7": [
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.7952755905511811
          },
          {
            "number": 7,
            "ticks": 0,
            "time": 0,
            "value": 0.8661417322834646
          }
        ],
        "10": [
          {
            "number": 10,
            "ticks": 0,
            "time": 0,
            "value": 0.5039370078740157
          }
        ],
        "32": [
          {
            "number": 32,
            "ticks": 0,
            "time": 0,
            "value": 0
          }
        ],
        "38": [
          {
            "number": 38,
            "ticks": 5,
            "time": 0.0024414208984375,
            "value": 0
          }
        ],
        "100": [
          {
            "number": 100,
            "ticks": 3,
            "time": 0.0014648525390625,
            "value": 0
          }
        ],
        "101": [
          {
            "number": 101,
            "ticks": 3,
            "time": 0.0014648525390625,
            "value": 0
          }
        ]
      },
      "pitchBends": [],
      "instrument": {
        "family": "piano",
        "number": 0,
        "name": "acoustic grand piano"
      },
      "name": "[Staff 1]",
      "notes": [
        {
          "duration": 0.476565359375,
          "durationTicks": 976,
          "midi": 60,
          "name": "C4",
          "ticks": 10,
          "time": 0.004882841796875,
          "velocity": 0.5433070866141733
        },
        {
          "duration": 0.4624051181640625,
          "durationTicks": 947,
          "midi": 62,
          "name": "D4",
          "ticks": 1054,
          "time": 0.514651525390625,
          "velocity": 0.5118110236220472
        },
        {
          "duration": 0.4624051181640625,
          "durationTicks": 947,
          "midi": 64,
          "name": "E4",
          "ticks": 2069,
          "time": 1.0102599677734374,
          "velocity": 0.5275590551181102
        },
        {
          "duration": 0.4609402656250001,
          "durationTicks": 944,
          "midi": 65,
          "name": "F4",
          "ticks": 3084,
          "time": 1.5058684101562498,
          "velocity": 0.5118110236220472
        },
        {
          "duration": 0.47949506445312506,
          "durationTicks": 982,
          "midi": 67,
          "name": "G4",
          "ticks": 4100,
          "time": 2.00196513671875,
          "velocity": 0.5433070866141733
        },
        {
          "duration": 0.4624051181640625,
          "durationTicks": 947,
          "midi": 69,
          "name": "A4",
          "ticks": 5150,
          "time": 2.514663525390625,
          "velocity": 0.5118110236220472
        },
        {
          "duration": 0.4624051181640625,
          "durationTicks": 947,
          "midi": 71,
          "name": "B4",
          "ticks": 6165,
          "time": 3.0102719677734373,
          "velocity": 0.5275590551181102
        },
        {
          "duration": 0.4609402656250001,
          "durationTicks": 944,
          "midi": 72,
          "name": "C5",
          "ticks": 7180,
          "time": 3.5058804101562497,
          "velocity": 0.5118110236220472
        }
      ],
      "endOfTrackTicks": 8194
    }
  ]
}

const bach = {
  "header": {
    "keySignatures": [],
    "meta": [],
    "name": "",
    "ppq": 240,
    "tempos": [
      {
        "bpm": 91.99998773333498,
        "ticks": 0
      }
    ],
    "timeSignatures": [
      {
        "ticks": 0,
        "timeSignature": [
          4,
          4
        ],
        "measures": 0
      }
    ]
  },
  "tracks": [
    {
      "channel": 0,
      "controlChanges": {},
      "pitchBends": [],
      "instrument": {
        "family": "piano",
        "number": 0,
        "name": "acoustic grand piano"
      },
      "name": "",
      "notes": [
        {
          "duration": 0.16304349999999998,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 60,
          "time": 0.16304349999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999995,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 120,
          "time": 0.32608699999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630435,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 180,
          "time": 0.4891304999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630435,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 240,
          "time": 0.6521739999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999999,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 300,
          "time": 0.8152174999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000012,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 360,
          "time": 0.9782609999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999999,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 420,
          "time": 1.1413045,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326087,
          "durationTicks": 120,
          "midi": 72,
          "name": "C5",
          "ticks": 480,
          "time": 1.3043479999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999998,
          "durationTicks": 120,
          "midi": 76,
          "name": "E5",
          "ticks": 600,
          "time": 1.6304349999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608700000000024,
          "durationTicks": 120,
          "midi": 68,
          "name": "G#4",
          "ticks": 720,
          "time": 1.9565219999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999998,
          "durationTicks": 120,
          "midi": 76,
          "name": "E5",
          "ticks": 840,
          "time": 2.282609,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000012,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 960,
          "time": 2.6086959999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 1020,
          "time": 2.7717395,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000012,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 1080,
          "time": 2.9347829999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000012,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 1140,
          "time": 3.0978264999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 1200,
          "time": 3.2608699999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000012,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 1260,
          "time": 3.4239134999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000012,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 1320,
          "time": 3.5869569999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 1380,
          "time": 3.7500004999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608700000000024,
          "durationTicks": 120,
          "midi": 72,
          "name": "C5",
          "ticks": 1440,
          "time": 3.9130439999999993,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608700000000024,
          "durationTicks": 120,
          "midi": 69,
          "name": "A4",
          "ticks": 1560,
          "time": 4.2391309999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 1980,
          "time": 5.380435499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 2040,
          "time": 5.543479,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 2100,
          "time": 5.706522499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 2160,
          "time": 5.869565999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 2220,
          "time": 6.0326094999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 2280,
          "time": 6.195652999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 2340,
          "time": 6.358696499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 65,
          "name": "F4",
          "ticks": 2400,
          "time": 6.521739999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608700000000024,
          "durationTicks": 120,
          "midi": 69,
          "name": "A4",
          "ticks": 2520,
          "time": 6.847826999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608700000000024,
          "durationTicks": 120,
          "midi": 74,
          "name": "D5",
          "ticks": 2640,
          "time": 7.173913999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.4891304999999999,
          "durationTicks": 180,
          "midi": 77,
          "name": "F5",
          "ticks": 2760,
          "time": 7.500000999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 2940,
          "time": 7.989131499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 3000,
          "time": 8.152175,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 3060,
          "time": 8.315218499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 3120,
          "time": 8.478261999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 3180,
          "time": 8.6413055,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 3240,
          "time": 8.804348999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 65,
          "name": "F4",
          "ticks": 3300,
          "time": 8.967392499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 64,
          "name": "E4",
          "ticks": 3360,
          "time": 9.130436,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 67,
          "name": "G4",
          "ticks": 3480,
          "time": 9.456522999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 72,
          "name": "C5",
          "ticks": 3600,
          "time": 9.782609999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.4891304999999999,
          "durationTicks": 180,
          "midi": 76,
          "name": "E5",
          "ticks": 3720,
          "time": 10.108697,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 3900,
          "time": 10.5978275,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 3960,
          "time": 10.760870999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 4020,
          "time": 10.923914499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 65,
          "name": "F4",
          "ticks": 4080,
          "time": 11.086958,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.4891304999999999,
          "durationTicks": 180,
          "midi": 74,
          "name": "D5",
          "ticks": 4200,
          "time": 11.413044999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 4380,
          "time": 11.902175499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 4440,
          "time": 12.065218999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 4500,
          "time": 12.228262499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 64,
          "name": "E4",
          "ticks": 4560,
          "time": 12.391305999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.4891304999999999,
          "durationTicks": 180,
          "midi": 72,
          "name": "C5",
          "ticks": 4680,
          "time": 12.717392999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 4860,
          "time": 13.206523499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 65,
          "name": "F4",
          "ticks": 4920,
          "time": 13.369566999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 4980,
          "time": 13.532610499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 62,
          "name": "D4",
          "ticks": 5040,
          "time": 13.695653999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 71,
          "name": "B4",
          "ticks": 5160,
          "time": 14.021740999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 72,
          "name": "C5",
          "ticks": 5280,
          "time": 14.347827999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 5820,
          "time": 15.815219499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 5880,
          "time": 15.978262999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 5940,
          "time": 16.1413065,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 6000,
          "time": 16.30435,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 6060,
          "time": 16.467393499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 6120,
          "time": 16.630436999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 77,
          "name": "F5",
          "ticks": 6180,
          "time": 16.793480499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 76,
          "name": "E5",
          "ticks": 6240,
          "time": 16.956523999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999976,
          "durationTicks": 120,
          "midi": 79,
          "name": "G5",
          "ticks": 6360,
          "time": 17.282611,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 71,
          "name": "B4",
          "ticks": 6480,
          "time": 17.608697999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 79,
          "name": "G5",
          "ticks": 6600,
          "time": 17.934784999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 6720,
          "time": 18.260872,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 6780,
          "time": 18.423915499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 6840,
          "time": 18.586958999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 6900,
          "time": 18.750002499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 6960,
          "time": 18.913045999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 7020,
          "time": 19.0760895,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 7080,
          "time": 19.239133,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 77,
          "name": "F5",
          "ticks": 7140,
          "time": 19.402176499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 76,
          "name": "E5",
          "ticks": 7200,
          "time": 19.565219999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 72,
          "name": "C5",
          "ticks": 7320,
          "time": 19.891306999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999976,
          "durationTicks": 120,
          "midi": 79,
          "name": "G5",
          "ticks": 7440,
          "time": 20.217394,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 76,
          "name": "E5",
          "ticks": 7560,
          "time": 20.543480999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 84,
          "name": "C6",
          "ticks": 7680,
          "time": 20.869567999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 81,
          "name": "A5",
          "ticks": 7740,
          "time": 21.032611499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 7800,
          "time": 21.195655,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 81,
          "name": "A5",
          "ticks": 7860,
          "time": 21.3586985,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 7920,
          "time": 21.521741999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 7980,
          "time": 21.684785499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 8040,
          "time": 21.847828999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 8100,
          "time": 22.010872499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999976,
          "durationTicks": 120,
          "midi": 74,
          "name": "D5",
          "ticks": 8160,
          "time": 22.173916,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 78,
          "name": "F#5",
          "ticks": 8280,
          "time": 22.500002999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 81,
          "name": "A5",
          "ticks": 8400,
          "time": 22.826089999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999976,
          "durationTicks": 120,
          "midi": 84,
          "name": "C6",
          "ticks": 8520,
          "time": 23.152177,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 83,
          "name": "B5",
          "ticks": 8640,
          "time": 23.478263999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 79,
          "name": "G5",
          "ticks": 8700,
          "time": 23.641307499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 8760,
          "time": 23.804350999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 79,
          "name": "G5",
          "ticks": 8820,
          "time": 23.967394499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 8880,
          "time": 24.130437999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 8940,
          "time": 24.2934815,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 9000,
          "time": 24.456524999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 9060,
          "time": 24.619568499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 72,
          "name": "C5",
          "ticks": 9120,
          "time": 24.782611999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999976,
          "durationTicks": 120,
          "midi": 76,
          "name": "E5",
          "ticks": 9240,
          "time": 25.108698999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 79,
          "name": "G5",
          "ticks": 9360,
          "time": 25.434785999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 83,
          "name": "B5",
          "ticks": 9480,
          "time": 25.760872999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 81,
          "name": "A5",
          "ticks": 9600,
          "time": 26.086959999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 78,
          "name": "F#5",
          "ticks": 9660,
          "time": 26.2500035,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 75,
          "name": "D#5",
          "ticks": 9720,
          "time": 26.413046999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 78,
          "name": "F#5",
          "ticks": 9780,
          "time": 26.576090499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 9840,
          "time": 26.739133999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 75,
          "name": "D#5",
          "ticks": 9900,
          "time": 26.902177499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 66,
          "name": "F#4",
          "ticks": 9960,
          "time": 27.065220999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 10020,
          "time": 27.228264499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 67,
          "name": "G4",
          "ticks": 10080,
          "time": 27.391307999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.4891305000000017,
          "durationTicks": 180,
          "midi": 79,
          "name": "G5",
          "ticks": 10200,
          "time": 27.717394999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 10380,
          "time": 28.206525499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 10440,
          "time": 28.369568999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 10500,
          "time": 28.532612499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 69,
          "name": "A4",
          "ticks": 10560,
          "time": 28.695655999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.48913049999999814,
          "durationTicks": 180,
          "midi": 78,
          "name": "F#5",
          "ticks": 10680,
          "time": 29.021742999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 10860,
          "time": 29.510873499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 10920,
          "time": 29.673916999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 10980,
          "time": 29.836960499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999976,
          "durationTicks": 120,
          "midi": 67,
          "name": "G4",
          "ticks": 11040,
          "time": 30.000003999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.4891305000000017,
          "durationTicks": 180,
          "midi": 76,
          "name": "E5",
          "ticks": 11160,
          "time": 30.326090999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 11340,
          "time": 30.815221499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 11400,
          "time": 30.978264999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 11460,
          "time": 31.141308499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 66,
          "name": "F#4",
          "ticks": 11520,
          "time": 31.304351999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 79,
          "name": "G5",
          "ticks": 11580,
          "time": 31.467395499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 78,
          "name": "F#5",
          "ticks": 11640,
          "time": 31.630438999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 11700,
          "time": 31.793482499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 75,
          "name": "D#5",
          "ticks": 11760,
          "time": 31.956525999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 78,
          "name": "F#5",
          "ticks": 11820,
          "time": 32.1195695,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 11880,
          "time": 32.282613,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 75,
          "name": "D#5",
          "ticks": 11940,
          "time": 32.4456565,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326086999999994,
          "durationTicks": 120,
          "midi": 76,
          "name": "E5",
          "ticks": 12000,
          "time": 32.6087,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 79,
          "name": "G5",
          "ticks": 12540,
          "time": 34.0760915,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 82,
          "name": "A#5",
          "ticks": 12600,
          "time": 34.239135,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 79,
          "name": "G5",
          "ticks": 12660,
          "time": 34.4021785,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 12720,
          "time": 34.565222,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 79,
          "name": "G5",
          "ticks": 12780,
          "time": 34.7282655,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 73,
          "name": "C#5",
          "ticks": 12840,
          "time": 34.89130899999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 12900,
          "time": 35.05435249999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 79,
          "name": "G5",
          "ticks": 12960,
          "time": 35.217395999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 13020,
          "time": 35.380439499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 73,
          "name": "C#5",
          "ticks": 13080,
          "time": 35.543482999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 13140,
          "time": 35.706526499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 13200,
          "time": 35.869569999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 77,
          "name": "F5",
          "ticks": 13500,
          "time": 36.6847875,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 81,
          "name": "A5",
          "ticks": 13560,
          "time": 36.84783099999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 77,
          "name": "F5",
          "ticks": 13620,
          "time": 37.01087449999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 13680,
          "time": 37.17391799999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 77,
          "name": "F5",
          "ticks": 13740,
          "time": 37.336961499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 13800,
          "time": 37.500004999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 13860,
          "time": 37.663048499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 77,
          "name": "F5",
          "ticks": 13920,
          "time": 37.826091999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 13980,
          "time": 37.989135499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 14040,
          "time": 38.152179,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 14100,
          "time": 38.3152225,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 14160,
          "time": 38.478266,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 14460,
          "time": 39.293483499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 79,
          "name": "G5",
          "ticks": 14520,
          "time": 39.456526999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 14580,
          "time": 39.619570499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 14640,
          "time": 39.782613999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 14700,
          "time": 39.945657499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 14760,
          "time": 40.108700999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 14820,
          "time": 40.2717445,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 75,
          "name": "D#5",
          "ticks": 14880,
          "time": 40.434788,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 14940,
          "time": 40.5978315,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 15000,
          "time": 40.76087499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 15060,
          "time": 40.92391849999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 66,
          "name": "F#4",
          "ticks": 15120,
          "time": 41.08696199999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 15420,
          "time": 41.902179499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 77,
          "name": "F5",
          "ticks": 15480,
          "time": 42.065222999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 15540,
          "time": 42.2282665,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 15600,
          "time": 42.39131,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 15660,
          "time": 42.5543535,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 68,
          "name": "G#4",
          "ticks": 15720,
          "time": 42.717397,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 15780,
          "time": 42.88044049999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 15840,
          "time": 43.04348399999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 15900,
          "time": 43.20652749999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 68,
          "name": "G#4",
          "ticks": 15960,
          "time": 43.36957099999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 16020,
          "time": 43.532614499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 16080,
          "time": 43.695657999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 16380,
          "time": 44.5108755,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 16440,
          "time": 44.673919,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 16500,
          "time": 44.83696249999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 16560,
          "time": 45.00000599999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 16620,
          "time": 45.16304949999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 16680,
          "time": 45.32609299999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 16740,
          "time": 45.489136499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 72,
          "name": "C5",
          "ticks": 16800,
          "time": 45.652179999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 69,
          "name": "A4",
          "ticks": 16920,
          "time": 45.978266999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 68,
          "name": "G#4",
          "ticks": 17040,
          "time": 46.304354,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326086999999994,
          "durationTicks": 120,
          "midi": 64,
          "name": "E4",
          "ticks": 17160,
          "time": 46.630441,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 17280,
          "time": 46.95652799999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 17340,
          "time": 47.11957149999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 17400,
          "time": 47.28261499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 17460,
          "time": 47.44565849999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 17520,
          "time": 47.608701999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 17580,
          "time": 47.771745499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 66,
          "name": "F#4",
          "ticks": 17640,
          "time": 47.934788999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 17700,
          "time": 48.097832499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 17760,
          "time": 48.260875999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 17820,
          "time": 48.4239195,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 66,
          "name": "F#4",
          "ticks": 17880,
          "time": 48.586963,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 17940,
          "time": 48.75000649999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 63,
          "name": "D#4",
          "ticks": 18000,
          "time": 48.91304999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 18060,
          "time": 49.07609349999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 18120,
          "time": 49.23913699999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 18180,
          "time": 49.40218049999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 68,
          "name": "G#4",
          "ticks": 18240,
          "time": 49.56522399999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 18300,
          "time": 49.728267499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 18360,
          "time": 49.891310999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 18420,
          "time": 50.054354499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 68,
          "name": "G#4",
          "ticks": 18480,
          "time": 50.217397999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 18540,
          "time": 50.380441499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 18600,
          "time": 50.543485,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 65,
          "name": "F4",
          "ticks": 18660,
          "time": 50.70652849999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 68,
          "name": "G#4",
          "ticks": 18720,
          "time": 50.86957199999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 65,
          "name": "F4",
          "ticks": 18780,
          "time": 51.03261549999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 18840,
          "time": 51.19565899999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 65,
          "name": "F4",
          "ticks": 18900,
          "time": 51.35870249999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 18960,
          "time": 51.52174599999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 65,
          "name": "F4",
          "ticks": 19020,
          "time": 51.684789499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 19080,
          "time": 51.847832999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 19140,
          "time": 52.010876499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 19200,
          "time": 52.173919999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 19260,
          "time": 52.336963499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 19320,
          "time": 52.500007,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 19380,
          "time": 52.6630505,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 19440,
          "time": 52.82609399999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 19500,
          "time": 52.98913749999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 19560,
          "time": 53.15218099999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 19620,
          "time": 53.31522449999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 63,
          "name": "D#4",
          "ticks": 19680,
          "time": 53.47826799999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 19740,
          "time": 53.64131149999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 19800,
          "time": 53.804354999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 19860,
          "time": 53.967398499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 54,
          "name": "F#3",
          "ticks": 19920,
          "time": 54.130441999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 19980,
          "time": 54.293485499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 20040,
          "time": 54.456528999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 20100,
          "time": 54.6195725,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 56,
          "name": "G#3",
          "ticks": 20160,
          "time": 54.78261599999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 71,
          "name": "B4",
          "ticks": 20280,
          "time": 55.10870299999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 68,
          "name": "G#4",
          "ticks": 20400,
          "time": 55.43478999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 64,
          "name": "E4",
          "ticks": 20520,
          "time": 55.760876999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 20700,
          "time": 56.250007499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 20760,
          "time": 56.413050999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 20820,
          "time": 56.576094499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 20880,
          "time": 56.73913799999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 20940,
          "time": 56.90218149999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 21000,
          "time": 57.06522499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 21060,
          "time": 57.22826849999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 21120,
          "time": 57.39131199999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 21180,
          "time": 57.55435549999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 21240,
          "time": 57.71739899999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 21300,
          "time": 57.880442499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 21360,
          "time": 58.043485999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 21420,
          "time": 58.206529499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 21480,
          "time": 58.369572999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 77,
          "name": "F5",
          "ticks": 21540,
          "time": 58.532616499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 21600,
          "time": 58.69565999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 21660,
          "time": 58.85870349999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 21720,
          "time": 59.02174699999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 79,
          "name": "G5",
          "ticks": 21780,
          "time": 59.18479049999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 77,
          "name": "F5",
          "ticks": 21840,
          "time": 59.34783399999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 21900,
          "time": 59.51087749999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 21960,
          "time": 59.67392099999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 22020,
          "time": 59.83696449999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 22080,
          "time": 60.000007999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 22140,
          "time": 60.163051499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 22200,
          "time": 60.326094999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 76,
          "name": "E5",
          "ticks": 22260,
          "time": 60.489138499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 77,
          "name": "F5",
          "ticks": 22320,
          "time": 60.65218199999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 22380,
          "time": 60.81522549999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 80,
          "name": "G#5",
          "ticks": 22440,
          "time": 60.97826899999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 22500,
          "time": 61.14131249999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 83,
          "name": "B5",
          "ticks": 22560,
          "time": 61.30435599999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 22620,
          "time": 61.46739949999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 22680,
          "time": 61.63044299999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 81,
          "name": "A5",
          "ticks": 22740,
          "time": 61.79348649999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 77,
          "name": "F5",
          "ticks": 22800,
          "time": 61.956529999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 22860,
          "time": 62.119573499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 22920,
          "time": 62.282616999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 74,
          "name": "D5",
          "ticks": 22980,
          "time": 62.445660499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 68,
          "name": "G#4",
          "ticks": 23040,
          "time": 62.60870399999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 23100,
          "time": 62.77174749999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 72,
          "name": "C5",
          "ticks": 23160,
          "time": 62.93479099999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 23220,
          "time": 63.09783449999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 23280,
          "time": 63.26087799999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 23340,
          "time": 63.42392149999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 71,
          "name": "B4",
          "ticks": 23400,
          "time": 63.58696499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 68,
          "name": "G#4",
          "ticks": 23460,
          "time": 63.75000849999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 23520,
          "time": 63.91305199999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 23580,
          "time": 64.0760955,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 23640,
          "time": 64.239139,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 23700,
          "time": 64.4021825,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 1.9565219999999925,
          "durationTicks": 720,
          "midi": 57,
          "name": "A3",
          "ticks": 23760,
          "time": 64.565226,
          "velocity": 0.5039370078740157
        }
      ],
      "endOfTrackTicks": 24480
    },
    {
      "channel": 1,
      "controlChanges": {},
      "pitchBends": [],
      "instrument": {
        "family": "piano",
        "number": 0,
        "name": "acoustic grand piano"
      },
      "name": "",
      "notes": [
        {
          "duration": 0.32608699999999996,
          "durationTicks": 120,
          "midi": 45,
          "name": "A2",
          "ticks": 0,
          "time": 0,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.6521739999999998,
          "durationTicks": 240,
          "midi": 57,
          "name": "A3",
          "ticks": 120,
          "time": 0.32608699999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326087,
          "durationTicks": 120,
          "midi": 56,
          "name": "G#3",
          "ticks": 360,
          "time": 0.9782609999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999999,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 480,
          "time": 1.3043479999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000012,
          "durationTicks": 60,
          "midi": 52,
          "name": "E3",
          "ticks": 540,
          "time": 1.4673914999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999999,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 600,
          "time": 1.6304349999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999999,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 660,
          "time": 1.7934784999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000012,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 720,
          "time": 1.9565219999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000012,
          "durationTicks": 60,
          "midi": 52,
          "name": "E3",
          "ticks": 780,
          "time": 2.1195654999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 840,
          "time": 2.282609,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000012,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 900,
          "time": 2.4456524999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999998,
          "durationTicks": 120,
          "midi": 60,
          "name": "C4",
          "ticks": 960,
          "time": 2.6086959999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608700000000024,
          "durationTicks": 120,
          "midi": 57,
          "name": "A3",
          "ticks": 1080,
          "time": 2.9347829999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999998,
          "durationTicks": 120,
          "midi": 56,
          "name": "G#3",
          "ticks": 1200,
          "time": 3.2608699999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999998,
          "durationTicks": 120,
          "midi": 52,
          "name": "E3",
          "ticks": 1320,
          "time": 3.5869569999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 1440,
          "time": 3.9130439999999993,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 52,
          "name": "E3",
          "ticks": 1500,
          "time": 4.0760875,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 1560,
          "time": 4.2391309999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 1620,
          "time": 4.402174499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 1680,
          "time": 4.565218,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 52,
          "name": "E3",
          "ticks": 1740,
          "time": 4.7282614999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 1800,
          "time": 4.891304999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 1860,
          "time": 5.0543485,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608700000000024,
          "durationTicks": 120,
          "midi": 60,
          "name": "C4",
          "ticks": 1920,
          "time": 5.217391999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 57,
          "name": "A3",
          "ticks": 2040,
          "time": 5.543479,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608700000000024,
          "durationTicks": 120,
          "midi": 60,
          "name": "C4",
          "ticks": 2160,
          "time": 5.869565999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608700000000024,
          "durationTicks": 120,
          "midi": 57,
          "name": "A3",
          "ticks": 2280,
          "time": 6.195652999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 2400,
          "time": 6.521739999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 2460,
          "time": 6.684783499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 53,
          "name": "F3",
          "ticks": 2520,
          "time": 6.847826999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 2580,
          "time": 7.010870499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 50,
          "name": "D3",
          "ticks": 2640,
          "time": 7.173913999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 53,
          "name": "F3",
          "ticks": 2700,
          "time": 7.336957499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 45,
          "name": "A2",
          "ticks": 2760,
          "time": 7.500000999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999967,
          "durationTicks": 60,
          "midi": 48,
          "name": "C3",
          "ticks": 2820,
          "time": 7.663044499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 47,
          "name": "B2",
          "ticks": 2880,
          "time": 7.826087999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 50,
          "name": "D3",
          "ticks": 3000,
          "time": 8.152175,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 55,
          "name": "G3",
          "ticks": 3120,
          "time": 8.478261999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.4891304999999999,
          "durationTicks": 180,
          "midi": 59,
          "name": "B3",
          "ticks": 3240,
          "time": 8.804348999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 55,
          "name": "G3",
          "ticks": 3420,
          "time": 9.293479499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 52,
          "name": "E3",
          "ticks": 3480,
          "time": 9.456522999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 55,
          "name": "G3",
          "ticks": 3540,
          "time": 9.6195665,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 48,
          "name": "C3",
          "ticks": 3600,
          "time": 9.782609999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 52,
          "name": "E3",
          "ticks": 3660,
          "time": 9.945653499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 43,
          "name": "G2",
          "ticks": 3720,
          "time": 10.108697,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 47,
          "name": "B2",
          "ticks": 3780,
          "time": 10.271740499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 45,
          "name": "A2",
          "ticks": 3840,
          "time": 10.434783999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 48,
          "name": "C3",
          "ticks": 3960,
          "time": 10.760870999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 50,
          "name": "D3",
          "ticks": 4080,
          "time": 11.086958,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 53,
          "name": "F3",
          "ticks": 4140,
          "time": 11.250001499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 47,
          "name": "B2",
          "ticks": 4200,
          "time": 11.413044999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 50,
          "name": "D3",
          "ticks": 4260,
          "time": 11.5760885,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 43,
          "name": "G2",
          "ticks": 4320,
          "time": 11.739131999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 47,
          "name": "B2",
          "ticks": 4440,
          "time": 12.065218999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 48,
          "name": "C3",
          "ticks": 4560,
          "time": 12.391305999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 52,
          "name": "E3",
          "ticks": 4620,
          "time": 12.554349499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 45,
          "name": "A2",
          "ticks": 4680,
          "time": 12.717392999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 48,
          "name": "C3",
          "ticks": 4740,
          "time": 12.880436499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 41,
          "name": "F2",
          "ticks": 4800,
          "time": 13.043479999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.32608699999999935,
          "durationTicks": 120,
          "midi": 38,
          "name": "D2",
          "ticks": 4920,
          "time": 13.369566999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1358695833333332,
          "durationTicks": 50,
          "midi": 43,
          "name": "G2",
          "ticks": 5040,
          "time": 13.695653999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 55,
          "name": "G3",
          "ticks": 5100,
          "time": 13.858697499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 53,
          "name": "F3",
          "ticks": 5160,
          "time": 14.021740999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 55,
          "name": "G3",
          "ticks": 5220,
          "time": 14.184784499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1358695833333332,
          "durationTicks": 50,
          "midi": 48,
          "name": "C3",
          "ticks": 5280,
          "time": 14.347827999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 55,
          "name": "G3",
          "ticks": 5340,
          "time": 14.510871499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 5400,
          "time": 14.673914999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 5460,
          "time": 14.836958499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 5520,
          "time": 15.000001999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 55,
          "name": "G3",
          "ticks": 5580,
          "time": 15.163045499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 5640,
          "time": 15.326088999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.1630434999999988,
          "durationTicks": 60,
          "midi": 65,
          "name": "F4",
          "ticks": 5700,
          "time": 15.489132499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 64,
          "name": "E4",
          "ticks": 5760,
          "time": 15.652175999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 60,
          "name": "C4",
          "ticks": 5880,
          "time": 15.978262999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999976,
          "durationTicks": 120,
          "midi": 59,
          "name": "B3",
          "ticks": 6000,
          "time": 16.30435,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 55,
          "name": "G3",
          "ticks": 6120,
          "time": 16.630436999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 6240,
          "time": 16.956523999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 55,
          "name": "G3",
          "ticks": 6300,
          "time": 17.1195675,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 6360,
          "time": 17.282611,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 6420,
          "time": 17.445654499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 6480,
          "time": 17.608697999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 55,
          "name": "G3",
          "ticks": 6540,
          "time": 17.771741499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 6600,
          "time": 17.934784999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 65,
          "name": "F4",
          "ticks": 6660,
          "time": 18.0978285,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999976,
          "durationTicks": 120,
          "midi": 64,
          "name": "E4",
          "ticks": 6720,
          "time": 18.260872,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 60,
          "name": "C4",
          "ticks": 6840,
          "time": 18.586958999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 7260,
          "time": 19.728263499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 7320,
          "time": 19.891306999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 7380,
          "time": 20.054350499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 7440,
          "time": 20.217394,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 7500,
          "time": 20.380437499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 55,
          "name": "G3",
          "ticks": 7560,
          "time": 20.543480999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 7620,
          "time": 20.706524499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 57,
          "name": "A3",
          "ticks": 7680,
          "time": 20.869567999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999976,
          "durationTicks": 120,
          "midi": 60,
          "name": "C4",
          "ticks": 7800,
          "time": 21.195655,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 64,
          "name": "E4",
          "ticks": 7920,
          "time": 21.521741999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 67,
          "name": "G4",
          "ticks": 8040,
          "time": 21.847828999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 66,
          "name": "F#4",
          "ticks": 8160,
          "time": 22.173916,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 8220,
          "time": 22.3369595,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 8280,
          "time": 22.500002999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 66,
          "name": "F#4",
          "ticks": 8340,
          "time": 22.663046499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 8400,
          "time": 22.826089999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 8460,
          "time": 22.989133499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 54,
          "name": "F#3",
          "ticks": 8520,
          "time": 23.152177,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 8580,
          "time": 23.3152205,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 55,
          "name": "G3",
          "ticks": 8640,
          "time": 23.478263999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 59,
          "name": "B3",
          "ticks": 8760,
          "time": 23.804350999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999976,
          "durationTicks": 120,
          "midi": 62,
          "name": "D4",
          "ticks": 8880,
          "time": 24.130437999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 66,
          "name": "F#4",
          "ticks": 9000,
          "time": 24.456524999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 9120,
          "time": 24.782611999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 9180,
          "time": 24.945655499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 9240,
          "time": 25.108698999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 9300,
          "time": 25.2717425,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 55,
          "name": "G3",
          "ticks": 9360,
          "time": 25.434785999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 9420,
          "time": 25.597829499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 52,
          "name": "E3",
          "ticks": 9480,
          "time": 25.760872999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 55,
          "name": "G3",
          "ticks": 9540,
          "time": 25.923916499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999976,
          "durationTicks": 120,
          "midi": 54,
          "name": "F#3",
          "ticks": 9600,
          "time": 26.086959999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 57,
          "name": "A3",
          "ticks": 9720,
          "time": 26.413046999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 59,
          "name": "B3",
          "ticks": 9840,
          "time": 26.739133999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260869999999976,
          "durationTicks": 120,
          "midi": 63,
          "name": "D#4",
          "ticks": 9960,
          "time": 27.065220999999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 10140,
          "time": 27.554351499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 10200,
          "time": 27.717394999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 10260,
          "time": 27.880438499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 10320,
          "time": 28.043481999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 10380,
          "time": 28.206525499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 10440,
          "time": 28.369568999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 10500,
          "time": 28.532612499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 66,
          "name": "F#4",
          "ticks": 10560,
          "time": 28.695655999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 10620,
          "time": 28.858699499999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 10680,
          "time": 29.021742999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 10740,
          "time": 29.184786499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 55,
          "name": "G3",
          "ticks": 10800,
          "time": 29.347829999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 10860,
          "time": 29.510873499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 10920,
          "time": 29.673916999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 66,
          "name": "F#4",
          "ticks": 10980,
          "time": 29.836960499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 11040,
          "time": 30.000003999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.163043499999997,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 11100,
          "time": 30.163047499999998,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 11160,
          "time": 30.326090999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 11220,
          "time": 30.489134499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 54,
          "name": "F#3",
          "ticks": 11280,
          "time": 30.652177999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 11340,
          "time": 30.815221499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.48913049999999814,
          "durationTicks": 180,
          "midi": 60,
          "name": "C4",
          "ticks": 11400,
          "time": 30.978264999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 11580,
          "time": 31.467395499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 11640,
          "time": 31.630438999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 11700,
          "time": 31.793482499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 59,
          "name": "B3",
          "ticks": 11760,
          "time": 31.956525999999997,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 47,
          "name": "B2",
          "ticks": 11880,
          "time": 32.282613,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 52,
          "name": "E3",
          "ticks": 12000,
          "time": 32.6087,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 12060,
          "time": 32.7717435,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 12120,
          "time": 32.93478699999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 55,
          "name": "G3",
          "ticks": 12180,
          "time": 33.09783049999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 52,
          "name": "E3",
          "ticks": 12240,
          "time": 33.260873999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 47,
          "name": "B2",
          "ticks": 12300,
          "time": 33.423917499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 43,
          "name": "G2",
          "ticks": 12360,
          "time": 33.586960999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 47,
          "name": "B2",
          "ticks": 12420,
          "time": 33.750004499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 40,
          "name": "E2",
          "ticks": 12480,
          "time": 33.913047999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 52,
          "name": "E3",
          "ticks": 12600,
          "time": 34.239135,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326086999999994,
          "durationTicks": 120,
          "midi": 55,
          "name": "G3",
          "ticks": 12720,
          "time": 34.565222,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 58,
          "name": "A#3",
          "ticks": 12840,
          "time": 34.89130899999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 49,
          "name": "C#3",
          "ticks": 12960,
          "time": 35.217395999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 67,
          "name": "G4",
          "ticks": 13260,
          "time": 36.0326135,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 66,
          "name": "F#4",
          "ticks": 13320,
          "time": 36.195657,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 13380,
          "time": 36.3587005,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326086999999994,
          "durationTicks": 120,
          "midi": 62,
          "name": "D4",
          "ticks": 13440,
          "time": 36.521744,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 50,
          "name": "D3",
          "ticks": 13560,
          "time": 36.84783099999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 53,
          "name": "F3",
          "ticks": 13680,
          "time": 37.17391799999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 56,
          "name": "G#3",
          "ticks": 13800,
          "time": 37.500004999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 47,
          "name": "B2",
          "ticks": 13920,
          "time": 37.826091999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 65,
          "name": "F4",
          "ticks": 14220,
          "time": 38.6413095,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 14280,
          "time": 38.80435299999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 14340,
          "time": 38.96739649999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 60,
          "name": "C4",
          "ticks": 14400,
          "time": 39.13043999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 48,
          "name": "C3",
          "ticks": 14520,
          "time": 39.456526999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 52,
          "name": "E3",
          "ticks": 14640,
          "time": 39.782613999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 54,
          "name": "F#3",
          "ticks": 14760,
          "time": 40.108700999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326086999999994,
          "durationTicks": 120,
          "midi": 45,
          "name": "A2",
          "ticks": 14880,
          "time": 40.434788,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 15180,
          "time": 41.25000549999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 63,
          "name": "D#4",
          "ticks": 15240,
          "time": 41.413048999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 61,
          "name": "C#4",
          "ticks": 15300,
          "time": 41.576092499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 59,
          "name": "B3",
          "ticks": 15360,
          "time": 41.739135999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 47,
          "name": "B2",
          "ticks": 15480,
          "time": 42.065222999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 50,
          "name": "D3",
          "ticks": 15600,
          "time": 42.39131,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326086999999994,
          "durationTicks": 120,
          "midi": 53,
          "name": "F3",
          "ticks": 15720,
          "time": 42.717397,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 44,
          "name": "G#2",
          "ticks": 15840,
          "time": 43.04348399999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 16140,
          "time": 43.858701499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 16200,
          "time": 44.021744999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 16260,
          "time": 44.184788499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 60,
          "name": "C4",
          "ticks": 16320,
          "time": 44.347832,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326086999999994,
          "durationTicks": 120,
          "midi": 57,
          "name": "A3",
          "ticks": 16440,
          "time": 44.673919,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 56,
          "name": "G#3",
          "ticks": 16560,
          "time": 45.00000599999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 52,
          "name": "E3",
          "ticks": 16680,
          "time": 45.32609299999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 16800,
          "time": 45.652179999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 52,
          "name": "E3",
          "ticks": 16860,
          "time": 45.815223499999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 16920,
          "time": 45.978266999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 16980,
          "time": 46.141310499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 17040,
          "time": 46.304354,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 52,
          "name": "E3",
          "ticks": 17100,
          "time": 46.4673975,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 17160,
          "time": 46.630441,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 62,
          "name": "D4",
          "ticks": 17220,
          "time": 46.79348449999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 17280,
          "time": 46.95652799999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 17340,
          "time": 47.11957149999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 69,
          "name": "A4",
          "ticks": 17400,
          "time": 47.28261499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 17460,
          "time": 47.44565849999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 17520,
          "time": 47.608701999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 64,
          "name": "E4",
          "ticks": 17580,
          "time": 47.771745499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 17640,
          "time": 47.934788999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 17700,
          "time": 48.097832499999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 54,
          "name": "F#3",
          "ticks": 17760,
          "time": 48.260875999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 17820,
          "time": 48.4239195,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304349999999346,
          "durationTicks": 60,
          "midi": 60,
          "name": "C4",
          "ticks": 17880,
          "time": 48.586963,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 17940,
          "time": 48.75000649999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 54,
          "name": "F#3",
          "ticks": 18000,
          "time": 48.91304999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 57,
          "name": "A3",
          "ticks": 18060,
          "time": 49.07609349999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 51,
          "name": "D#3",
          "ticks": 18120,
          "time": 49.23913699999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 54,
          "name": "F#3",
          "ticks": 18180,
          "time": 49.40218049999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 52,
          "name": "E3",
          "ticks": 18240,
          "time": 49.56522399999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 56,
          "name": "G#3",
          "ticks": 18360,
          "time": 49.891310999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 59,
          "name": "B3",
          "ticks": 18480,
          "time": 50.217397999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326086999999994,
          "durationTicks": 120,
          "midi": 56,
          "name": "G#3",
          "ticks": 18600,
          "time": 50.543485,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 52,
          "name": "E3",
          "ticks": 18720,
          "time": 50.86957199999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 47,
          "name": "B2",
          "ticks": 18840,
          "time": 51.19565899999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 44,
          "name": "G#2",
          "ticks": 18960,
          "time": 51.52174599999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 40,
          "name": "E2",
          "ticks": 19080,
          "time": 51.847832999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 45,
          "name": "A2",
          "ticks": 19200,
          "time": 52.173919999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326086999999994,
          "durationTicks": 120,
          "midi": 48,
          "name": "C3",
          "ticks": 19320,
          "time": 52.500007,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 52,
          "name": "E3",
          "ticks": 19440,
          "time": 52.82609399999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 48,
          "name": "C3",
          "ticks": 19560,
          "time": 53.15218099999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 45,
          "name": "A2",
          "ticks": 19680,
          "time": 53.47826799999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 48,
          "name": "C3",
          "ticks": 19800,
          "time": 53.804354999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 39,
          "name": "D#2",
          "ticks": 19920,
          "time": 54.130441999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 20220,
          "time": 54.94565949999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 56,
          "name": "G#3",
          "ticks": 20280,
          "time": 55.10870299999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 52,
          "name": "E3",
          "ticks": 20340,
          "time": 55.27174649999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 50,
          "name": "D3",
          "ticks": 20400,
          "time": 55.43478999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 59,
          "name": "B3",
          "ticks": 20460,
          "time": 55.59783349999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 56,
          "name": "G#3",
          "ticks": 20520,
          "time": 55.760876999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.16304350000000056,
          "durationTicks": 60,
          "midi": 50,
          "name": "D3",
          "ticks": 20580,
          "time": 55.923920499999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 48,
          "name": "C3",
          "ticks": 20640,
          "time": 56.086963999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326086999999994,
          "durationTicks": 120,
          "midi": 52,
          "name": "E3",
          "ticks": 20760,
          "time": 56.413050999999996,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 44,
          "name": "G#2",
          "ticks": 20880,
          "time": 56.73913799999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 52,
          "name": "E3",
          "ticks": 21000,
          "time": 57.06522499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 45,
          "name": "A2",
          "ticks": 21120,
          "time": 57.39131199999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 54,
          "name": "F#3",
          "ticks": 21240,
          "time": 57.71739899999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 47,
          "name": "B2",
          "ticks": 21360,
          "time": 58.043485999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326086999999994,
          "durationTicks": 120,
          "midi": 56,
          "name": "G#3",
          "ticks": 21480,
          "time": 58.369572999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 48,
          "name": "C3",
          "ticks": 21600,
          "time": 58.69565999999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 57,
          "name": "A3",
          "ticks": 21720,
          "time": 59.02174699999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 50,
          "name": "D3",
          "ticks": 21840,
          "time": 59.34783399999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 58,
          "name": "A#3",
          "ticks": 21960,
          "time": 59.67392099999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 56,
          "name": "G#3",
          "ticks": 22080,
          "time": 60.000007999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326086999999994,
          "durationTicks": 120,
          "midi": 53,
          "name": "F3",
          "ticks": 22200,
          "time": 60.326094999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 50,
          "name": "D3",
          "ticks": 22320,
          "time": 60.65218199999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 47,
          "name": "B2",
          "ticks": 22440,
          "time": 60.97826899999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 44,
          "name": "G#2",
          "ticks": 22560,
          "time": 61.30435599999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 45,
          "name": "A2",
          "ticks": 22680,
          "time": 61.63044299999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 38,
          "name": "D2",
          "ticks": 22800,
          "time": 61.956529999999994,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.326086999999994,
          "durationTicks": 120,
          "midi": 40,
          "name": "E2",
          "ticks": 22920,
          "time": 62.282616999999995,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 41,
          "name": "F2",
          "ticks": 23040,
          "time": 62.60870399999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 39,
          "name": "D#2",
          "ticks": 23160,
          "time": 62.93479099999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 40,
          "name": "E2",
          "ticks": 23280,
          "time": 63.26087799999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 0.3260870000000011,
          "durationTicks": 120,
          "midi": 52,
          "name": "E3",
          "ticks": 23400,
          "time": 63.58696499999999,
          "velocity": 0.5039370078740157
        },
        {
          "duration": 2.608695999999995,
          "durationTicks": 960,
          "midi": 45,
          "name": "A2",
          "ticks": 23520,
          "time": 63.91305199999999,
          "velocity": 0.5039370078740157
        }
      ],
      "endOfTrackTicks": 24480
    }
  ]
}

// BEAGLE WORKING:

// const loadMidi = (midi) => {
//   Tone.Transport.bpm.value = midi.header.tempos[0].bpm
//   var sampler = new Tone.Sampler({
//     "C4" : "bark.mp3"
//   }).toDestination();

//   var myJSON=JSON.stringify(midi.tracks[0].notes, null,)
//   var parsedArray = JSON.parse(myJSON)

//   console.log(midi.tracks[0].notes)          //this is array of event objects

//   console.log(parsedArray)                   //this is array of event objects

//   //"use an array of objects as long as the object has a "time" attribute" - from Tone.js Docs about Part

//   const part = new Tone.Part(function(time, value){
//   //the value is an object which contains both the note and the velocity
//   Tone.loaded().then(() => {
//     sampler.triggerAttackRelease(value.name, value.duration, time, value.velocity)
//   })

//   },parsedArray).start()
 
//   Tone.Transport.start()    
// }



//WORKING MIDI:

// const loadMidi = (midi) => {
//   Tone.Transport.bpm.value = midi.header.tempos[0].bpm
//   const synth = new Tone.Synth().toDestination();

//   var myJSON=JSON.stringify(midi.tracks[0].notes, null,)
//   var parsedArray = JSON.parse(myJSON)

//   console.log(midi.tracks[0].notes)          //this is array of event objects

//   console.log(parsedArray)                   //this is array of event objects

//   //"use an array of objects as long as the object has a "time" attribute" - from Tone.js Docs about Part

//   const part = new Tone.Part(function(time, value){
//   //the value is an object which contains both the note and the velocity
//   synth.triggerAttackRelease(value.name, value.duration, time, value.velocity)

//   },parsedArray).start()
 
//   Tone.Transport.start()    
// }



// INITIAL:

// function loadMidi(myURL){

//   Midi.fromUrl(myURL).then(midi => {
//       Tone.Transport.bpm.value = midi.header.tempos[0].bpm
//       const synth = new Tone.Synth().toDestination();


//       var myJSON=JSON.stringify(midi.tracks[0].notes, null,)
//       var parsedArray = JSON.parse(myJSON)

//       console.log(midi.tracks[0].notes)          //this is array of event objects

//       console.log(parsedArray)                   //this is array of event objects

//       //"use an array of objects as long as the object has a "time" attribute" - from Tone.js Docs about Part

//       const part = new Tone.Part(function(time, value){
//       //the value is an object which contains both the note and the velocity
//       synth.triggerAttackRelease(value.name, value.duration, time, value.velocity)

//       },parsedArray).start()
     
//       Tone.Transport.start()    
//   })
// }

function App() {
  return (
    <div>
      <button onClick={() => playBark("C5")}>C</button>
      <button onClick={() => loadMidi(bach)}>Play MIDI</button>
    </div>
  );
}

export default App;