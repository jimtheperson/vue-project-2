import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type IDGIOutput from '../interfaces/IDGIOutput'

export const useOutputStore = defineStore('outputs', () => {
  const _outputs: Ref<IDGIOutput[]> = ref([
    {
      id: 'corridorDisp1',
      locationID: 'b1f1rCorridors',
      type: 'video',
      title: 'Corridor Display',
      source: [
        {
          id: 'corridorDisp1Source',
          title: 'Source',
          items: [
            { id: 'corridorDisp1Source0', title: 'None', icon: 'mdi-television-off', value: 0 },
            { id: 'corridorDisp1Source1', title: 'Laptop 1', icon: 'mdi-hdmi-port', value: 1 },
            { id: 'corridorDisp1Source2', title: 'Laptop 2', icon: 'mdi-hdmi-port', value: 2 },
            { id: 'corridorDisp1Source3', title: 'Blu-ray', icon: 'mdi-disc-player', value: 3 },
            {
              id: 'corridorDisp1Source4',
              title: 'PC',
              icon: 'mdi-desktop-tower-monitor',
              value: 4
            },
            { id: 'corridorDisp1Source5', title: 'Cable TV', icon: 'mdi-remote-tv', value: 5 }
          ]
        }
      ],
      volume: [{ id: 'corridorDisp1Volume', title: 'Volume', value: 30 }],
      control: [
        {
          id: 'corridorDisp1Power',
          type: 'toggle',
          title: 'Power',
          value: false,
          icon: 'mdi-power'
        }
      ]
    },
    {
      id: 'corridorAudio',
      locationID: 'b1f1rCorridors',
      type: 'audio',
      title: 'Corridor Audio',
      source: [
        {
          id: 'corridorAudioSource',
          title: 'Source',
          items: [
            { id: 'corridorAudioSource0', title: 'None', icon: 'mdi-speaker-off', value: 0 },
            { id: 'corridorAudioSource1', title: 'Laptop 1', icon: 'mdi-hdmi-port', value: 1 },
            { id: 'corridorAudioSource2', title: 'Laptop 2', icon: 'mdi-hdmi-port', value: 2 },
            { id: 'corridorAudioSource3', title: 'Blu-ray', icon: 'mdi-disc-player', value: 3 },
            {
              id: 'corridorAudioSource4',
              title: 'PC',
              icon: 'mdi-desktop-tower-monitor',
              value: 4
            },
            { id: 'corridorAudioSource5', title: 'Cable TV', icon: 'mdi-remote-tv', value: 5 }
          ]
        }
      ],
      volume: [
        { id: 'corridorZone1Volume', title: 'Zone 1', value: 30 },
        { id: 'corridorZone2Volume', title: 'Zone 2', value: 10 },
        { id: 'corridorZone3Volume', title: 'Zone 3', value: 20 }
      ]
    },
    {
      id: 'entryMezAudio',
      locationID: 'b1f1rEntryMez',
      type: 'audio',
      title: 'Mezzanine Audio',
      volume: [
        { id: 'entryMezZone1Volume', title: 'Zone 1', value: 30 },
        { id: 'entryMezZone2Volume', title: 'Zone 2', value: 70 }
      ]
    },
    {
      id: 'entryOutdoorAudio',
      locationID: 'b1f1rEntryOutdoors',
      type: 'audio',
      title: 'Exterior Audio',
      volume: [{ id: 'entryOutdoorVolume', title: 'Volume', value: 30 }]
    }
  ])

  function getOutputsByLocation(locationID: string): IDGIOutput[] {
    const _locationOutputs = _outputs.value.filter((o) => o.locationID === locationID)
    return _locationOutputs
  }

  return { _outputs, getOutputsByLocation }
})
