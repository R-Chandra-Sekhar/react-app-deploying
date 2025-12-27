import raja from "../assets/Raja saab.jpg";
import mana from "../assets/Mana Shankar Varaprasad garu.jpg";
import bhartha from "../assets/Bhartha Mahasayulaku Wignyapthi.jpg";
import anaganaga from "../assets/Anaganaga Oka Raju.jpg";
import nari from "../assets/Nari Nari Naduma Murari.jpg";
import jana from "../assets/Jana Nayakudu.jpg";

function Movies() {
  return (
    <div className="page">

      <h1 className="title">2026 Pongal Release Movies</h1>

      <div className="card-container">

        <div className="movie-card">
          <img src={raja} className="movie-img" />
          <h3>The Raja Saab</h3>
          <p>January 9</p>
        </div>

        <div className="movie-card">
          <img src={mana} className="movie-img" />
          <h3>Mana Shankara Varaprasad Garu</h3>
          <p>January 12</p>
        </div>

        <div className="movie-card">
          <img src={bhartha} className="movie-img" />
          <h3>Bhartha Mahasayulaku Wignyapthi</h3>
          <p>January 13</p>
        </div>

        <div className="movie-card">
          <img src={anaganaga} className="movie-img" />
          <h3>Anaganaga Oka Raju</h3>
          <p>January 14</p>
        </div>

        <div className="movie-card">
          <img src={nari} className="movie-img" />
          <h3>Nari Nari Naduma Murari</h3>
          <p>January 15</p>
        </div>

        <div className="movie-card">
          <img src={jana} className="movie-img" />
          <h3>Jana Nayakudu</h3>
          <p>January 9</p>
        </div>

      </div>
    </div>
  );
}

export default Movies;
