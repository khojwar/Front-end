
const Movie = ({title, year, image}) => {
  return (
    <div className="movie">
    <img style={{width: "100%", borderRadius: "8px" }} src={image} alt="" />
    <p>{title}</p>
    <p>Year: {year}</p>

    </div>
  )
}

export default Movie