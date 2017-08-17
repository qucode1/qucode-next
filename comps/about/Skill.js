
const Skill = (props) => (
  <div className="skill" key={props._id}>
    <div style={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
      <img src={props.image} style={{height: "40px"}}/>
      <p>{props.name}</p>
    </div>
    <div className="prog-cont">
      <div className="prog-val" style={{width: props.progress, backgroundColor: props.color}}></div>
    </div>
    <style jsx>{`
      .prog-cont {
        width: 90%;
        height: 8px;
        border-radius: 8px;
        background-color: lightgrey;
        margin: 0 auto 5px auto;
      }
      .prog-val {
        width: 50%;
        height: 100%;
        border-radius: 10px;
        background-color: purple
      }
      .skill {
        width: 45%
      }
    `}</style>
  </div>
)

export default Skill
