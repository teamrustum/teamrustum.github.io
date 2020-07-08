const news = function(){
    fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=ceeb11c85e7547efbfa08bead2590516')
    .then(res=>res.json())
    .then(data=>console.log(data.status))
}
news()