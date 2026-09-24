import React from 'react'

function ICardGallary() {
  const movies = [
    { title: 'Superman', actor: 'David Corenswet', image: 'https://upload.wikimedia.org/wikipedia/en/3/32/Superman_%282025_film%29_poster.jpg' },
    { title: 'Minecraft', actor: 'Jack Black', image: 'https://upload.wikimedia.org/wikipedia/en/6/66/A_Minecraft_Movie_poster.jpg' },
    { title: 'Sinners', actor: 'Michael B. Jordan', image: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Sinners_%282025_film%29_poster.jpg' },
    { title: 'One Battle After Another', actor: 'Leonardo DiCaprio', image: 'https://upload.wikimedia.org/wikipedia/en/5/5d/One_Battle_After_Another.jpg' },
    { title: 'Jurassic World Rebirth', actor: 'Scarlett Johansson', image: 'https://en.wikipedia.org/wiki/Special:FilePath/Jurassic_World_Rebirth_poster.jpg' },
    { title: 'Frankenstein', actor: 'Oscar Isaac', image: 'https://upload.wikimedia.org/wikipedia/en/9/94/Frankenstein_2025_film_poster.jpg' },
    { title: 'Happy Gilmore 2', actor: 'Adam Sandler', image: 'https://en.wikipedia.org/wiki/Special:FilePath/Happy_Gilmore_2_poster.jpg' },
    { title: 'Thunderbolts*', actor: 'Florence Pugh', image: 'https://en.wikipedia.org/wiki/Special:FilePath/Thunderbolts*_poster.jpg' },
    { title: 'The Fantastic Four', actor: 'Pedro Pascal', image: 'https://en.wikipedia.org/wiki/Special:FilePath/The_Fantastic_Four_First_Steps_poster.jpg' },
    { title: 'F1', actor: 'Brad Pitt', image: 'https://upload.wikimedia.org/wikipedia/en/3/38/F1_%282025_film%29.png' },
  ]

  return (
    <main className="page">
      <section className="movie-poster">
        <p className="imdb-logo">IMDb <span>2025</span></p>
        <h1 className="page-title">MOST POPULAR MOVIES</h1>
        <p className="poster-date">AS OF 09/23/25</p>
        <div className="movie-list">
          {movies.map((movie, index) => (
            <article className="movie-item" key={movie.title}>
              <div className="movie-visual">
                <img className="movie-image" src={movie.image} alt={`${movie.title} poster`} />
                <span className="movie-number">{index + 1}</span>
              </div>
              <div>
                <h2>{movie.title}</h2>
                <p>{movie.actor}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ICardGallary
