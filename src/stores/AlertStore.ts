import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type IDGIAlert from '../interfaces/IDGIAlert'

export const useAlertStore = defineStore('alert', () => {
  const _alerts: Ref<IDGIAlert[]> = ref([])
  const _count = ref(computed(() => _alerts.value.length))

  //Takes an alert id (string or number) and returns the index that alert in the _alerts array.
  function getIndexOfAlertID(id: string | number) {
    const _index = _alerts.value.map((alert) => alert.id).indexOf(id)
    return _index
  }
  //Takes an alert (IDGIAlert) and adds it to the _alerts array, if alert.id (string or number) does not already exist.
  function pushAlert(alert: IDGIAlert) {
    const _indexOfID = getIndexOfAlertID(alert.id)
    if (_indexOfID === -1) {
      _alerts.value.push(alert)
    } else {
      console.log('cannot push alert ' + alert.id + ' because it already exists')
    }
  }
  //Removes the last alert in the _alerts array
  function popAlert() {
    _alerts.value.pop()
  }
  //Takes an alert id (string or number) and removes the alert from the _alerts array, if it exists.
  function removeAlertByID(id: string | number) {
    // console.log('removeAlertByID: ' + id)
    const _indexOfID = getIndexOfAlertID(id)
    ~_indexOfID && _alerts.value.splice(_indexOfID, 1)
  }
  return { _alerts, _count, pushAlert, popAlert, removeAlertByID }
})
