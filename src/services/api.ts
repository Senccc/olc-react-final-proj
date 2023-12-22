import axios from 'axios';

const api = axios.create({
 baseURL: 'https://cashier.rulim34.dev/',
});

api.interceptors.request.use(async config => {
  config.headers['Authorization'] = "8Cqx+mPoCktZW7iOMrigFoIQPr7oHzCLwaFkuGTAsfE=";
  config.headers['Content-Type'] = "application-json";
  return config;
 });

export const createDirectory = async (data: { title: string }) => {
 return await api.post('/directories', data);
};

export const getDirectories = async () => {
 return await api.get('/directories');
};

export const updateDirectory = async (idDirectory: string, data: { newTitle: string }) => {
 return await api.put(`/directories/${idDirectory}`, data);
};

export const deleteDirectory = async (idDirectory: string) => {
 return await api.delete(`/directories/${idDirectory}`);
};

export const createNotes = async (data: { title: string, body: string, idDirectory: string }) => {
  return await api.post('/notes', data);
 };
 
 export const getNotes = async (data: [ ]) => {
  return await api.get('/notes');
 };
 
 export const getNotesDetailed = async () => {
  return await api.get('/notes/');
 };

 export const updateNotes = async (idDirectory: number, data: { name: string }) => {
  return await api.put(`/directories/${idDirectory}`, data);
 };
 
 export const deleteNotes = async (idDirectory: number) => {
  return await api.delete(`/directories/${idDirectory}`);
 };

// Repeat the above pattern for other API calls