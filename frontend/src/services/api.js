import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001"
});

export const createSession = async (email, password) => {
  return await api.post("/auth/login", {email, password});
}

export const newContact = async (nameContact, emailContact, telephoneContact, id) => {
  return api.post(`/user/contacts/${id}`, {nameContact, emailContact, telephoneContact})
}

export const updateContact = async (nameContact, emailContact, telephoneContact, idContato, userId) => {
  try{
    const response = await api.put(`/user/contacts/${userId}`, {idContato, nameContact, emailContact, telephoneContact})
    console.log(response)
    return response
  }catch(error) {
    console.log(error)
  }
}

export const deleteContact = async (contactId, userId) => {
  try{
    const response = await api.delete(`/user/contacts/${userId}`, {data:{contactId}})
    return response
  }catch(error) {
    console.log(error)
  }
}
