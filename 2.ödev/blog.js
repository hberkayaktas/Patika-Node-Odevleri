const postALL = [
      { person: "hakan" , post:"bugün hava çok güzel"},
      { person: "necmi" , post:"sınavım var"},
      { person: "sena" , post:"buralara yaz günü kar yağıyor canım"}
];

const listPost = () =>{
      postALL.map(singlePost =>{
            console.log(`${singlePost.person}: ${singlePost.post}`);
      })
};

const addPost = (newPost) =>{
      const promise1 = new Promise((resolve , reject) =>{
            postALL.push(newPost);
            resolve(postALL);
            //reject(true);
      })
}

async function showPost() {
      try { 
            await addPost({ person: "Semih" , post:"ölene kadar aşık olamazsın"})
            listPost();
      }catch(error){ 
            console.log(error)
      }
}
showPost();