export const fileUpload = async(file) => {
    //configuración cloudinary
    const cluodUrl = 'https://api.cloudinary.com/v1_1/academia/image/upload'
    const fromData = new FormData();
    fromData.append('upload_preset', 'nubesita');
    fromData.append('file', file);

    try {
        const resp = await fetch(cluodUrl, {
            method:'POST',
            body: fromData
        });

        if(resp.ok){
              const cluodRes = await resp.json()
              console.log('data',cluodRes)
              return cluodRes.secure_url;
        }else{
            throw await resp.json();
        }
    } catch (error) {
       throw error;
    }
 
}