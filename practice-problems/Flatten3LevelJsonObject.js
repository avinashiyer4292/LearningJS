var movieLists = [{
    name: "Instant Queue",
    videos: [{
      "id": 70111470,
      "title": "Die Hard",
      "boxarts": [{
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
      }, {
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
      }]
    }, {
      "id": 654356453,
      "title": "Bad Boys",
      "boxarts": [{
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
      }, {
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"
      }]
    }]
  }, {
    name: "New Releases",
    videos: [{
      "id": 65432445,
      "title": "The Chamber",
      "boxarts": [{
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"
      }, {
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
      }]
    }, {
      "id": 675465,
      "title": "Fracture",
      "boxarts": [{
        width: 200,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
      }, {
        width: 150,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
      }, {
        width: 300,
        height: 200,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
      }]
    }]
  }];

    // Use one or more map, concatAll, and filter calls to create an array with the following items
  // [
  //	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  //	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
  //	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
  //	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];

  //ie width of boxart has to be 150


  const flatten = (movieLists) =>{
      return movieLists.map( movie => {
          return movie.videos.map( video => {
              return video.boxarts.filter( boxart => {
                    boxart.width === 150
              }).map ( item =>{
                  return {
                      id: video.id,
                      title: video.title,
                      boxart: item.url
                  };
              })
          }).concatAll();
      }).concatAll();
  }

  console.log(flatten(movieLists));