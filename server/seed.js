const db = require('./db/db')
const photos = require('./db/FlickrApiResponse')
const Image = require ('./db/models/Image')

const seed = async function(){

  await db.sync( { force: true })
  await Promise.all(photos.map(photo =>{
    try {
   
    let newPhoto = { title: photo.title, imageUrl: photo.url_o}
    return Image.create(newPhoto)
        
    } catch (error) {
        console.log(error)
    }
    
}))

}

module.exports = seed

if (require.main === module) {
    seed()
      .then(() => {
        console.log('Seeding success!');
        db.close();
      })
      .catch((err) => {
        console.error('Oh noes! Something went wrong!');
        console.error(err);
        db.close();
      });
  }