import axios from 'axios'

const CURRENT_API_URL = process.env.BACKEND_URL

const instance = axios.create({baseURL: CURRENT_API_URL})

export const Api = {
    sendNeedResourcesData(data) {
        return instance.post('need-resources', data)
    },
    sendHaveResourcesData(data) {
        return instance.post('have-resources', data)
    }
}