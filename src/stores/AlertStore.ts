import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type IDGIAlert from '../interfaces/IDGIAlert'

export const useAlertStore = defineStore('alert', () => {
  // const _alert = {
  //     id: 0,
  //     type: undefined,
  //     title: 'Alert Title',
  // }
  const _alerts: Ref<IDGIAlert[]> = ref([])
  const _count = ref(computed(() => _alerts.value.length))

  async function getIndexOfAlertID(id: string | number) {
    const _index = _alerts.value.map((alert) => alert.id).indexOf(id)
    console.log('getIndexOfAlertID: id of: ' + id + ' at index: ' + _index)
    return _index
  }
  async function pushAlert(alert: IDGIAlert) {
    console.log(alert)
    // getIndexOfAlertID(alert.id) ? console.log('cannot push alert ' + alert.id + ' because it already exists') : _alerts.value.push(alert)
    const _indexOfID = await getIndexOfAlertID(alert.id)
    console.log('ruturned index of id ' + _indexOfID)
    if (_indexOfID === -1) {
      _alerts.value.push(alert)
    } else {
      console.log('cannot push alert ' + alert.id + ' because it already exists')
    }
  }
  function popAlert() {
    _alerts.value.pop()
  }
  async function removeAlertByID(id: string | number) {
    console.log('removeAlertByID: ' + id)
    const _indexOfID = await getIndexOfAlertID(id)
    ~_indexOfID && _alerts.value.splice(_indexOfID, 1)
  }
  return { _alerts, _count, pushAlert, popAlert, removeAlertByID }
})
