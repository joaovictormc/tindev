import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.25.7:3333'
  //baseURL: 'http://10.0.3.2:3333' PORTA GENYMOTION
  //baseURL: 'http://10.0.2.2:3333' PORTA ANDROID STUDIO
  //adb reverse tcp:3333 tcp:3333 EXECUTAR ESSE COMANDO CASO ESTEJA NO EMULADO DE ANDROID PARA USAR O localhost:3333
});

export default api;