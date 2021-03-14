import server from "../../server";


export const getHotList = async () =>{
   return await server.get('/video/getHot')
}

export const searchLIke = async (v) =>{
   return  await server.post('/video/searchByLike', {like: v.trim()})
}

export const getVideoByIdAndLike = async (id) =>{
   return await  server.post("/video/getVideoByIdAndLike", {id: parseInt(id)})
}

export const getVideoByTypeAndPage = async (type, limit) =>{
   return await server.post("/video/getVideoByTypeAndPage", {type,limit})
}